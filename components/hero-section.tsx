import Image from "next/image"
import { MapPin, Briefcase, Download } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-center gap-10 md:flex-row md:gap-16">
          <div className="shrink-0">
            <div className="relative h-64 w-64 overflow-hidden rounded-2xl border-2 border-border md:h-72 md:w-72">
              <Image
                src="/dipanjan-photo.jpg"
                alt="Dipanjan Roy"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Hi, I'm <span className="text-primary">Dipanjan Roy</span>
            </h1>
            
            <p className="mt-2 font-mono text-lg text-muted-foreground">
              Backend-Focused Developer
            </p>
            
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              I specialize in building <strong className="text-foreground">clean, well-structured APIs</strong> and 
              have expertise in <strong className="text-foreground">database design</strong>. I focus on writing 
              maintainable code that follows real-world backend standards and security best practices.
            </p>
            
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 md:justify-start">
              <Badge variant="secondary" className="flex items-center gap-1.5 px-3 py-1.5">
                <MapPin className="h-3.5 w-3.5" />
                Open to Relocate
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1.5 px-3 py-1.5">
                <Briefcase className="h-3.5 w-3.5" />
                Remote Friendly
              </Badge>
            </div>
            
            <div className="mt-8">
              <Button asChild size="lg">
                <a href="/Backend Developer.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
