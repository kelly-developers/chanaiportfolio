import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Globe, Server, Brain, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "PHP", level: 80 },
      ]
    },
    {
      title: "Web Development",
      icon: Globe,
      skills: [
        { name: "Flask", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "HTML/CSS", level: 90 },
      ]
    },
    {
      title: "Database Management",
      icon: Database,
      skills: [
        { name: "MySQL", level: 85 },
        { name: "Database Design", level: 80 },
        { name: "Performance Optimization", level: 75 },
      ]
    },
    {
      title: "System Administration",
      icon: Server,
      skills: [
        { name: "Network Troubleshooting", level: 80 },
        { name: "Security Configurations", level: 75 },
        { name: "Hardware Maintenance", level: 85 },
      ]
    },
    {
      title: "Soft Skills",
      icon: Brain,
      skills: [
        { name: "Problem Solving", level: 95 },
        { name: "Analytical Thinking", level: 90 },
        { name: "Continuous Learning", level: 95 },
      ]
    },
    {
      title: "Communication",
      icon: Users,
      skills: [
        { name: "Team Collaboration", level: 90 },
        { name: "Technical Documentation", level: 85 },
        { name: "Adaptability", level: 90 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive set of technical and soft skills developed through education and hands-on experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.title} 
                className="bg-card border-border shadow-md hover:shadow-lg transition-all duration-300 group"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-card-foreground">{category.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-card-foreground">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{width: `${skill.level}%`}}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Relevant Courses */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">Relevant Coursework</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Software Engineering",
              "Database Management",
              "Network Administration",
              "Machine Learning",
              "Web Development"
            ].map((course) => (
              <span 
                key={course}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors duration-300"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;