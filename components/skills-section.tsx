import { Badge } from "@/components/ui/badge"
import { Server, Database, Shield, Cloud, Code, Terminal } from "lucide-react"

const skillCategories = [
  {
    title: "Backend Development",
    icon: Server,
    skills: ["Node.js", "Express.js", "REST APIs", "WebSockets", "Socket.io"]
  },
  {
    title: "Database & ORM",
    icon: Database,
    skills: ["MongoDB", "Mongoose", "PostgreSQL", "Redis", "Database Design"]
  },
  {
    title: "Authentication & Security",
    icon: Shield,
    skills: ["JWT", "OAuth", "bcrypt", "CORS", "Rate Limiting"]
  },
  {
    title: "Languages",
    icon: Code,
    skills: ["JavaScript", "TypeScript","SQL", "JAVA"]
  },
  {
    title: "Tools & DevOps",
    icon: Terminal,
    skills: ["Git", "GitHub", "Postman", "Docker", "Swagger"]
  }
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Skills & Technologies
          </h2>
          <p className="mt-2 text-muted-foreground">
            Technologies I work with to build robust backend systems
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-lg border border-border bg-card p-6"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                  <category.icon className="h-5 w-5 text-foreground" />
                </div>
                <h3 className="font-semibold text-foreground">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="outline" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
