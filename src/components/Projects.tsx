import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import dockerProject from "@/assets/DOC.jpg";
import ansibleProject from "@/assets/ANS.jpg";
import pythonProject from "@/assets/PY.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Docker Compose Infrastructure",
      description: "Complete Docker containerization project learned at DEPI. Multi-container setup with automated deployment, load balancing, and service discovery. Practical implementation of containerization best practices.",
      technologies: ["Docker", "Docker Compose", "Linux"],
      github: "https://github.com/shadymh10/docker_compose",
      image: dockerProject,
      features: [
        "Multi-container orchestration",
        "Automated health checks", 
        "Volume management",
        "Network isolation"
      ]
    },
    {
      title: "Ansible Automation Role",
      description: "Custom Ansible automation project developed during DEPI training. Automated server configuration and application deployment with security hardening and monitoring setup.",
      technologies: ["Ansible", "Linux", "Red Hat", "Ubuntu"],
      github: "https://github.com/shadymh10/ansible-role-shady",
      image: ansibleProject,
      features: [
        "Server provisioning",
        "Security configurations",
        "Application deployment", 
        "Monitoring setup"
      ]
    },
    {
      title: "Python Application DevOps",
      description: "Complete DevOps implementation for Python application learned at DEPI. Includes containerization, automated deployment, and monitoring with best practices for production environments.",
      technologies: ["Python", "Docker", "Git", "SQL"],
      github: "https://github.com/shadymh10/python-app",
      image: pythonProject,
      features: [
        "Containerized application",
        "Automated deployment",
        "Database integration",
        "Performance monitoring"
      ]
    }
  ];

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold text-foreground mb-6">DevOps Projects</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real-world DevOps implementations developed during my training at DEPI, 
              showcasing automation, containerization, and infrastructure management solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className={`group animate-scale-in stagger-${(index % 4) + 1}`}
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] bg-card border border-border">
                  {/* Image Section */}
                  <div className="relative overflow-hidden h-48">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-all duration-500"></div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-6">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="p-0 space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2 text-sm">Key Features:</h4>
                        <ul className="space-y-1">
                          {project.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center gap-2 text-muted-foreground text-sm">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-2 text-sm">Technologies:</h4>
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge 
                              key={techIndex} 
                              className="bg-primary/10 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex gap-2 pt-2">
                        <Button 
                          asChild 
                          size="sm"
                          className="flex-1 bg-primary hover:bg-primary/90 transform hover:scale-105 transition-all duration-300"
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            <Github className="h-3 w-3" />
                            Code
                          </a>
                        </Button>
                        {/* <Button 
                          variant="outline"
                          size="sm"
                          className="border-primary/30 text-primary hover:bg-primary/10"
                        >
                          <ExternalLink className="h-3 w-3" />
                        </Button> */}
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16 animate-fade-in stagger-4">
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-primary/20 rounded-full">
              <span className="text-2xl">🚀</span>
              <span className="text-lg font-semibold text-foreground">
                All projects developed during DEPI DevOps Training
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;