import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/roydipanjan2003/",
    icon: Linkedin,
    username: "roydipanjan2003"
  },
  {
    name: "GitHub",
    href: "https://github.com/RoyDipanjanReek",
    icon: Github,
    username: "RoyDipanjanReek"
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/Dipanjan1572003",
    icon: Twitter,
    username: "@Dipanjan1572003"
  },
  {
    name: "Email",
    href: "mailto:dipanjanroy2003@gmail.com",
    icon: Mail,
    username: "dipanjanroy2003@gmail.com"
  }
]

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-border bg-muted/30 py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Let's Connect
          </h2>
          <p className="mt-2 text-muted-foreground">
            Open to opportunities - feel free to reach out
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.name !== "Email" ? "_blank" : undefined}
              rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
              className="group flex items-center gap-4 rounded-lg border border-border bg-card p-4 transition-colors hover:bg-secondary/50"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary transition-colors group-hover:bg-background">
                <link.icon className="h-5 w-5 text-foreground" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-medium text-foreground">{link.name}</p>
                <p className="truncate text-sm text-muted-foreground">{link.username}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <a href="mailto:dipanjanroy2003@gmail.com">
              <Mail className="mr-2 h-4 w-4" />
              Get in Touch
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
