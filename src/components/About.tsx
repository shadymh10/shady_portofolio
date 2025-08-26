import { Card, CardContent } from "@/components/ui/card";
import { Cloud, Server, Cog, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Cloud className="h-8 w-8 text-devops-blue" />,
      title: "Cloud Architecture",
      description: "Expert in AWS cloud services and infrastructure design"
    },
    {
      icon: <Server className="h-8 w-8 text-devops-blue" />,
      title: "Container Orchestration", 
      description: "Docker & Kubernetes for scalable application deployment"
    },
    {
      icon: <Cog className="h-8 w-8 text-devops-blue" />,
      title: "Automation",
      description: "CI/CD pipelines and infrastructure as code"
    },
    {
      icon: <Zap className="h-8 w-8 text-devops-blue" />,
      title: "Performance",
      description: "Optimizing systems for speed, reliability, and cost"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">About Me</h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              I'm a DevOps Engineer helping clients, startups and businesses deploy, automate, 
              and optimize applications using modern tools like Docker, Kubernetes, and AWS. 
              I deliver scalable, reliable solutions that speed up releases, reduce costs, 
              with a strong passion for Cloud and DevOps technologies. Currently training in 
              the DevOps track at DEPI (Digital Egypt Pioneers Initiative), focusing on 
              automation, cloud services, and system management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {highlights.map((item, index) => (
              <Card key={index} className="border-2 hover:border-devops-blue/30 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-devops-light rounded-lg">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-r from-devops-blue/5 to-devops-light/50 border-devops-blue/20">
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">Currently Training At</h3>
                <p className="text-xl text-devops-blue font-semibold mb-2">DEPI - Digital Egypt Pioneers Initiative</p>
                <p className="text-muted-foreground">
                  Focusing on advanced DevOps practices, automation, cloud services, and system management
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;