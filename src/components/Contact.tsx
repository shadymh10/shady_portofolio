import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, MapPin ,Send } from "lucide-react";

const Contact = () => {
  const contactMethods = [

    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "shadymhmd2004@gmail.com",
      href:"https://mail.google.com/mail/?view=cm&to=shadymhmd2004@gmail.com",

      description: "Send Me To CheckBox"
    },
    {
      icon: <Github className="h-6 w-6" />,
      title: "GitHub",
      value: "@shadymh10",
      href: "https://github.com/shadymh10",
      description: "Check out my repositories"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      title: "LinkedIn",
      value: "Shady Mohamed",
      href: "https://linkedin.com/in/shady-mohamed-1b0b73374",
      description: "Connect professionally"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "Mit-Ghamr, Egypt",
      href: "#",
      description: "Available for remote work worldwide"
    } ,   
    {
   icon: <Send className="h-6 w-6" />,
title: "WhatsApp",
value: "Shady Mohamed",
href: "https://wa.me/+201094925388",
description: "Chat instantly, share ideas and files easily"

    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-devops-blue to-devops-dark text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Ready to optimize your infrastructure and streamline your deployment processes? 
              Let's discuss how I can help your business achieve scalable, reliable solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <Card key={index} className="bg-white/10 border-white/20 hover:bg-white/15 transition-colors">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-3 p-3 bg-devops-accent rounded-full w-fit">
                    <div className="text-devops-dark">
                      {method.icon}
                    </div>
                  </div>
                  <CardTitle className="text-white text-lg">{method.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-300 text-sm mb-2">{method.description}</p>
                  <Button 
                    variant="ghost" 
                    className="text-devops-accent hover:text-white hover:bg-white/10 p-0 h-auto font-semibold"
                    asChild
                  >
                    <a className="text-white" href={method.href} target={method.href.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer">
                      {method.value}
                    </a>
                  </Button>
                </CardContent>

                
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Card className="bg-white/5 border-white/20 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
                <p className="text-gray-200 mb-6">
                  I'm available for DevOps consulting, infrastructure optimization, 
                  and full-time opportunities. Let's build something amazing together!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-devops-accent text-devops-dark hover:bg-devops-accent/90 font-semibold"
                    asChild
                  >
                    <a  target="_blank"  href="https://mail.google.com/mail/?view=cm&to=shadymhmd2004@gmail.com">
                      <Mail className="h-4 w-4 mr-2" />
                      Send Email
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-white/30 text-white hover:bg-white/10"
                    asChild
                  >
                    <a href="https://linkedin.com/in/shady-mohamed-1b0b73374" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4 mr-2" />
                      Connect on LinkedIn
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;