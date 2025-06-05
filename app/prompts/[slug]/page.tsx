import Link from "next/link"
import { ArrowLeft, Copy, Download, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const prompts = {
  "cosmic-keystrokes": {
    title: "Cosmic keystrokes",
    description:
      "Generate an interactive speed typing game in a single HTML file, featuring side-scrolling gameplay and Tailwind CSS styling",
    icon: "🎮",
    category: "Gaming",
    difficulty: "Intermediate",
    prompt: `Create an interactive speed typing game in a single HTML file. The game should feature:

1. Side-scrolling gameplay where words move from right to left
2. A typing input field at the bottom
3. Score tracking and WPM calculation
4. Responsive design using Tailwind CSS
5. Smooth animations and visual feedback
6. Game over screen with restart option

Requirements:
- Use vanilla JavaScript (no external libraries except Tailwind CSS)
- Include at least 50 different words for the game
- Implement collision detection when words reach the left edge
- Show real-time statistics (score, WPM, accuracy)
- Add sound effects using Web Audio API
- Make it mobile-friendly

The game should be visually appealing with a space/cosmic theme, including:
- Starfield background animation
- Neon-style text effects
- Particle effects when words are typed correctly
- Smooth transitions between game states`,
    example: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cosmic Keystrokes</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
        }
        .floating { animation: float 3s ease-in-out infinite; }
    </style>
</head>
<body class="bg-gray-900 text-white overflow-hidden">
    <div id="game-container" class="relative w-full h-screen">
        <!-- Game content here -->
    </div>
    <script>
        // Game logic implementation
        class CosmicKeystrokes {
            constructor() {
                this.init();
            }
            
            init() {
                // Initialize game
            }
        }
        
        new CosmicKeystrokes();
    </script>
</body>
</html>`,
  },
  "corporate-clairvoyant": {
    title: "Corporate clairvoyant",
    description:
      "Extract insights, identify risks, and distill key information from long corporate reports into a single memo",
    icon: "📋",
    category: "Business Analysis",
    difficulty: "Advanced",
    prompt: `You are a corporate analyst with expertise in financial analysis, risk assessment, and strategic planning. Your task is to analyze a corporate report and create a comprehensive executive summary.

Please analyze the provided corporate report and create a structured memo that includes:

## Executive Summary
- Key findings in 2-3 sentences
- Overall assessment of company performance

## Financial Highlights
- Revenue and profit trends
- Key financial ratios and metrics
- Comparison to industry benchmarks

## Risk Assessment
- Identified risks (operational, financial, market, regulatory)
- Risk severity and likelihood
- Potential impact on business operations

## Strategic Insights
- Market position and competitive advantages
- Growth opportunities
- Strategic recommendations

## Key Concerns
- Areas requiring immediate attention
- Potential red flags
- Recommended actions

## Conclusion
- Overall company health assessment
- Investment recommendation (if applicable)
- Next steps for stakeholders

Format the output as a professional business memo with clear headings, bullet points, and actionable insights. Focus on the most critical information that executives need to make informed decisions.`,
    example: `**MEMORANDUM**

TO: Executive Leadership Team
FROM: Corporate Analysis Department  
DATE: [Current Date]
RE: Q3 2024 Corporate Performance Analysis

## Executive Summary
TechCorp demonstrates strong revenue growth of 15% YoY, driven by cloud services expansion. However, increasing operational costs and supply chain vulnerabilities require immediate attention to maintain profitability trajectory.

## Financial Highlights
• Revenue: $2.4B (+15% YoY)
• Net Income: $340M (+8% YoY) 
• Operating Margin: 14.2% (down from 16.1%)
• Cash Position: $890M (strong liquidity)
• Debt-to-Equity: 0.32 (healthy leverage)

## Risk Assessment
**HIGH RISK:**
• Supply chain concentration (65% from single region)
• Cybersecurity vulnerabilities in legacy systems

**MEDIUM RISK:**
• Regulatory changes in key markets
• Talent retention in competitive tech landscape

## Strategic Insights
• Cloud services segment showing 40% growth potential
• AI integration opportunities in core products
• Geographic expansion into emerging markets viable

## Key Concerns
• Rising operational costs outpacing revenue growth
• Customer acquisition costs increased 23%
• Delayed product launches affecting market share

## Conclusion
**Overall Assessment:** POSITIVE with caution
**Recommendation:** HOLD with strategic focus on cost optimization
**Priority Actions:** Supply chain diversification, cybersecurity investment`,
  },
  "website-wizard": {
    title: "Website wizard",
    description: "Create one-page websites based on user specifications",
    icon: "📁",
    category: "Web Development",
    difficulty: "Beginner",
    prompt: `You are a web development expert specializing in creating beautiful, responsive one-page websites. Create a complete HTML file based on the user's requirements.

Your website should include:

## Structure
- Modern, clean design with proper HTML5 semantic elements
- Responsive layout that works on all devices
- Professional typography and color scheme
- Optimized for fast loading and accessibility

## Sections to Include
- Header with navigation
- Hero section with compelling headline
- About/Services section
- Features or portfolio showcase
- Contact information
- Footer

## Technical Requirements
- Use modern CSS (Flexbox/Grid)
- Include CSS animations and hover effects
- Implement smooth scrolling navigation
- Add meta tags for SEO
- Ensure WCAG accessibility compliance
- Use CDN resources for fonts and icons

## Styling Guidelines
- Choose an appropriate color palette
- Use consistent spacing and typography
- Implement a mobile-first approach
- Add subtle animations and transitions
- Include proper contrast ratios

Please ask the user for:
1. Website purpose/business type
2. Preferred color scheme
3. Content focus (services, portfolio, etc.)
4. Any specific features needed

Then create a complete, production-ready HTML file with embedded CSS and JavaScript.`,
    example: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Digital Agency - Creative Solutions</title>
    <meta name="description" content="Professional digital agency offering web design, development, and marketing services">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Inter', sans-serif;
            line-height: 1.6;
            color: #333;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        header {
            background: #fff;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 1000;
        }
        
        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 0;
        }
        
        .hero {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 120px 0 80px;
            text-align: center;
        }
        
        .hero h1 {
            font-size: 3.5rem;
            margin-bottom: 1rem;
            font-weight: 700;
        }
        
        .btn {
            display: inline-block;
            background: #ff6b6b;
            color: white;
            padding: 12px 30px;
            text-decoration: none;
            border-radius: 5px;
            transition: transform 0.3s ease;
        }
        
        .btn:hover {
            transform: translateY(-2px);
        }
        
        @media (max-width: 768px) {
            .hero h1 {
                font-size: 2.5rem;
            }
        }
    </style>
</head>
<body>
    <header>
        <nav class="container">
            <div class="logo">
                <h2>DigitalCraft</h2>
            </div>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <section class="hero" id="home">
        <div class="container">
            <h1>Creative Digital Solutions</h1>
            <p>We craft beautiful websites and digital experiences</p>
            <a href="#contact" class="btn">Get Started</a>
        </div>
    </section>
    
    <!-- Additional sections... -->
</body>
</html>`,
  },
  // Add more prompts here...
}

