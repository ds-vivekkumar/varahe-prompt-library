import Link from "next/link"
import { ArrowLeft, Code2, Database, Shield, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function APIGuidePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold mb-4">API Guide</h1>
          <p className="text-xl text-muted-foreground">Complete reference for the Anthropic API</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardHeader className="text-center">
              <Code2 className="h-8 w-8 text-primary mx-auto mb-2" />
              <CardTitle className="text-lg">REST API</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <Badge variant="secondary">v1</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <Database className="h-8 w-8 text-primary mx-auto mb-2" />
              <CardTitle className="text-lg">Models</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <Badge>Claude-3</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
              <CardTitle className="text-lg">Authentication</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <Badge variant="outline">API Key</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
              <CardTitle className="text-lg">Rate Limits</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <Badge variant="secondary">Tiered</Badge>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="messages" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="messages">Messages</TabsTrigger>
            <TabsTrigger value="models">Models</TabsTrigger>
            <TabsTrigger value="auth">Authentication</TabsTrigger>
            <TabsTrigger value="errors">Error Codes</TabsTrigger>
          </TabsList>

          <TabsContent value="messages" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>POST /v1/messages</CardTitle>
                <CardDescription>Create a message with Claude</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Request Body</h4>
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                      <code>{`{
  "model": "claude-3-sonnet-20240229",
  "max_tokens": 1000,
  "messages": [
    {
      "role": "user",
      "content": "Hello, Claude!"
    }
  ]
}`}</code>
                    </pre>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Response</h4>
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                      <code>{`{
  "id": "msg_01XFDUDYJgAACzvnptvVoYEL",
  "type": "message",
  "role": "assistant",
  "content": [
    {
      "type": "text",
      "text": "Hello! How can I help you today?"
    }
  ],
  "model": "claude-3-sonnet-20240229",
  "stop_reason": "end_turn",
  "usage": {
    "input_tokens": 12,
    "output_tokens": 19
  }
}`}</code>
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="models" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Claude 3 Opus</CardTitle>
                  <CardDescription>Most capable model</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Model ID:</span>
                      <code className="text-sm">claude-3-opus-20240229</code>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Context:</span>
                      <span className="text-sm">200K tokens</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Best for:</span>
                      <span className="text-sm">Complex tasks</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Claude 3 Sonnet</CardTitle>
                  <CardDescription>Balanced performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Model ID:</span>
                      <code className="text-sm">claude-3-sonnet-20240229</code>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Context:</span>
                      <span className="text-sm">200K tokens</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Best for:</span>
                      <span className="text-sm">Most use cases</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="auth" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>API Key Authentication</CardTitle>
                <CardDescription>Authenticate your requests using API keys</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Header Format</h4>
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                      <code>x-api-key: your-api-key-here</code>
                    </pre>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Example Request</h4>
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                      <code>{`curl https://api.anthropic.com/v1/messages \\
  -H "Content-Type: application/json" \\
  -H "x-api-key: $ANTHROPIC_API_KEY" \\
  -H "anthropic-version: 2023-06-01" \\
  -d '{
    "model": "claude-3-sonnet-20240229",
    "max_tokens": 1000,
    "messages": [{"role": "user", "content": "Hello!"}]
  }'`}</code>
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="errors" className="space-y-6">
            <div className="grid gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Badge variant="destructive">400</Badge>
                    Bad Request
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Invalid request format or missing required parameters</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Badge variant="destructive">401</Badge>
                    Unauthorized
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Invalid or missing API key</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Badge variant="destructive">429</Badge>
                    Rate Limited
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Too many requests, please slow down</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
