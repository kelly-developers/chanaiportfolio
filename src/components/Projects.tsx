import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Award, Eye, Users, Calculator } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Vision for the Blind",
      description: "An innovative assistive technology project designed to aid visually impaired individuals with AI-powered object detection and voice feedback for enhanced navigation.",
      tech: ["AI/ML", "Object Detection", "Voice Synthesis", "Python"],
      features: [
        "Real-time object detection and recognition",
        "Voice feedback system for navigation assistance",
        "AI-powered scene description",
        "Accessibility-focused user interface"
      ],
      achievement: "🏆 Gold Medal Winner - Kuwait IIFME",
      icon: Eye,
      color: "from-accent to-accent-glow"
    },
    {
      title: "Payroll Management System",
      description: "A comprehensive payroll system with integrated payslip generation, employee attendance tracking, and automated salary calculations for efficient HR management.",
      tech: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
      features: [
        "Automated payslip generation",
        "Employee attendance tracking",
        "Salary calculations with deductions",
        "Employee management dashboard",
        "Reporting and analytics"
      ],
      achievement: "Used in production environment",
      icon: Calculator,
      color: "from-primary to-primary-glow"
    },
    {
      title: "Task Management System",
      description: "Developed during internship at Nairobi City County to streamline operations and improve productivity through efficient task assignment and tracking.",
      tech: ["Python", "Flask", "MySQL", "JavaScript"],
      features: [
        "Task assignment and tracking",
        "Progress monitoring dashboard",
        "Team collaboration tools",
        "Automated notifications",
        "Performance analytics"
      ],
      achievement: "Deployed for county operations",
      icon: Users,
      color: "from-secondary to-muted"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of innovative solutions that demonstrate my technical skills and problem-solving abilities
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={project.title}
                className="bg-card border-border shadow-lg hover:shadow-xl transition-all duration-300 group"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left: Icon and Title */}
                    <div className="lg:col-span-1">
                      <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${project.color} p-4 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-full h-full text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-card-foreground mb-2">{project.title}</h3>
                      <div className="flex items-center gap-2 mb-4">
                        <Award className="w-4 h-4 text-accent" />
                        <span className="text-sm text-accent font-medium">{project.achievement}</span>
                      </div>
                      
                      {/* Tech Stack */}
                      <div className="space-y-2">
                        <h4 className="font-semibold text-card-foreground text-sm">Tech Stack:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span 
                              key={tech}
                              className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Middle: Description and Features */}
                    <div className="lg:col-span-2">
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="font-semibold text-card-foreground mb-3">Key Features:</h4>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {project.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <Button variant="outline" size="sm" className="gap-2">
                          <Github className="w-4 h-4" />
                          View Code
                        </Button>
                        <Button variant="default" size="sm" className="gap-2">
                          <ExternalLink className="w-4 h-4" />
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Interested in seeing more of my work or discussing potential opportunities?
          </p>
          <Button 
            variant="gradient" 
            size="lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;