"use client"
import Image from "next/image"
import Link from "next/link"
import { useSession, signIn, signOut } from "next-auth/react"
import { Button } from "../components/ui/button"

export default function Home() {
  const { data: session } = useSession()

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* ================= NAVBAR ================= */}
      <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-md sticky top-0 z-50">
        {/* Left: Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-yellow-500 rounded flex items-center justify-center font-bold text-black">
            🏆
          </div>
          <div>
            <h1 className="text-lg font-bold text-black">OneAthlete</h1>
            <p className="text-xs text-gray-500 -mt-1">One Nation, One Platform</p>
          </div>
        </div>

        {/* Middle: Navigation Links */}
        <div className="hidden md:flex space-x-6 font-medium">
          <Link href="/features" className="text-gray-700 hover:text-yellow-500">Features</Link>
          <Link href="/athletes" className="text-gray-700 hover:text-yellow-500">Athletes</Link>
          <Link href="/coaches" className="text-gray-700 hover:text-yellow-500">Coaches</Link>
          <Link href="/impact" className="text-gray-700 hover:text-yellow-500">Impact</Link>
        </div>

        {/* Right: Auth + CTA */}
        <div className="flex items-center space-x-4">
          {session ? (
            <>
              <span className="text-gray-600 text-sm">Hi, {session.user?.name}</span>
              <Button
                variant="destructive"
                className="bg-gray-800 text-white hover:bg-gray-900"
                onClick={() => signOut()}
              >
                Sign Out
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="ghost"
                className="text-gray-700 hover:text-yellow-500"
                onClick={() => signIn()}
              >
                Login
              </Button>
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                Join Platform
              </Button>
            </>
          )}
        </div>
      </nav>

      {/* ================= HERO SECTION ================= */}
      <section className="relative flex flex-col items-center justify-center text-center py-20">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0">
          <Image
            src="/hero-bg.jpg" // put your hero background image inside public/hero-bg.jpg
            alt="Athletes background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-gray-800/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="text-white">One Nation, </span>
            <span className="text-yellow-500">One Athlete</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300">
            Ensuring fairness, access, and opportunity for every athlete across India.
            From rural villages to metropolitan cities, we&apos;re building an inclusive sports ecosystem.
          </p>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-black/80 backdrop-blur-md p-6 rounded-lg border border-yellow-500/40">
              <h3 className="text-2xl font-bold text-yellow-400">10K+</h3>
              <p className="text-sm text-gray-200">Active Athletes</p>
            </div>
            <div className="bg-black/80 backdrop-blur-md p-6 rounded-lg border border-yellow-500/40">
              <h3 className="text-2xl font-bold text-yellow-400">28</h3>
              <p className="text-sm text-gray-200">States Covered</p>
            </div>
            <div className="bg-black/80 backdrop-blur-md p-6 rounded-lg border border-yellow-500/40">
              <h3 className="text-2xl font-bold text-yellow-400">50+</h3>
              <p className="text-sm text-gray-200">Sports Disciplines</p>
            </div>
            <div className="bg-black/80 backdrop-blur-md p-6 rounded-lg border border-yellow-500/40">
              <h3 className="text-2xl font-bold text-yellow-400">100%</h3>
              <p className="text-sm text-gray-200">Inclusivity</p>
            </div>
          </div>
        </div>
      </section>

      

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold transition transform hover:scale-105">
              Register Your Institute
            </Button>
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold transition transform hover:scale-105">
              Register as Athlete
            </Button>
            <Button variant="secondary" className="bg-gray-200 text-black hover:bg-gray-300 transition transform hover:scale-105">
              Coach Portal
            </Button>
            <Button variant="outline" className="text-white border-yellow-500 hover:bg-yellow-500/20 transition transform hover:scale-105">
              Watch Demo
            </Button>
          </div>
        </div>
  )
}
