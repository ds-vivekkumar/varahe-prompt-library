"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"
import Link from "next/link"
import { ExternalLink, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleGoogleSignIn = async () => {
    try {
      setIsLoading(true)
      setError("")

      const result = await signIn("google", {
        redirect: false,
        callbackUrl: "/",
      })

      if (result?.error) {
        setError("Access denied. Only @varaheanalytics.com users are allowed.")
      } else if (result?.url) {
        window.location.href = result.url
      }
    } catch (error) {
      console.error("Sign in error:", error)
      setError("An error occurred during sign in. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-6">
        <Link href="/" className="text-xl font-semibold tracking-wide">
          VARAHE ANALYTICS
        </Link>
        <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
          Chat with Claude
          <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      </header>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] px-4">
        <div className="w-full max-w-md space-y-8">
          {/* Title Section */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-semibold">Build with Claude</h1>
            <p className="text-gray-400 text-lg">Sign in with your Varahe Analytics account to access the platform</p>
          </div>

          {/* Error Alert */}
          {error && (
            <Alert className="bg-red-900/20 border-red-800 text-red-200">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {/* Login Form */}
          <div className="space-y-6">
            {/* Google Sign In */}
            <Button
              onClick={handleGoogleSignIn}
              disabled={isLoading}
              className="w-full h-12 bg-white text-black hover:bg-gray-100 flex items-center justify-center gap-3 font-medium"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
              ) : (
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
              )}
              {isLoading ? "Signing in..." : "Continue with Google"}
            </Button>

            {/* Domain Restriction Notice */}
            <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">!</span>
                </div>
                <div>
                  <h3 className="text-blue-200 font-medium mb-1">Restricted Access</h3>
                  <p className="text-blue-300 text-sm">
                    Only users with <strong>@varaheanalytics.com</strong> email addresses can access this platform.
                  </p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-600"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-900 text-blue-400 font-medium">OR</span>
              </div>
            </div>

            {/* Email Input - Disabled */}
            <div className="space-y-4 opacity-50">
              <Input
                type="email"
                placeholder="Enter your @varaheanalytics.com email"
                disabled
                className="w-full h-12 bg-gray-800 border-gray-600 text-white placeholder-gray-400"
              />
              <Button disabled className="w-full h-12 bg-gray-600 text-gray-400 cursor-not-allowed">
                Email login temporarily disabled
              </Button>
            </div>
          </div>

          {/* Terms */}
          <div className="text-center text-sm text-gray-400 space-y-1">
            <p>
              By continuing, you agree to Varahe Analytics{" "}
              <Link href="#" className="text-gray-300 underline hover:text-white">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="#" className="text-gray-300 underline hover:text-white">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
