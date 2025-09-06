"use client"

import Link from "next/link"
import { useSession, signIn, signOut } from "next-auth/react"
import { Button } from "./ui/button"   // ✅ fixed path

export default function Navbar() {
  const { data: session } = useSession()

  return (
    <nav className="flex items-center justify-between px-6 py-3 shadow bg-white">
      <h1 className="text-2xl font-bold text-blue-600">One Nation, One Athlete</h1>

      <div className="flex items-center space-x-4">
        <Link href="/">Home</Link>
        <Link href="/athletes">Athletes</Link>
        <Link href="/resources">Resources</Link>
        <Link href="/admin">Admin</Link>

        {session ? (
          <>
            <span className="text-gray-600">Hi, {session.user?.name}</span>
            <Button variant="destructive" onClick={() => signOut()}>
              Sign Out
            </Button>
          </>
        ) : (
          <Button onClick={() => signIn()}>Sign In</Button>
        )}
      </div>
    </nav>
  )
}
