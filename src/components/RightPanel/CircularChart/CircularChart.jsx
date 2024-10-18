import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Netflix", value: 400 },
  { name: "Gym", value: 300 },
  { name: "Groceries", value: 300 },
  { name: "Rent", value: 500 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const CircularChart = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        paddingBottom: "19px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <ResponsiveContainer width="100%" height={'80%'}>
        <PieChart>
          <Pie
            data={data}
            cx="50%" // Pozycja X
            cy="50%" // Pozycja Y
            innerRadius={'70%'}
            outerRadius={'80%'} // Promień zewnętrzny
            fill="#8884d8"
            dataKey="value"
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
export default CircularChart;
