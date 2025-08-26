import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";
import heroPhoto from "@/assets/MyPhoto.jpg";
import "./ui/hero.css"

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background text-foreground relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="animate-float absolute top-20 left-20 w-20 h-20 bg-devops-accent rounded-full blur-xl"></div>
        <div className="animate-float absolute bottom-20 right-20 w-32 h-32 bg-devops-accent rounded-full blur-xl" style={{animationDelay: '1s'}}></div>
        <div className="animate-float absolute top-1/2 left-1/3 w-16 h-16 bg-devops-light rounded-full blur-xl" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Profile Image */}
          <div className="flex justify-center animate-slide-in-left">
            <div className="relative">
              {/* <div className="w-96 h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl transform hover:scale-105 transition-all duration-500">
                <img 
                  src={heroPhoto} 
                  alt="Shady Mohamed - DevOps Engineer" 
                  className="w-full h-full object-cover object-top"
                />
              </div> */}
              <div className="w-96 h-96    shadow-2xl transform hover:scale-105 transition-all duration-500 Test">
                <img 
                  src={heroPhoto} 
                  alt="Shady Mohamed - DevOps Engineer" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="text-center md:text-left space-y-8 animate-slide-in-right">
            <div className="space-y-6">
              <div className="animate-fade-in">
                <h1 className="text-6xl md:text-7xl font-bold leading-tight text-foreground">
                  Shady Mohamed 
                </h1>
              </div>
              <div className="animate-fade-in stagger-1">
                <h2 className="text-3xl md:text-4xl text-primary font-semibold">
                  DevOps Engineer
                </h2>
              </div>
              <div className="animate-fade-in stagger-2">
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  I'm a DevOps Engineer helping clients, startups and businesses deploy, automate, 
                  and optimize applications using modern tools like Docker, Kubernetes, and AWS. 
                  I deliver scalable, reliable solutions that speed up releases, reduce costs, 
                  with a strong passion for Cloud and DevOps technologies. Currently training in 
                  the DevOps track at DEPI (Digital Egypt Pioneers Initiative), focusing on 
                  automation, cloud services, and system management.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 pt-6 animate-fade-in stagger-3">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                asChild
              >
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/30 text-primary hover:bg-primary/10 transform hover:scale-105 transition-all duration-300"
                asChild
              >
                <a href="#projects">View Projects</a>
              </Button>
            </div>

            {/* Quick Links */}
            <div className="flex gap-6 pt-6 animate-fade-in stagger-4">
              <Button variant="ghost" size="icon" className="text-foreground hover:text-white hover:scale-110 transition-all duration-300" asChild>
                <a href="https://github.com/shadymh10" target="_blank" rel="noopener noreferrer">
                  <Github className="h-7 w-7" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-foreground hover:text-white hover:scale-110 transition-all duration-300" asChild>
                <a href="https://linkedin.com/in/shady-mohamed-1b0b73374" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-7 w-7" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-foreground hover:text-white hover:scale-110 transition-all duration-300" asChild>
            <a
  href="https://mail.google.com/mail/?view=cm&to=shadymhmd2004@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
>
  <Mail className="h-7 w-7" />
</a>

              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;