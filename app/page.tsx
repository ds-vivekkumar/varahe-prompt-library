"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ModeToggle } from "@/components/mode-toggle"
import { AskAIChat } from "@/components/ask-ai-chat"

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="border-b border-border bg-background">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center">
              <Image
                src="https://varahe.com/assets/Logo-OG-2NAUQBk6.png"
                alt="Varahe"
                width={140}
                height={28}
                className="h-7 w-auto"
              />
            </Link>
            <div className="relative hidden md:block">
              <Select defaultValue="english">
                <SelectTrigger className="w-[120px] border-none text-sm">
                  <SelectValue placeholder="English" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="english">English (Default)</SelectItem>
                  <SelectItem value="hindi">हिंदी (Hindi)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex-1 max-w-md mx-4 hidden md:flex">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 rounded-md border border-input bg-background"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400">Ctrl K</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/research" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Research
            </Link>
            <Link href="/login" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Login
            </Link>
            <Link href="/signup">
              <Button className="bg-black text-white hover:bg-gray-800">Sign up</Button>
            </Link>
            <ModeToggle />
          </div>
        </div>

        <nav className="container mx-auto px-4">
          <ul className="flex space-x-6">
            <li>
              <Link href="/welcome" className="py-4 block text-sm text-gray-600 hover:text-gray-900">
                Welcome
              </Link>
            </li>
            <li>
              <Link href="/developer-guide" className="py-4 block text-sm text-gray-600 hover:text-gray-900">
                Developer Guide
              </Link>
            </li>
            <li>
              <Link href="/api-guide" className="py-4 block text-sm text-gray-600 hover:text-gray-900">
                API Guide
              </Link>
            </li>
            <li>
              <Link href="/claude-code" className="py-4 block text-sm text-gray-600 hover:text-gray-900">
                Claude Code
              </Link>
            </li>
            <li>
              <Link href="/resources" className="py-4 block text-sm text-gray-600 border-b-2 border-black font-medium">
                Resources
              </Link>
            </li>
            <li>
              <Link href="/release-notes" className="py-4 block text-sm text-gray-600 hover:text-gray-900">
                Release Notes
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-semibold text-center mb-2">Prompt Library</h1>
          <p className="text-center text-gray-600 mb-12">
            Explore optimized prompts for a breadth of business and personal tasks.
          </p>

          <div className="flex gap-4 mb-12">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-200"
              />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="All prompts" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All prompts</SelectItem>
                <SelectItem value="business">Business</SelectItem>
                <SelectItem value="personal">Personal</SelectItem>
                <SelectItem value="coding">Coding</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <PromptCard
              icon="🎮"
              title="Cosmic keystrokes"
              description="Generate an interactive speed typing game in a single HTML file, featuring side-scrolling gameplay and Tailwind CSS styling"
              bgColor="bg-orange-50"
              slug="cosmic-keystrokes"
            />

            <PromptCard
              icon="📋"
              title="Corporate clairvoyant"
              description="Extract insights, identify risks, and distill key information from long corporate reports into a single memo"
              bgColor="bg-orange-50"
              slug="corporate-clairvoyant"
            />

            <PromptCard
              icon="📁"
              title="Website wizard"
              description="Create one-page websites based on user specifications"
              bgColor="bg-orange-50"
              slug="website-wizard"
            />

            <PromptCard
              icon="📊"
              title="Excel formula expert"
              description="Create Excel formulas based on user-described calculations or data manipulations"
              bgColor="bg-orange-50"
              slug="excel-formula-expert"
            />

            <PromptCard
              icon="G"
              title="Google apps scripter"
              description="Generate Google Apps scripts to complete tasks based on user requirements"
              bgColor="bg-orange-50"
              slug="google-apps-scripter"
            />

            <PromptCard
              icon="🩺"
              title="Python bug buster"
              description="Detect and fix bugs in Python code"
              bgColor="bg-orange-50"
              slug="python-bug-buster"
            />

            <PromptCard
              icon="⏱️"
              title="Time travel consultant"
              description="Help the user navigate hypothetical time travel scenarios and their implications"
              bgColor="bg-orange-50"
              slug="time-travel-consultant"
            />

            <PromptCard
              icon="📚"
              title="Storytelling sidekick"
              description="Collaboratively create engaging stories with the user, offering plot twists and character development"
              bgColor="bg-orange-50"
              slug="storytelling-sidekick"
            />

            <PromptCard
              icon="📄"
              title="Cite your sources"
              description="Get answers to questions about a document's content with relevant citations supporting the response"
              bgColor="bg-orange-50"
              slug="cite-your-sources"
            />

            <PromptCard
              icon="🗄️"
              title="SQL sorcerer"
              description="Transform everyday language into SQL queries"
              bgColor="bg-orange-50"
              slug="sql-sorcerer"
            />
          </div>
        </div>
      </main>

      <div className="fixed bottom-6 right-6">
        <Button
          onClick={() => setIsChatOpen(true)}
          className="bg-black text-white rounded-full px-4 py-2 flex items-center gap-2 hover:bg-gray-800"
        >
          Ask AI
          <span className="bg-white text-black rounded-full w-6 h-6 flex items-center justify-center text-xs">AI</span>
        </Button>
      </div>

      <AskAIChat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  )
}

function PromptCard({
  icon,
  title,
  description,
  bgColor,
  slug,
}: {
  icon: string
  title: string
  description: string
  bgColor: string
  slug: string
}) {
  return (
    <Link href={`/prompts/${slug}`}>
      <div className="flex gap-4 p-4 rounded-lg hover:bg-muted transition-colors cursor-pointer">
        <div className={`${bgColor} w-12 h-12 rounded-lg flex items-center justify-center text-xl`}>{icon}</div>
        <div>
          <h3 className="font-medium mb-1">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </Link>
  )
}
