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
          <CardTitle className="text-white">Access Denied</CardTitle>
          <CardDescription className="text-gray-400">
            You don't have permission to access this application
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-gray-700/50 p-4 rounded-lg">
            <h3 className="font-semibold text-white mb-2">Restricted Access</h3>
            <p className="text-sm text-gray-300">
              This application is only available to users with a <strong>@varaheanalytics.com</strong> email address.
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-gray-400">If you believe this is an error:</p>
            <ul className="text-sm text-gray-400 space-y-1 ml-4">
              <li>• Ensure you're using your Varahe Analytics email</li>
              <li>• Contact your administrator for access</li>
              <li>• Try signing in with a different account</li>
            </ul>
          </div>
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
