"use client"

import Link from "next/link"
import { ArrowLeft, Code, Play, Download, GitBranch } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ClaudeCodePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl font-bold mb-4">Claude Code</h1>
          <p className="text-xl text-muted-foreground">
            Code generation, debugging, and programming assistance with Claude
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <Code className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Code Generation</CardTitle>
              <CardDescription>Generate code in multiple languages</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Python</Badge>
                <Badge variant="secondary">JavaScript</Badge>
                <Badge variant="secondary">Java</Badge>
                <Badge variant="secondary">C++</Badge>
                <Badge variant="secondary">Go</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Play className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Code Execution</CardTitle>
              <CardDescription>Run and test code snippets</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Sandbox Environment</span>
                  <Badge variant="outline">Safe</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Real-time Output</span>
                  <Badge variant="outline">Live</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <GitBranch className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Code Review</CardTitle>
              <CardDescription>Analyze and improve existing code</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Bug Detection</span>
                  <Badge>Smart</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Performance Tips</span>
                  <Badge>Helpful</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="examples" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="examples">Examples</TabsTrigger>
            <TabsTrigger value="debugging">Debugging</TabsTrigger>
            <TabsTrigger value="optimization">Optimization</TabsTrigger>
            <TabsTrigger value="documentation">Documentation</TabsTrigger>
          </TabsList>

          <TabsContent value="examples" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Python Web Scraper</CardTitle>
                <CardDescription>A simple web scraper using requests and BeautifulSoup</CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{`import requests
from bs4 import BeautifulSoup

def scrape_website(url):
    """Scrape content from a website"""
    try:
        response = requests.get(url)
        response.raise_for_status()
        
        soup = BeautifulSoup(response.content, 'html.parser')
        
        # Extract title
        title = soup.find('title').text if soup.find('title') else 'No title'
        
        # Extract all paragraph text
        paragraphs = [p.text.strip() for p in soup.find_all('p')]
        
        return {
            'title': title,
            'paragraphs': paragraphs,
            'url': url
        }
    except Exception as e:
        return {'error': str(e)}

# Example usage
result = scrape_website('https://example.com')
print(result)`}</code>
                </pre>
                <div className="flex gap-2 mt-4">
                  <Button size="sm" variant="outline">
                    <Play className="mr-2 h-4 w-4" />
                    Run Code
                  </Button>
                  <Button size="sm" variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>React Component</CardTitle>
                <CardDescription>A reusable React component with TypeScript</CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{`import React, { useState } from 'react';

interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  initialTodos?: TodoItem[];
}

const TodoList: React.FC<TodoListProps> = ({ initialTodos = [] }) => {
  const [todos, setTodos] = useState<TodoItem[]>(initialTodos);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim()) {
      const newTodo: TodoItem = {
        id: Date.now(),
        text: inputValue.trim(),
        completed: false
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div className="todo-list">
      <div className="input-section">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          placeholder="Add a new todo..."
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span>{todo.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;`}</code>
                </pre>
                <div className="flex gap-2 mt-4">
                  <Button size="sm" variant="outline">
                    <Play className="mr-2 h-4 w-4" />
                    Preview
                  </Button>
                  <Button size="sm" variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="debugging" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Common Debugging Techniques</CardTitle>
                <CardDescription>How Claude can help identify and fix bugs</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">1. Syntax Error Detection</h4>
                  <p className="text-sm text-muted-foreground">
                    Claude can quickly identify syntax errors, missing brackets, semicolons, and other common mistakes.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">2. Logic Error Analysis</h4>
                  <p className="text-sm text-muted-foreground">
                    Analyze code flow and identify logical inconsistencies or incorrect algorithm implementations.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">3. Performance Issues</h4>
                  <p className="text-sm text-muted-foreground">
                    Spot inefficient loops, memory leaks, and suggest optimizations for better performance.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="optimization" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Code Optimization Strategies</CardTitle>
                <CardDescription>Improve code performance and maintainability</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Algorithm Optimization</h4>
                  <p className="text-sm text-muted-foreground">
                    Suggest more efficient algorithms and data structures for better time and space complexity.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Code Refactoring</h4>
                  <p className="text-sm text-muted-foreground">
                    Improve code readability, maintainability, and follow best practices and design patterns.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Memory Management</h4>
                  <p className="text-sm text-muted-foreground">
                    Identify memory leaks and suggest better memory management techniques.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="documentation" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Automated Documentation</CardTitle>
                <CardDescription>Generate comprehensive documentation for your code</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Function Documentation</h4>
                  <p className="text-sm text-muted-foreground">
                    Generate detailed docstrings and comments explaining function parameters, return values, and usage.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">API Documentation</h4>
                  <p className="text-sm text-muted-foreground">
                    Create comprehensive API documentation with examples and usage guidelines.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">README Generation</h4>
                  <p className="text-sm text-muted-foreground">
                    Generate project README files with installation instructions, usage examples, and contribution
                    guidelines.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
