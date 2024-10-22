import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function OverviewChart({
  sales,
}: {
  sales: { month: string; sales: string }[];
}) {
  return (
    <ResponsiveContainer
      width="100%"
      height="100%"
      // aspect={1000 / 500}
      className="rounded-md border border-grey-400"
    >
      <BarChart
        width={300}
        height={300}
        data={sales}
        margin={{
          top: 15,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#F2F2F7" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Bar
          dataKey="sales"
          fill="#8576FF"
          activeBar={<Rectangle stroke="#F2F2F7" />}
          barSize={35}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
