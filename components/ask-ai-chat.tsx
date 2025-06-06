"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Search, Send, X, Paperclip, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
// test deploy
interface Message {
  id: string
  content: string
  sender: "user" | "ai"
  timestamp: Date
}

interface AskAIChatProps {
  isOpen: boolean
  onClose: () => void
}

export function AskAIChat({ isOpen, onClose }: AskAIChatProps) {
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState<Message[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && textareaRef.current) {
      setTimeout(() => {
        textareaRef.current?.focus()
      }, 100)
    }
  }, [isOpen])

  const simulateAIResponse = (userMessage: string) => {
    setIsTyping(true)
    setTimeout(() => {
      const aiResponse: Message = {
        id: Date.now().toString() + "_ai",
        content: `I understand you're asking about "${userMessage}". This is a simulated response. In a real implementation, this would connect to Claude's API to provide helpful answers about prompting, API usage, and best practices.`,
        sender: "ai",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, aiResponse])
      setIsTyping(false)
    }, 1500)
  }

  const handleSend = () => {
    if (message.trim()) {
      const userMessage: Message = {
        id: Date.now().toString(),
        content: message.trim(),
        sender: "user",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, userMessage])
      simulateAIResponse(message.trim())
      setMessage("")

      if (textareaRef.current) {
        textareaRef.current.style.height = "auto"
      }
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const adjustTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 100)}px`
    }
  }

  useEffect(() => {
    adjustTextareaHeight()
  }, [message])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-4xl h-[85vh] flex flex-col overflow-hidden shadow-2xl border-0">
        {/* Header */}
        <CardHeader className="flex flex-row items-center justify-between space-y-0 py-3 px-5 border-b bg-gradient-to-r from-gray-50 to-white flex-shrink-0">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-br from-black to-gray-800 text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold text-sm shadow-lg">
              AI
            </div>
            <h2 className="text-lg font-semibold text-gray-900">Ask AI Assistant</h2>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="text-xs border-gray-200 hover:bg-gray-50 h-8">
              <Search className="mr-1 h-3 w-3" />
              Search
            </Button>
            <Button variant="outline" size="sm" className="text-xs border-gray-200 hover:bg-gray-50 h-8">
              <Sparkles className="mr-1 h-3 w-3" />
              Ask Claude
            </Button>
            <Button variant="ghost" size="sm" onClick={onClose} className="hover:bg-gray-100 h-8 w-8 p-0">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col p-0 bg-gray-50/30 min-h-0">
          {/* Messages Area - Scrollable */}
          <div className="flex-1 overflow-y-auto min-h-0">
            <div className="p-4 space-y-4">
              {messages.length === 0 ? (
                /* Welcome Message Only */
                <div className="flex items-start gap-3 max-w-2xl mx-auto">
                  <div className="bg-gradient-to-br from-black to-gray-800 text-white rounded-lg w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 shadow-lg">
                    AI
                  </div>
                  <div className="flex-1 space-y-2">
                    <p className="text-lg font-medium text-gray-900">Hi there! 👋</p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      I'm your AI assistant, trained on comprehensive documentation and expert knowledge.
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Ask me anything about{" "}
                      <span className="bg-gradient-to-r from-black to-gray-800 text-white px-2 py-1 rounded-full text-xs font-medium shadow-sm">
                        Claude
                      </span>{" "}
                      and I'll help you get the answers you need.
                    </p>
                  </div>
                </div>
              ) : (
                <>
                  {/* Chat Messages */}
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex gap-3 max-w-3xl mx-auto ${msg.sender === "user" ? "justify-end" : ""}`}
                    >
                      {msg.sender === "ai" && (
                        <div className="bg-gradient-to-br from-black to-gray-800 text-white rounded-lg w-7 h-7 flex items-center justify-center font-bold text-xs flex-shrink-0 shadow-lg">
                          AI
                        </div>
                      )}
                      <div
                        className={`max-w-[75%] p-3 rounded-xl shadow-sm ${
                          msg.sender === "user"
                            ? "bg-gradient-to-r from-black to-gray-800 text-white ml-auto"
                            : "bg-white text-gray-900 border border-gray-100"
                        }`}
                      >
                        <p className="whitespace-pre-wrap text-sm leading-relaxed">{msg.content}</p>
                      </div>
                      {msg.sender === "user" && (
                        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg w-7 h-7 flex items-center justify-center font-bold text-xs flex-shrink-0 shadow-lg">
                          U
                        </div>
                      )}
                    </div>
                  ))}

                  {/* Typing Indicator */}
                  {isTyping && (
                    <div className="flex gap-3 max-w-3xl mx-auto">
                      <div className="bg-gradient-to-br from-black to-gray-800 text-white rounded-lg w-7 h-7 flex items-center justify-center font-bold text-xs flex-shrink-0 shadow-lg">
                        AI
                      </div>
                      <div className="bg-white text-gray-900 p-3 rounded-xl border border-gray-100 shadow-sm">
                        <div className="flex space-x-1">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                          <div
                            className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.1s" }}
                          ></div>
                          <div
                            className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input Section - Always Visible */}
          <div className="border-t bg-white/80 backdrop-blur-sm p-4 flex-shrink-0">
            <div className="max-w-3xl mx-auto">
              <div className="relative bg-white rounded-xl border border-gray-200 shadow-lg focus-within:border-gray-300 focus-within:shadow-xl transition-all duration-200">
                <Textarea
                  ref={textareaRef}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="How do I get started?"
                  className="min-h-[48px] max-h-[100px] resize-none border-0 bg-transparent p-3 pr-16 focus:ring-0 focus:outline-none placeholder:text-gray-500 text-sm leading-relaxed"
                  rows={1}
                />
                <div className="absolute right-2 bottom-2 flex items-center gap-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-7 w-7 p-0 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg"
                  >
                    <Paperclip className="h-3 w-3" />
                  </Button>
                  <Button
                    onClick={handleSend}
                    size="sm"
                    className={`h-7 w-7 p-0 rounded-lg transition-all duration-200 ${
                      message.trim()
                        ? "bg-gradient-to-r from-black to-gray-800 text-white hover:from-gray-800 hover:to-black shadow-lg hover:shadow-xl"
                        : "bg-gray-100 text-gray-400 cursor-not-allowed"
                    }`}
                    disabled={!message.trim()}
                  >
                    <Send className="h-3 w-3" />
                  </Button>
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between mt-3 text-xs">
                <div className="flex items-center gap-2 text-gray-500">
                  <span>Powered by</span>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded"></div>
                    <span className="font-medium">Varahe Analytics</span>
                  </div>
                  <span>&</span>
                  <span className="font-semibold text-gray-700">GEMINI AI</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 h-6 text-xs"
                >
                  Get help
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