export default function PromptDetailPage({ params }: { params: { slug: string } }) {
  const prompt = prompts[params.slug as keyof typeof prompts]

  if (!prompt) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Prompt not found</h1>
          <Link href="/" className="text-primary hover:underline">
            Back to Prompt Library
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Prompt Library
          </Link>

          <div className="flex items-start gap-6 mb-6">
            <div className="bg-orange-50 w-16 h-16 rounded-lg flex items-center justify-center text-2xl">
              {prompt.icon}
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2">{prompt.title}</h1>
              <p className="text-lg text-muted-foreground mb-4">{prompt.description}</p>
              <div className="flex gap-2">
                <Badge variant="secondary">{prompt.category}</Badge>
                <Badge variant="outline">{prompt.difficulty}</Badge>
              </div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="prompt" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="prompt">Prompt</TabsTrigger>
            <TabsTrigger value="example">Example Output</TabsTrigger>
            <TabsTrigger value="tips">Usage Tips</TabsTrigger>
          </TabsList>

          <TabsContent value="prompt" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Prompt Template</CardTitle>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Copy className="mr-2 h-4 w-4" />
                      Copy
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </div>
                <CardDescription>Copy this prompt and customize it for your specific needs</CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm whitespace-pre-wrap">
                  {prompt.prompt}
                </pre>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="example" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Example Output</CardTitle>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Play className="mr-2 h-4 w-4" />
                      Try it
                    </Button>
                    <Button variant="outline" size="sm">
                      <Copy className="mr-2 h-4 w-4" />
                      Copy
                    </Button>
                  </div>
                </div>
                <CardDescription>See what kind of output this prompt generates</CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm whitespace-pre-wrap">
                  {prompt.example}
                </pre>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tips" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Usage Tips</CardTitle>
                <CardDescription>Best practices for getting optimal results with this prompt</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Customization</h4>
                  <p className="text-sm text-muted-foreground">
                    Modify the prompt to match your specific requirements. Add industry-specific terminology or adjust
                    the output format as needed.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Input Quality</h4>
                  <p className="text-sm text-muted-foreground">
                    Provide clear, detailed input to get the best results. The more context you give, the better the
                    output will be.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Iteration</h4>
                  <p className="text-sm text-muted-foreground">
                    Don't hesitate to refine the prompt based on initial results. Small adjustments can significantly
                    improve output quality.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Model Selection</h4>
                  <p className="text-sm text-muted-foreground">
                    For complex tasks like this, consider using Claude 3 Opus for the highest quality results, or Claude
                    3 Sonnet for a good balance of quality and speed.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Related Prompts</CardTitle>
              <CardDescription>Other prompts you might find useful</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Link href="/prompts/website-wizard" className="block p-3 rounded-lg hover:bg-muted transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="text-lg">📁</span>
                    <div>
                      <h4 className="font-medium">Website wizard</h4>
                      <p className="text-sm text-muted-foreground">Create one-page websites</p>
                    </div>
                  </div>
                </Link>
                <Link
                  href="/prompts/excel-formula-expert"
                  className="block p-3 rounded-lg hover:bg-muted transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-lg">📊</span>
                    <div>
                      <h4 className="font-medium">Excel formula expert</h4>
                      <p className="text-sm text-muted-foreground">Create Excel formulas</p>
                    </div>
                  </div>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Need Help?</CardTitle>
              <CardDescription>Get support and learn more</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link href="/developer-guide" className="block p-3 rounded-lg hover:bg-muted transition-colors">
                <h4 className="font-medium">Developer Guide</h4>
                <p className="text-sm text-muted-foreground">Learn how to integrate with the API</p>
              </Link>
              <Link href="/api-guide" className="block p-3 rounded-lg hover:bg-muted transition-colors">
                <h4 className="font-medium">API Reference</h4>
                <p className="text-sm text-muted-foreground">Complete API documentation</p>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
