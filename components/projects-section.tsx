import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Car, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "CopyBook LM",
    description: "A Retrieval-Augmented Generation (RAG) powered note-taking and knowledge assistant inspired by Google NotebookLM Built with Next.js, LangChain, OpenAI, and Clerk — this app allows users to upload documents, query their own data, and get context-aware AI answers.",
    techStack: ["Node.js", "MongoDB Vector DB", "Mongoose", "LangChain", "Next.js", "Clerk", "OpenAI", "MongoDB", "Tailwind CSS","Shadcn UI"],
    features: [
      "Document Upload",
      "RAG Integration",
      "AI Q&A System",
      "Vector Search",
      "Knowledge Base",
      "Context-aware Responses"
    ],
    icon: "/Copybooklm.png",
    github: "https://github.com/RoyDipanjanReek/NoteBook_LM",
    liveLink: "https://copybooklm.vercel.app/"
  },
  {
    title: "My_Memory",
    description: "A production-ready template manager built with Next.js App Router, MongoDB, Mongoose, and Tailwind CSS.",
    techStack: ["Next.js", "TypeScript", "MongoDB", "Mongoose", "Tailwind CSS"],
    features: [
      "Create & Manage Templates",
      "Sidebar History Panel",
      "Keyword Search",
      "Category & Tag Filtering",
      "One-click Copy",
      "Service Layer Architecture"
    ],
    icon: "/My_Memory.png",
    github: "https://github.com/RoyDipanjanReek/My_Memory",
    liveLink: "https://my-memory-brown.vercel.app  "
  }
]

export function ProjectsSection() {
  return (
    <section id="projects" className="border-t border-border bg-muted/30 py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Featured Projects
          </h2>
          <p className="mt-2 text-muted-foreground">
            Production-ready backend systems built with clean architecture
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card key={project.title} className="overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="flex shrink-0 items-center justify-center bg-secondary/50 md:w-96 h-64 md:h-auto">
                  <img src={project.icon} alt={project.title} className="h-auto w-full object-cover" />
                </div>
                
                <div className="flex-1">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                        <CardDescription className="mt-2 text-pretty leading-relaxed">
                          {project.description}
                        </CardDescription>
                      </div>
                      <div className="flex shrink-0 gap-3">
                        {project.liveLink && (
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground transition-colors hover:text-foreground"
                            aria-label={`View ${project.title} live`}
                          >
                            <ExternalLink className="h-5 w-5" />
                          </a>
                        )}
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground transition-colors hover:text-foreground"
                          aria-label={`View ${project.title} on GitHub`}
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <p className="mb-2 text-sm font-medium text-foreground">Tech Stack</p>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech) => (
                            <Badge key={tech} variant="outline" className="font-mono text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <p className="mb-2 text-sm font-medium text-foreground">Key Features</p>
                        <div className="flex flex-wrap gap-2">
                          {project.features.map((feature) => (
                            <Badge key={feature} variant="secondary" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
