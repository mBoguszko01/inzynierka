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
import { useDispatch, useSelector } from "react-redux";

const CashChart = () => {
  const cashBalance = useSelector((state) => state.balance.balanceHistory);
  const formattedData = cashBalance.map((item) => ({
    ...item,
    balance: parseFloat(item.balance),
  }));
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
  };
  return (
    <>
      {cashBalance.length > 0 && (
        <div
          style={{
            width: "100%",
            height: "40vh",
            paddingRight: "19px",
            display: "flex",
            alignItems: "center",
            marginTop: "16px",
            paddingLeft: "16px",
          }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={formattedData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="date"
                tickFormatter={(date) => new Date(date).toLocaleDateString()}
              />
              <YAxis
                domain={["dataMin", "dataMax"]}
                tickFormatter={(value) => {
                  if (value >= 1000 && value <= 999999) {
                    return `$${value / 1000}k`;
                  } else if (value >= 1000000) {
                    return `$${value / 1000000}m`;
                  } else {
                    return `$${value}`;
                  }
                }}
              />

              <Tooltip
                formatter={(value, name, props) => [value, name]}
                labelFormatter={(label) => formatDate(label)}
              />
              <Legend />
              <Line type="monotone" dataKey="balance" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
      {cashBalance.length == 0 && (
        <span
          className="no-data-info"
          style={{ textAlign: "center", width: "100%" }}
        >
          There is no data to display.
        </span>
      )}
    </>
  );
};

export default CashChart;
