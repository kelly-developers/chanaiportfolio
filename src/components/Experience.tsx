import { Card, CardContent } from "@/components/ui/card";
import { Building, Calendar, MapPin, CheckCircle } from "lucide-react";

const Experience = () => {
  const workExperience = {
    title: "IT Attachment",
    company: "Nairobi City County",
    location: "Nairobi, Kenya",
    duration: "May 2024 – Aug 2024",
    description: "Gained hands-on experience in IT operations, software development, and system administration within a government environment.",
    achievements: [
      "Developed and maintained a task management system to streamline operations",
      "Assisted in hardware maintenance and troubleshooting network issues",
      "Conducted database administration tasks including MySQL management and performance optimization",
      "Provided support for payroll system development, integrating features for employee management and salary processing"
    ]
  };

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Work Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional experience that shaped my technical skills and understanding of real-world IT operations
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-card border-border shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8">
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div className="mb-4 lg:mb-0">
                  <h3 className="text-2xl font-bold text-card-foreground mb-2">{workExperience.title}</h3>
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Building className="w-5 h-5" />
                    <span className="text-lg font-semibold">{workExperience.company}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{workExperience.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{workExperience.duration}</span>
                    </div>
                  </div>
                </div>
                
                {/* Experience Badge */}
                <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  4 Months
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {workExperience.description}
              </p>

              {/* Achievements */}
              <div>
                <h4 className="text-lg font-semibold text-card-foreground mb-4">Key Achievements:</h4>
                <div className="grid gap-3">
                  {workExperience.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3 group">
                      <div className="p-1 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300 mt-1">
                        <CheckCircle className="w-4 h-4 text-primary" />
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Gained */}
              <div className="mt-8 pt-6 border-t border-border">
                <h4 className="text-lg font-semibold text-card-foreground mb-4">Skills Developed:</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Task Management Systems",
                    "Hardware Maintenance",
                    "Network Troubleshooting",
                    "Database Administration",
                    "MySQL Management",
                    "Payroll Systems",
                    "Employee Management",
                    "Performance Optimization"
                  ].map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium hover:bg-accent/20 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Looking for internship or entry-level opportunities in fintech or IT-driven companies
            </p>
            <div className="flex justify-center gap-4">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Available for Full-time
              </span>
              <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                Open to Remote Work
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;