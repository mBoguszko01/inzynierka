import { mdiCardsPlayingSpadeMultiple } from "@mdi/js";
import { useSelector } from "react-redux";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const CircularChart = (props) => {
  const { chartName } = props;
  let chartData;
  let colors = [];
  const categories = useSelector((state) => state.categories.categoryList);

  if (chartName === "Distribution of Financial Assets") {
    chartData = useSelector((state) => state.assets).totalAssets;
    colors = chartData.map((asset, index) => asset.color || "#abc121");
    chartData = chartData.map(({ name, value }) => ({
      name: name || "Unknown",
      value: typeof value === "string" ? parseFloat(value) : value,
    }));
  } else {
    const transactions = useSelector(
      (state) => state.transactions.transactionsList
    );
    const filteredTransactions = transactions.filter(({ date }) => {
      const transactionDate = new Date(date);
      return (
        transactionDate.getMonth() === new Date().getMonth() &&
        transactionDate.getFullYear() === new Date().getFullYear()
      );
    });
    chartData = Object.entries(
      filteredTransactions.reduce((acc, { category_id, price }) => {
        const category = categories.find((cat) => cat.id === category_id);
        const categoryName = category ? category.name : "Unknown";
        acc[categoryName] = (acc[categoryName] || 0) + parseFloat(price);
        return acc;
      }, {})
    ).map(([name, value]) => ({ name, value }));
    colors = filteredTransactions.map(({ category_id }) => {
      const category = categories.find((cat) => cat.id === category_id);
      return category ? category.color : "#CCCCCC";
    });
  }
  return (
    <>
      <div className="circular-chart-name-container">
        <span className="circular-chart-name">{chartName}</span>
      </div>
      <div
        style={{
          width: "100%",
          height: "75%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center  ",
        }}
      >
        {chartData.length === 0 && (
          <span className="no-data-info">There is no data to display.</span>
        )}
        {chartData.length !== 0 && (
          <ResponsiveContainer width="100%" height="100%">
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
                    fill={colors[index % colors.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        )}
      </div>
    </>
  );
};
export default CircularChart;
