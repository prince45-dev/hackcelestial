"use client";

import { motion } from "framer-motion";
import { Users, MapPin, Award, Star } from "lucide-react";
import { Button } from "../components/ui/button";

export default function AthletesPage() {
  return (
    <div className="bg-gray-950 text-white">
      {/* Impact Section */}
      <section className="py-20 text-center">
        <span className="px-4 py-1 text-sm bg-yellow-500 text-black rounded-full font-medium">
          Platform Impact
        </span>
        <h2 className="text-4xl sm:text-5xl font-bold mt-6">
          Transforming Lives,{" "}
          <span className="text-yellow-400">Building Champions</span>
        </h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Real impact across India&apos;s diverse sporting landscape, ensuring
          no athlete is left behind.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900 p-8 rounded-2xl shadow-lg"
          >
            <Users className="mx-auto h-10 w-10 text-yellow-400" />
            <h3 className="mt-4 text-3xl font-bold">10,247</h3>
            <p className="text-gray-400">Active Athletes</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900 p-8 rounded-2xl shadow-lg"
          >
            <MapPin className="mx-auto h-10 w-10 text-yellow-400" />
            <h3 className="mt-4 text-3xl font-bold">28</h3>
            <p className="text-gray-400">States & UTs</p>
          </motion.div>
        </div>
      </section>

      {/* Empower Section */}
      <section className="py-20 bg-gray-900 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold">
          Empower Every{" "}
          <span className="text-yellow-400">Athlete&apos;s Journey</span>
        </h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Tools for coaches to manage athletes, track progress, and allocate
          resources fairly across all abilities.
        </p>

        <div className="mt-12 max-w-3xl mx-auto space-y-6 text-left">
          <motion.div whileHover={{ x: 10 }}>
            <h3 className="font-semibold text-lg text-yellow-400">
              Performance Analytics
            </h3>
            <p className="text-gray-400">
              Real-time tracking and insights for all athletes
            </p>
          </motion.div>
          <motion.div whileHover={{ x: 10 }}>
            <h3 className="font-semibold text-lg text-yellow-400">
              Training Management
            </h3>
            <p className="text-gray-400">
              Personalized schedules and progress monitoring
            </p>
          </motion.div>
          <motion.div whileHover={{ x: 10 }}>
            <h3 className="font-semibold text-lg text-yellow-400">
              Fair Resource Allocation
            </h3>
            <p className="text-gray-400">
              Equal opportunities for all athletes
            </p>
          </motion.div>
        </div>

        <Button className="mt-10 bg-yellow-500 text-black font-bold hover:bg-yellow-400">
          Access Coach Portal
        </Button>
      </section>

      {/* Success Stories */}
      <section className="py-20 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold">
          Success <span className="text-yellow-400">Stories</span>
        </h2>
        <p className="mt-4 text-gray-400">
          Real athletes, real achievements, real impact
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "Kavya Reddy",
              location: "Rural Telangana",
              sport: "Para-Athletics",
              achievement: "National Champion",
              quote:
                "From limited resources to national glory through platform support",
            },
            {
              name: "Arjun Mehta",
              location: "Maharashtra",
              sport: "Wrestling",
              achievement: "State Gold Medal",
              quote:
                "Personalized training led to breakthrough performance",
            },
            {
              name: "Priya Kumari",
              location: "Bihar",
              sport: "Boxing",
              achievement: "International Selection",
              quote:
                "Rural talent discovered and nurtured through our outreach program",
            },
          ].map((athlete, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 p-6 rounded-xl shadow-lg"
            >
              <span className="px-3 py-1 bg-yellow-500 text-black text-sm font-bold rounded-full">
                {athlete.sport}
              </span>
              <h3 className="mt-4 text-xl font-bold">{athlete.name}</h3>
              <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
                <MapPin className="h-4 w-4" /> {athlete.location}
              </p>
              <p className="mt-2 font-semibold text-yellow-400">
                {athlete.achievement}
              </p>
              <p className="mt-2 text-gray-400 text-sm italic">
                &quot;{athlete.quote}&quot;
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Join Movement */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-center rounded-2xl mx-4 mb-10">
        <h2 className="text-4xl sm:text-5xl font-bold">
          Join the <span className="text-yellow-400">Movement</span>
        </h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Be part of India&apos;s most inclusive sports platform. Whether
          you&apos;re an athlete, coach, or organization — let&apos;s build a
          fairer ecosystem.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold">
            Register as Athlete
          </Button>
          <Button
            variant="outline"
            className="border-yellow-500 text-yellow-400 hover:bg-yellow-500/20"
          >
            Partner with Us
          </Button>
        </div>
      </section>
    </div>
  );
}
