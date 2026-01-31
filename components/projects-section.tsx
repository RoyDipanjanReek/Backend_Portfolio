import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, GraduationCap, Car } from "lucide-react"

const projects = [
  {
    title: "Learning Management System",
    description: "A production-ready, secure, and scalable backend for a Learning Management System (LMS). This project is built with clean architecture, strong security practices, and real-world backend standards in mind.",
    techStack: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Cloudinary", "Multer", "Morgan", "Stripe"],
    features: [
      "Clean Architecture",
      "JWT Authentication",
      "Media Storage",
      "File Uploads",
      "Security Best Practices",
      "Payment Integration",
      "Rate limiting"
    ],
    icon: GraduationCap,
    github: "https://github.com/RoyDipanjanReek/Learning_Management_System"
  },
  {
    title: "Ride-Hailing System",
    description: "A comprehensive backend system for ride-hailing services. Built with scalability and performance in mind, featuring real-time capabilities and robust API design for managing drivers, riders, and trips.",
    techStack: ["Node.js", "Express.js", "MongoDB", "Socket.io", "Redis", "JWT"],
    features: [
      "Real-time Updates",
      "Geolocation Services",
      "Driver Management",
      "Trip Tracking",
      "Location-based calculation"
    ],
    icon: Car,
    github: "https://github.com/RoyDipanjanReek/Ride-Hailing-System"
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
                <div className="flex shrink-0 items-center justify-center bg-secondary/50 p-8 md:w-48">
                  <project.icon className="h-16 w-16 text-muted-foreground" />
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
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 text-muted-foreground transition-colors hover:text-foreground"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <Github className="h-5 w-5" />
                      </a>
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
