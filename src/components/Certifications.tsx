import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, Clock } from "lucide-react";
import certificateImage from "@/assets/COC.jpg";

const Certifications = () => {
  const certifications = [
    {
      title: "Red Hat System Administration I",
      issuer: "ITI Platform - Mahara-Tech",
      date: "August 20, 2025",
      duration: "9 Hours, 11 Minutes",
      verificationCode: "7C0vAsFD0g",
      status: "Completed",
      description: "Comprehensive training in Red Hat Linux system administration, covering essential system management tasks and best practices.",
      skills: ["Linux Administration", "Red Hat", "System Management", "Command Line"]
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-devops-light/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Certifications & Training</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Continuous learning and professional development in DevOps and system administration.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Certificate Display */}
            <div className="order-2 lg:order-1">
              <Card className="overflow-hidden shadow-lg">
                <CardHeader className="bg-gradient-to-r from-devops-blue/10 to-devops-accent/10">
                  <div className="flex items-center gap-3">
                    <Award className="h-8 w-8 text-devops-blue" />
                    <CardTitle className="text-2xl text-foreground">Official Certificate</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="relative">
                    <img 
                      src={certificateImage} 
                      alt="Red Hat System Administration Certificate" 
                      className="w-full h-auto"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-green-500 text-white">
                        Verified
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Certificate Details */}
            <div className="order-1 lg:order-2 space-y-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-xl text-foreground mb-2">{cert.title}</CardTitle>
                        <p className="text-devops-blue font-semibold">{cert.issuer}</p>
                      </div>
                      <Badge className="bg-devops-accent text-devops-dark">
                        {cert.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {cert.description}
                    </p>

                    {/* Certification Details */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="h-4 w-4 text-devops-blue" />
                        <span className="text-muted-foreground">Completed:</span>
                        <span className="font-medium text-foreground">{cert.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-devops-blue" />
                        <span className="text-muted-foreground">Duration:</span>
                        <span className="font-medium text-foreground">{cert.duration}</span>
                      </div>
                    </div>

                    {/* Verification Code */}
                    {/* <div className="bg-devops-light/50 p-3 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Verification Code:</p>
                      <code className="text-devops-blue font-mono font-semibold">{cert.verificationCode}</code>
                    </div> */}

                    {/* Skills */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Skills Covered:</h4>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="bg-devops-blue/10  ">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;