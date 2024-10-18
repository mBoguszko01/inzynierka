import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

//dummy data stanu konta
const cashChartDummyData = [
  { date: "2024-10-01", balance: 1554.45 },
  { date: "2024-10-02", balance: 4180.57 },
  { date: "2024-10-03", balance: 3177.72 },
  { date: "2024-10-04", balance: 3817.15 },
  { date: "2024-10-05", balance: 3475.12 },
  { date: "2024-10-06", balance: 4798.06 },
  { date: "2024-10-07", balance: 3520.54 },
  { date: "2024-10-08", balance: 3083.33 },
  { date: "2024-10-09", balance: 2777.33 },
  { date: "2024-10-10", balance: 2410.35 },
  { date: "2024-10-11", balance: 3835.49 },
  { date: "2024-10-12", balance: 4689.15 },
  { date: "2024-10-13", balance: 2038.17 },
  { date: "2024-10-14", balance: 1313.6 },
  { date: "2024-10-15", balance: 2294.71 },
  { date: "2024-10-16", balance: 4512.56 },
  { date: "2024-10-17", balance: 2187.27 },
  { date: "2024-10-18", balance: 2922.58 },
  { date: "2024-10-19", balance: 4637.02 },
  { date: "2024-10-20", balance: 4358.27 },
  { date: "2024-10-21", balance: 1525.93 },
  { date: "2024-10-22", balance: 1979.17 },
  { date: "2024-10-23", balance: 4322.99 },
  { date: "2024-10-24", balance: 1633.88 },
  { date: "2024-10-25", balance: 4285.68 },
  { date: "2024-10-26", balance: 1869.4 },
  { date: "2024-10-27", balance: 2114.02 },
  { date: "2024-10-28", balance: 3398.06 },
  { date: "2024-10-29", balance: 4597.01 },
  { date: "2024-10-30", balance: 4719.72 },
  { date: "2024-10-31", balance: 4744.0 },
];

const CashChart = () => {
  return (
    <div style={{width: '100%', height: '100%', paddingRight: '19px', display: 'flex', alignItems: 'center'}}>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={cashChartDummyData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="balance" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CashChart;
