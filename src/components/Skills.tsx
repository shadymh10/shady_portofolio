import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Containerization",
      skills: ["Docker"],
      icon: "🐳"
    },
    {
      title: "Operating Systems", 
      skills: ["Linux", "Red Hat", "Ubuntu"],
      icon: "🐧"
    },
    {
      title: "Automation",
      skills: ["Ansible"],
      icon: "⚙️"
    },
    {
      title: "Version Control",
      skills: ["Git", "GitHub"],
      icon: "📝"
    },
    {
      title: "Programming",
      skills: ["Python", "PHP", "HTML", "CSS"],
      icon: "💻"
    },
    {
      title: "Database",
      skills: ["SQL"],
      icon: "🗄️"
    }
  ];

  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold text-devops-dark mb-6">Technical Skills</h2>
            <p className="text-xl  max-w-3xl mx-auto text-white">
              Technologies and tools I've learned during my DevOps training at DEPI, 
              focusing on practical implementation and real-world applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={index} 
                className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-scale-in border-l-4 border-devops-blue stagger-${(index % 4) + 1}`}
              >
                <div className="text-center">
                  <div className="text-4xl mb-4 animate-float" style={{animationDelay: `${index * 0.5}s`}}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-devops-dark mb-4 group-hover:text-devops-blue transition-colors">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-3 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex} 
                        className="px-4 py-2 bg-devops-blue/10 text-devops-dark rounded-full font-medium hover:bg-devops-blue hover:text-white transition-all duration-300 transform hover:scale-110"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16 animate-fade-in stagger-4">
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-devops-accent/20 rounded-full">
              <span className="text-2xl">🎓</span>
              <span className="text-lg font-semibold text-white">
                All skills learned through DEPI Training Program
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;