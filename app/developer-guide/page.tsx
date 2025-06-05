import Link from "next/link"
import { ArrowLeft, Code, Terminal, Book, Lightbulb } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function DeveloperGuidePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold mb-4">Developer Guide</h1>
          <p className="text-xl text-muted-foreground">
            Everything you need to integrate Claude into your applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card>
            <CardHeader>
              <Terminal className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Getting Started</CardTitle>
              <CardDescription>Set up your development environment</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Authentication</span>
                <Badge variant="secondary">Required</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">API Keys</span>
                <Badge variant="secondary">Setup</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Rate Limits</span>
                <Badge variant="outline">Important</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Code className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Code Examples</CardTitle>
              <CardDescription>Ready-to-use code snippets</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Python SDK</span>
                <Badge>Popular</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">JavaScript/Node.js</span>
                <Badge>Popular</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">cURL Examples</span>
                <Badge variant="outline">Basic</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="prose prose-gray dark:prose-invert max-w-none">
          <h2>Quick Start</h2>
          <p>Get up and running with Claude in just a few steps:</p>

          <h3>1. Install the SDK</h3>
          <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
            <code>{`# Python
pip install anthropic

# Node.js
npm install @anthropic-ai/sdk`}</code>
          </pre>

          <h3>2. Set up Authentication</h3>
          <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
            <code>{`# Set your API key as an environment variable
export ANTHROPIC_API_KEY="your-api-key-here"`}</code>
          </pre>

          <h3>3. Make Your First Request</h3>
          <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
            <code>{`import anthropic

client = anthropic.Anthropic()

message = client.messages.create(
    model="claude-3-sonnet-20240229",
    max_tokens=1000,
    temperature=0,
    messages=[
        {
            "role": "user",
            "content": "Hello, Claude!"
        }
    ]
)
print(message.content)`}</code>
          </pre>

          <h2>Core Concepts</h2>

          <div className="grid md:grid-cols-2 gap-6 not-prose mb-8">
            <Card>
              <CardHeader>
                <Book className="h-6 w-6 text-primary mb-2" />
                <CardTitle className="text-lg">Messages API</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  The primary way to interact with Claude using conversational messages.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Lightbulb className="h-6 w-6 text-primary mb-2" />
                <CardTitle className="text-lg">Prompt Engineering</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Best practices for crafting effective prompts to get optimal results.
                </p>
              </CardContent>
            </Card>
          </div>

          <h2>Advanced Topics</h2>
          <ul>
            <li>
              <strong>Streaming Responses:</strong> Handle real-time response streaming
            </li>
            <li>
              <strong>Function Calling:</strong> Enable Claude to call external functions
            </li>
            <li>
              <strong>Vision Capabilities:</strong> Process and analyze images
            </li>
            <li>
              <strong>Error Handling:</strong> Robust error handling and retry logic
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
