
import { useState, useEffect } from 'react';
import { ChevronDown, Code2, Server, Cloud, Database, Terminal, Laptop, Globe, Workflow, GitBranch, Container, Cpu, Shield, Github, Linkedin, Mail, FileText } from 'lucide-react';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const roles = ['Web Developer', 'Full Stack Developer', 'UI/UX Designer'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let charIndex = 0;
    const typeRole = () => {
      if (charIndex < currentRole.length) {
        setDisplayText(currentRole.slice(0, charIndex + 1));
        charIndex++;
        setTimeout(typeRole, 100);
      } else {
        setTimeout(() => {
          setCurrentRoleIndex(prev => (prev + 1) % roles.length);
          setDisplayText('');
          charIndex = 0;
        }, 2000);
      }
    };
    typeRole();
  }, [currentRoleIndex]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  // Left side floating icons - Full Stack & Web Development
  const leftSideIcons = [
    { icon: Code2, delay: '0s', top: '15%', left: '5%' },
    { icon: Database, delay: '0.8s', top: '30%', left: '8%' },
    { icon: Server, delay: '1.6s', top: '45%', left: '4%' },
    { icon: Terminal, delay: '2.4s', top: '60%', left: '7%' },
    { icon: Laptop, delay: '3.2s', top: '75%', left: '6%' },
    { icon: Globe, delay: '4s', top: '90%', left: '3%' }
  ];

  // Right side floating icons - DevOps & Cloud Engineering
  const rightSideIcons = [
    { icon: Cloud, delay: '0.4s', top: '10%', right: '5%' },
    { icon: Container, delay: '1.2s', top: '25%', right: '8%' },
    { icon: Workflow, delay: '2s', top: '40%', right: '4%' },
    { icon: GitBranch, delay: '2.8s', top: '55%', right: '7%' },
    { icon: Shield, delay: '3.6s', top: '70%', right: '6%' },
    { icon: Cpu, delay: '4.4s', top: '85%', right: '3%' }
  ];

  return (
    <section id="hero" className="section-transition gradient-bg relative overflow-hidden py-0">
      {/* Left Side Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {leftSideIcons.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div
              key={`left-${index}`}
              className="absolute glass-effect p-3 rounded-full animate-float opacity-60 hover:opacity-100 transition-opacity duration-300"
              style={{
                top: item.top,
                left: item.left,
                animationDelay: item.delay,
                animationDuration: '6s'
              }}
            >
              <IconComponent className="w-5 h-5 text-cyber-400" />
            </div>
          );
        })}
      </div>

      {/* Right Side Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {rightSideIcons.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div
              key={`right-${index}`}
              className="absolute glass-effect p-3 rounded-full animate-float opacity-60 hover:opacity-100 transition-opacity duration-300"
              style={{
                top: item.top,
                right: item.right,
                animationDelay: item.delay,
                animationDuration: '6s'
              }}
            >
              <IconComponent className="w-5 h-5 text-neon-green" />
            </div>
          );
        })}
      </div>

      <div className="container mx-auto text-center z-10 relative min-h-screen flex flex-col justify-center px-4">
        <div className="animate-fade-in">
          {/* Welcome text */}
          <p className="text-sm md:text-base text-primary font-semibold mb-4 tracking-wider uppercase">
            Welcome to my Portfolio
          </p>
          
          {/* Main heading with name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-space">
            Hi, I'm <span className="text-gradient">Saiaashish</span>
            <br />
            <span className="text-gradient">Manivannan</span>
          </h1>
          
          {/* Animated role text */}
          <div className="h-16 mb-4">
            <p className="text-xl md:text-2xl text-muted-foreground">
              I'm a <span className="text-foreground font-semibold">{displayText}</span>
              <span className="animate-pulse">|</span>
            </p>
          </div>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
            Turning Design to Powerful Software. Passionate about creating 
            innovative solutions with cutting-edge technologies.
          </p>
          
          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-in-left animation-delay-600">
            <button 
              onClick={scrollToProjects} 
              className="px-8 py-4 bg-primary hover:bg-primary/80 text-primary-foreground rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              View Projects
            </button>
            <button 
              onClick={() => document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' })} 
              className="px-8 py-4 glass-effect hover:bg-white/10 rounded-full font-semibold transition-all duration-300 hover:scale-105 border border-primary/20"
            >
              Download Resume
            </button>
          </div>
          
          {/* Social links */}
          <div className="flex justify-center gap-6 mb-16">
            <a 
              href="#" 
              className="p-3 glass-effect rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110 group"
            >
              <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a 
              href="#" 
              className="p-3 glass-effect rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110 group"
            >
              <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a 
              href="#" 
              className="p-3 glass-effect rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110 group"
            >
              <Mail className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a 
              href="#" 
              className="p-3 glass-effect rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110 group"
            >
              <FileText className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">Scroll to explore</p>
            <button onClick={scrollToAbout} className="animate-bounce">
              <ChevronDown className="w-6 h-6 text-primary" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
