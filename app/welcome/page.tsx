import Link from "next/link"
import { ArrowLeft, ArrowRight, BookOpen, Code, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function WelcomePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold mb-4">Welcome to Varahe Analytics Prompts Librabry</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Build with Claude, our AI assistant that's helpful, harmless, and honest. Get started with our comprehensive
            guides and resources.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <BookOpen className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Quick Start Guide</CardTitle>
              <CardDescription>Get up and running with Claude in minutes</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Learn the basics of interacting with Claude and making your first API calls.
              </p>
              <Button variant="outline" className="w-full">
                Start Learning
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Code className="h-8 w-8 text-primary mb-2" />
              <CardTitle>API Documentation</CardTitle>
              <CardDescription>Comprehensive API reference and examples</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Detailed documentation for all endpoints, parameters, and response formats.
              </p>
              <Button variant="outline" className="w-full">
                View Docs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Zap className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Best Practices</CardTitle>
              <CardDescription>Tips and techniques for optimal results</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Learn how to craft effective prompts and handle common use cases.
              </p>
              <Button variant="outline" className="w-full">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="prose prose-gray dark:prose-invert max-w-none">
          <h2>What is Claude?</h2>
          <p>
            Claude is an AI assistant created by Vercel. It's designed to be helpful, harmless, and honest. Claude can
            assist with a wide variety of tasks including analysis, writing, math, coding, creative projects, and much
            more.
          </p>

          <h3>Key Features</h3>
          <ul>
            <li>
              <strong>Large Context Window:</strong> Process and analyze large documents and datasets
            </li>
            <li>
              <strong>Multimodal Capabilities:</strong> Work with text, images, and other media types
            </li>
            <li>
              <strong>Code Generation:</strong> Write, debug, and explain code in multiple programming languages
            </li>
            <li>
              <strong>Safety First:</strong> Built with Constitutional AI for responsible and safe interactions
            </li>
          </ul>

          <h3>Getting Started</h3>
          <p>
            Ready to start building with Claude? Check out our developer guide for step-by-step instructions, or dive
            into the API documentation to explore all available endpoints and capabilities.
          </p>
        </div>
      </div>
    </div>
  )
}
