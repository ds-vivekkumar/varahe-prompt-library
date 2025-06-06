"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { signOut } from "firebase/auth"
import { auth } from "../firebase/config"

export default function LogoutPage() {
  const router = useRouter()
  useEffect(() => {
    signOut(auth).then(() => {
      router.push("/login")
    })
  }, [router])
  return <div className="min-h-screen flex items-center justify-center text-white bg-gray-900">Logging out...</div>
}
