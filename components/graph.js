import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";

const sample = [
  { name: "Jan", score: 52 },
  { name: "Feb", score: 58 },
  { name: "Mar", score: 61 },
  { name: "Apr", score: 66 },
  { name: "May", score: 70 },
  { name: "Jun", score: 74 },
];

export default function Graph({ data = sample, dataKey = "score", title = "Progress" }) {
  return (
    <div className="p-5 bg-white rounded-2xl shadow">
      <div className="font-semibold mb-3">{title}</div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey={dataKey} strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
