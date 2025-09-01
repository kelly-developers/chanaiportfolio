// src/components/sections/Hero.tsx

import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";
import profileImage from "@/assets/kelly-profile.jpg";
import { PhoneAvatar, PhoneAvatarImage } from "@/components/ui/phone-avatar";
import { useEffect, useState } from "react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  
  const fullText = [
    "Hi, I'm Kelly Nyachiro",
    "Computer Science Graduate & Software Developer",
    "Passionate about creating innovative solutions with expertise in Python, JavaScript, and web development. Ready to contribute to fintech and IT-driven companies."
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const currentText = fullText[loopNum % fullText.length];
    
    const timer = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(currentText.substring(0, currentIndex - 1));
        setCurrentIndex(prev => prev - 1);
      } else {
        setDisplayText(currentText.substring(0, currentIndex + 1));
        setCurrentIndex(prev => prev + 1);
      }

      // Typing speed
      let typeSpeed = 100;
      
      if (isDeleting) {
        typeSpeed /= 2;
      }
      
      // If text is complete
      if (!isDeleting && currentIndex === currentText.length) {
        typeSpeed = 2000; // Pause at end
        setIsDeleting(true);
      } else if (isDeleting && currentIndex === 0) {
        setIsDeleting(false);
        setLoopNum(prev => prev + 1);
        typeSpeed = 500;
      }

      setTimeout(() => {}, typeSpeed);
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, loopNum, fullText]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background dark:bg-gradient-to-br dark:from-background dark:via-background/50 dark:to-background">
      {/* Animated mesh background */}
      <div className="absolute inset-0 mesh-background opacity-30" />

      {/* Floating orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-neon-cyan/20 rounded-full filter blur-3xl animate-float" />
        <div
          className="absolute top-40 right-20 w-72 h-72 bg-neon-purple/20 rounded-full filter blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute -bottom-8 left-40 w-72 h-72 bg-neon-blue/20 rounded-full filter blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.1) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(0,0,0,.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left scroll-reveal">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-neon-cyan/10 border border-neon-cyan/20 rounded-full text-neon-cyan text-sm font-medium mb-4">
                🎯 Available for Opportunities
              </span>
            </div>
            
            {/* Typing animation for the main heading */}
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight min-h-[4.5rem] lg:min-h-[6.5rem]">
              {loopNum % 3 === 0 ? (
                <>
                  {displayText}
                  <span className="neon-text blinking-cursor">|</span>
                </>
              ) : (
                <>
                  Hi, I'm <span className="neon-text">Kelly Nyachiro</span>
                </>
              )}
            </h1>
            
            {/* Typing animation for the subtitle */}
            <p className="text-xl lg:text-2xl text-muted-foreground mb-4 font-medium min-h-[2rem] lg:min-h-[2.5rem]">
              {loopNum % 3 === 1 ? (
                <>
                  {displayText}
                  <span className="blinking-cursor">|</span>
                </>
              ) : (
                <>
                  Computer Science Graduate &{" "}
                  <span className="text-neon-cyan">Software Developer</span>
                </>
              )}
            </p>
            
            {/* Typing animation for the description */}
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed min-h-[6rem]">
              {loopNum % 3 === 2 ? (
                <>
                  {displayText}
                  <span className="blinking-cursor">|</span>
                </>
              ) : (
                "Passionate about creating innovative solutions with expertise in Python, JavaScript, and web development. Ready to contribute to fintech and IT-driven companies."
              )}
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8">
              <div className="flex items-center gap-2 glass-morphism px-4 py-2 rounded-full">
                <Mail className="w-4 h-4 text-neon-cyan" />
                <span className="text-sm text-foreground">
                  kellynyachiro@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-2 glass-morphism px-4 py-2 rounded-full">
                <Phone className="w-4 h-4 text-neon-cyan" />
                <span className="text-sm text-foreground">+254 794572255</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="gradient"
                size="xl"
                onClick={() => scrollToSection("projects")}
                className="group"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button
                variant="neon"
                size="xl"
                onClick={() => scrollToSection("contact")}
              >
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Right Content — Phone Image */}
          <div className="flex-1 flex justify-center lg:justify-end scroll-reveal" style={{animationDelay: "0.3s" }}>

            <div className="relative group">
              {/* Glow background */}
              <div className="absolute -inset-4 bg-gradient-to-br from-neon-cyan/30 via-neon-purple/20 to-neon-blue/10 rounded-[2.5rem] opacity-30 group-hover:opacity-50 transition-all duration-700 animate-pulse-glow" />
              <div className="absolute inset-0 rounded-[2rem] border border-white/10 pointer-events-none" />

              {/* Phone Frame */}
              <PhoneAvatar
                model="iphone"
                size="xl"
                screenReflection
                virtualButtons
                className="relative z-10 border-gray-800/90 group-hover:border-neon-cyan/40 transition-all duration-500 group-hover:shadow-neon shadow-[0_20px_60px_rgba(0,255,255,0.15)]"
              >
                <PhoneAvatarImage
                  src={profileImage}
                  alt="Kelly Nyachiro"
                  className="object-cover object-center scale-[1.01] rounded-[2rem]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none rounded-[2rem]" />
              </PhoneAvatar>

              {/* Shadow under phone */}
              <div className="absolute -z-10 inset-0 bg-gray-900/80 rounded-[2rem] blur-md scale-95 translate-y-2 group-hover:translate-y-3 transition-transform duration-500" />

              {/* Tech bubbles */}
              <div className="absolute -top-6 -right-6 glass-morphism rounded-full p-4 border border-white/10 animate-float group-hover:shadow-neon transition-all duration-300">
                <Github className="w-6 h-6 text-neon-cyan" />
              </div>
              <div
                className="absolute -bottom-6 -left-6 glass-morphism rounded-full p-4 border border-white/10 animate-float group-hover:shadow-neon transition-all duration-300"
                style={{ animationDelay: "2s" }}
              >
                <Linkedin className="w-6 h-6 text-neon-purple" />
              </div>
              <div
                className="absolute top-1/2 -right-8 glass-morphism rounded-full p-3 border border-white/10 animate-float group-hover:shadow-neon transition-all duration-300"
                style={{ animationDelay: "1s" }}
              >
                <span className="text-xs font-bold text-neon-cyan">JS</span>
              </div>
              <div
                className="absolute top-1/4 -left-8 glass-morphism rounded-full p-3 border border-white/10 animate-float group-hover:shadow-neon transition-all duration-300"
                style={{ animationDelay: "3s" }}
              >
                <span className="text-xs font-bold text-neon-purple">PY</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection("about")}
            className="glass-morphism p-3 rounded-full text-neon-cyan hover:text-neon-cyan-glow hover:shadow-neon transition-all duration-300 group border border-white/10"
          >
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
      
      <style jsx>{`
        .blinking-cursor {
          animation: blink 1s step-end infinite;
          color: #0ff;
        }
        
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Hero;