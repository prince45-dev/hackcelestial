// pages/coaches.js
import Head from "next/head";

export default function Coaches() {
  return (
    <>
      <Head>
        <title>One Nation, One Athlete | Coaches</title>
        <meta
          name="description"
          content="Meet the coaches empowering athletes across India"
        />
      </Head>

      <section className="min-h-screen bg-black text-white px-6 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-yellow-400">
            Our Coaches
          </h1>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Dedicated coaches guiding athletes with passion, discipline, and
            vision to achieve excellence in sports.
          </p>
        </div>

        {/* Coach Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-gray-900 rounded-xl shadow-lg p-6 hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-yellow-400">
              Rajesh Kumar
            </h3>
            <p className="text-gray-300 mt-2">
              Football Coach | 15+ years of experience building young talent.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-900 rounded-xl shadow-lg p-6 hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-yellow-400">
              Anjali Mehta
            </h3>
            <p className="text-gray-300 mt-2">
              Athletics Coach | Specializes in sprint training & performance.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-900 rounded-xl shadow-lg p-6 hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-yellow-400">
              Vikram Singh
            </h3>
            <p className="text-gray-300 mt-2">
              Cricket Coach | Focused on grassroots cricket development.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-gray-900 rounded-xl shadow-lg p-6 hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-yellow-400">
              Neha Sharma
            </h3>
            <p className="text-gray-300 mt-2">
              Basketball Coach | Expert in team strategy and motivation.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-gray-900 rounded-xl shadow-lg p-6 hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-yellow-400">
              Arjun Patel
            </h3>
            <p className="text-gray-300 mt-2">
              Wrestling Coach | Trains national-level wrestlers with discipline.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-gray-900 rounded-xl shadow-lg p-6 hover:scale-105 transition-transform">
            <h3 className="text-xl font-semibold text-yellow-400">
              Priya Nair
            </h3>
            <p className="text-gray-300 mt-2">
              Swimming Coach | Helps athletes reach peak physical endurance.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
