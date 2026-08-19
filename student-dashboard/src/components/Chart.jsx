import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Chart = ({ data, dataKey = "percentage", xKey = "month" }) => {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <AreaChart data={data} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
        <defs>
          <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2563eb" stopOpacity={0.35} />
            <stop offset="100%" stopColor="#2563eb" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e9f0" vertical={false} />
        <XAxis dataKey={xKey} tick={{ fontSize: 12, fill: "#64748b" }} axisLine={false} tickLine={false} />
        <YAxis
          tick={{ fontSize: 12, fill: "#64748b" }}
          axisLine={false}
          tickLine={false}
          domain={[0, 100]}
          width={36}
        />
        <Tooltip
          contentStyle={{
            borderRadius: 10,
            border: "1px solid #e5e9f0",
            fontSize: 13,
            boxShadow: "0 8px 20px rgba(15,23,42,0.08)",
          }}
        />
        <Area
          type="monotone"
          dataKey={dataKey}
          stroke="#2563eb"
          strokeWidth={2.5}
          fill="url(#chartFill)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Chart;
