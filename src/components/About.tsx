import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A motivated Computer Science graduate with a passion for creating impactful technology solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a detail-oriented Computer Science graduate with expertise in software development, 
              database management, and networking. My experience spans front-end and back-end development, 
              with a strong foundation in Python, Flask, JavaScript, and MySQL.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm passionate about designing and implementing IT solutions, troubleshooting complex problems, 
              and creating technology that makes a real difference. My goal is to contribute to fintech or 
              IT-driven companies where I can further develop my technical and problem-solving skills.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">2+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">1</div>
                <div className="text-sm text-muted-foreground">Award Won</div>
              </div>
            </div>
          </div>

          {/* Right Content - Education & Personal Info */}
          <div className="space-y-6">
            <Card className="bg-card border-border shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-card-foreground mb-2">Education</h3>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium text-card-foreground">Bachelor of Science in Computer Science</h4>
                        <p className="text-muted-foreground">Kisii University</p>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          Expected Graduation: December 2025
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium text-card-foreground">KCSE Certificate</h4>
                        <p className="text-muted-foreground">Galaxy High School</p>
                        <p className="text-sm text-muted-foreground">Year Complited - 2020</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-card-foreground mb-2">Location</h3>
                    <p className="text-muted-foreground">Nairobi, Kenya</p>
                    <div className="mt-3">
                      <h4 className="font-medium text-card-foreground mb-2">Languages</h4>
                      <div className="flex gap-2">
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">English (Fluent)</span>
                        <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">Swahili (Fluent)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;