import Link from "next/link"
import { AlertCircle, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AuthErrorPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-gray-800 border-gray-700">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center">
            <AlertCircle className="h-6 w-6 text-red-500" />
          </div>
          <CardTitle className="text-white">Authentication Error</CardTitle>
          <CardDescription className="text-gray-400">
            Something went wrong with authentication. Please try again.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2 pt-4">
            <Button asChild variant="outline" className="flex-1 border-gray-600 text-white hover:bg-gray-700">
              <Link href="/login">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Try Again
              </Link>
            </Button>
            <Button asChild className="flex-1 bg-white text-black hover:bg-gray-100">
              <Link href="/">Go Home</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
