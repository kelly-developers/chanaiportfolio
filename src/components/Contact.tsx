import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Send, Download } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kellynyachiro@gmail.com",
      href: "mailto:kellynyachiro@gmail.com",
      color: "from-primary to-primary-glow"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+254 794572255",
      href: "tel:+254794572255",
      color: "from-accent to-accent-glow"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Nairobi, Kenya",
      href: "#",
      color: "from-secondary to-muted"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "#",
      description: "View my code repositories"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "#",
      description: "Connect professionally"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to contribute to innovative projects and grow with your team. Let's discuss how I can add value to your organization.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  I'm actively seeking internship or entry-level positions in fintech or IT-driven companies. 
                  Whether you have an opportunity or just want to connect, I'd love to hear from you.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <Card 
                      key={contact.label}
                      className="bg-card border-border shadow-md hover:shadow-lg transition-all duration-300 group cursor-pointer"
                      onClick={() => contact.href !== "#" && window.open(contact.href, '_self')}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${contact.color} p-3 group-hover:scale-110 transition-transform duration-300`}>
                            <IconComponent className="w-full h-full text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-card-foreground">{contact.label}</h4>
                            <p className="text-muted-foreground">{contact.value}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Connect on Social</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <Card 
                        key={social.label}
                        className="bg-card border-border shadow-md hover:shadow-lg transition-all duration-300 group cursor-pointer"
                      >
                        <CardContent className="p-4">
                          <div className="text-center">
                            <div className="w-12 h-12 mx-auto mb-2 bg-primary/10 rounded-lg p-3 group-hover:bg-primary/20 transition-colors duration-300">
                              <IconComponent className="w-full h-full text-primary" />
                            </div>
                            <h5 className="font-medium text-card-foreground text-sm">{social.label}</h5>
                            <p className="text-xs text-muted-foreground">{social.description}</p>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right: Quick Actions & Availability */}
            <div className="space-y-8">
              <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Work</h3>
                  <p className="text-muted-foreground mb-6">
                    Available for immediate start and excited to contribute to your team's success.
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-center gap-4">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        Full-time
                      </span>
                      <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                        Remote
                      </span>
                      <span className="px-3 py-1 bg-secondary/10 text-secondary-foreground rounded-full text-sm font-medium">
                        On-site
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button 
                      variant="gradient" 
                      className="w-full gap-2"
                      onClick={() => window.open('mailto:kellynyachiro@gmail.com?subject=Job Opportunity', '_self')}
                    >
                      <Send className="w-4 h-4" />
                      Send Email
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full gap-2"
                    >
                      <Download className="w-4 h-4" />
                      Download CV
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Specializations */}
              <Card className="bg-card border-border shadow-md">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-card-foreground mb-4">Looking For</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Fintech Software Development</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-muted-foreground">Full-Stack Development Roles</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span className="text-muted-foreground">Database Administration</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">IT System Management</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;