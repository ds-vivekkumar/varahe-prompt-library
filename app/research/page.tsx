import Link from "next/link"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold mb-4">Research</h1>
          <p className="text-xl text-muted-foreground">
            Advancing AI safety and capabilities through rigorous research
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Constitutional AI
                <ExternalLink className="h-4 w-4" />
              </CardTitle>
              <CardDescription>Training AI systems to be helpful, harmless, and honest</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Our approach to training AI systems using a constitution of principles to guide behavior.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                AI Safety Research
                <ExternalLink className="h-4 w-4" />
              </CardTitle>
              <CardDescription>Ensuring AI systems remain safe and aligned</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Research into alignment, interpretability, and robustness of large language models.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Scaling Laws
                <ExternalLink className="h-4 w-4" />
              </CardTitle>
              <CardDescription>Understanding how AI capabilities scale with compute</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Empirical studies on how model performance scales with training compute and data.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="prose prose-gray dark:prose-invert max-w-none">
          <h2>Latest Publications</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-primary pl-4">
              <h3 className="text-lg font-semibold">Constitutional AI: Harmlessness from AI Feedback</h3>
              <p className="text-muted-foreground">December 2022</p>
              <p>
                We introduce Constitutional AI (CAI), a method for training AI assistants to be helpful and harmless
                without human feedback labels for harmfulness.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <h3 className="text-lg font-semibold">
                Training a Helpful and Harmless Assistant with Reinforcement Learning from Human Feedback
              </h3>
              <p className="text-muted-foreground">April 2022</p>
              <p>
                We apply preference modeling and reinforcement learning from human feedback (RLHF) to fine-tune language
                models to act as helpful and harmless assistants.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
