import Navbar from "../../components/navbar";
import StatCard from "../../components/StatCard";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8 grid gap-6">
        <div className="grid md:grid-cols-4 gap-4">
          <StatCard title="Total Athletes" value="1,248" />
          <StatCard title="Total Coaches" value="186" />
          <StatCard title="Scholarships" value="₹1.2Cr" />
          <StatCard title="Regions Covered" value="28" />
        </div>

        <div className="p-5 bg-white rounded-2xl shadow">
          <div className="font-semibold mb-3">Resource Allocation (Demo)</div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left border-b">
                  <th className="py-2">State</th>
                  <th className="py-2">Athletes</th>
                  <th className="py-2">Scholarships</th>
                  <th className="py-2">Medical Support</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Bihar", 112, "₹12L", "Active"],
                  ["Maharashtra", 208, "₹21L", "Active"],
                  ["Assam", 74, "₹6L", "Pending"],
                ].map((r, i) => (
                  <tr key={i} className="border-b">
                    <td className="py-2">{r[0]}</td>
                    <td className="py-2">{r[1]}</td>
                    <td className="py-2">{r[2]}</td>
                    <td className="py-2">{r[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="p-5 bg-white rounded-2xl shadow">
          <div className="font-semibold mb-3">Inclusivity Filters (Demo)</div>
          <div className="flex gap-3">
            <button className="px-4 py-2 rounded-xl border">Para Athletes</button>
            <button className="px-4 py-2 rounded-xl border">Rural</button>
            <button className="px-4 py-2 rounded-xl border">Female</button>
          </div>
        </div>
      </div>
    </div>
  );
}
