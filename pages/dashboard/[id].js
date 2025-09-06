import { useRouter } from "next/router";
import Navbar from "../../components/navbar";

export default function AthleteProfile() {
  const router = useRouter();
  const { id } = router.query;

  // Mock Data
  const athlete = {
    id,
    name: "Ravi Kumar",
    sport: "Wrestling",
    age: 21,
    achievements: ["Gold - Nationals 2023", "Bronze - Asian Games"],
    injuries: ["Shoulder injury - recovering"],
    trainingPlan: "Strength training + physiotherapy",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="p-10">
        <h1 className="text-3xl font-bold">{athlete.name}</h1>
        <p className="text-gray-600">{athlete.sport} | Age: {athlete.age}</p>

        <section className="mt-6">
          <h2 className="text-xl font-semibold">Achievements</h2>
          <ul className="list-disc ml-6 text-gray-700">
            {athlete.achievements.map((a, i) => <li key={i}>{a}</li>)}
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold">Injuries</h2>
          <p className="text-gray-700">{athlete.injuries.join(", ")}</p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold">Training Plan</h2>
          <p className="text-gray-700">{athlete.trainingPlan}</p>
        </section>
      </main>
    </div>
  );
}
