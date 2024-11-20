import { useSelector } from "react-redux";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

//useSelector((state) => state.transactions).transactionsList
//useSelector((state) => state.assets).totalAssets
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const CircularChart = (props) => {
  const { chartName } = props;
  let chartData;
  let colors = [...COLORS];
  if(chartName === 'Distribution of Financial Assets'){
    chartData = useSelector((state) => state.assets).totalAssets;
  }
  else{
    const transactions = useSelector((state) => state.transactions.transactionsList)
    const filteredTransactions = transactions.filter(({date}) => {
      const transactionDate = new Date(date);
      return transactionDate.getMonth() === (new Date()).getMonth() && transactionDate.getFullYear() === (new Date()).getFullYear()
    })
    chartData = Object.entries(
      filteredTransactions.reduce((acc, { category, price }) => {
        acc[category] = (acc[category] || 0) + price;
        return acc;
      }, {})
    ).map(([name, value]) => ({ name, value }));

    let categories = useSelector((state) => state.categories.categoryList)
    colors = categories.map(category => category.color);
  }
  return (
    <>
      <div className="circular-chart-name-container">
        <span className="circular-chart-name">{chartName}</span>
      </div>

      <ResponsiveContainer width="100%" height={"80%"}>
        <PieChart>
          <Pie
            data={chartData} // wymaga struktur {name: ... , value: ...}
            cx="50%"
            cy="50%"
            innerRadius={"70%"}
            outerRadius={"80%"} // zmiana tych parametrów zmienia grubość pierścienia
            fill="#8884d8"
            dataKey="value"
            label
          >
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </>
  );
};
export default CircularChart;
