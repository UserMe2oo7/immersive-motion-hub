
import { useState, useEffect } from 'react';
import { ChevronDown, Code2, Server, Cloud, Database, Terminal, Laptop, Globe, Workflow, GitBranch, Container, Cpu, Shield } from 'lucide-react';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  
  const roles = ['Full Stack Developer', 'UI/UX Designer', 'Creative Coder'];
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
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setDisplayText('');
          charIndex = 0;
        }, 2000);
      }
    };

    typeRole();
  }, [currentRoleIndex]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Left side floating icons - Full Stack & Web Development
  const leftSideIcons = [
    { icon: Code2, delay: '0s', top: '10%', left: '3%' },
    { icon: Database, delay: '0.8s', top: '25%', left: '7%' },
    { icon: Server, delay: '1.6s', top: '40%', left: '4%' },
    { icon: Terminal, delay: '2.4s', top: '55%', left: '8%' },
    { icon: Laptop, delay: '3.2s', top: '70%', left: '5%' },
    { icon: Globe, delay: '4s', top: '85%', left: '9%' },
  ];

  // Right side floating icons - DevOps & Cloud Engineering
  const rightSideIcons = [
    { icon: Cloud, delay: '0.4s', top: '15%', right: '3%' },
    { icon: Container, delay: '1.2s', top: '30%', right: '7%' },
    { icon: Workflow, delay: '2s', top: '45%', right: '4%' },
    { icon: GitBranch, delay: '2.8s', top: '60%', right: '8%' },
    { icon: Shield, delay: '3.6s', top: '75%', right: '5%' },
    { icon: Cpu, delay: '4.4s', top: '90%', right: '9%' },
  ];

  return (
    <section id="hero" className="section-transition gradient-bg relative overflow-hidden">
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

      <div className="container mx-auto px-6 text-center z-10 relative min-h-screen flex flex-col justify-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-space">
            <span className="text-gradient">Creative</span>
            <br />
            Developer
          </h1>
          
          <div className="h-16 mb-8">
            <p className="text-xl md:text-2xl text-muted-foreground">
              {displayText}
              <span className="animate-pulse">|</span>
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-in-left animation-delay-600">
            <button
              onClick={scrollToProjects}
              className="px-8 py-4 bg-primary hover:bg-primary/80 text-primary-foreground rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Explore My Work
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 glass-effect hover:bg-white/10 rounded-full font-semibold transition-all duration-300 hover:scale-105 border border-primary/20"
            >
              Get In Touch
            </button>
          </div>
        </div>
        
        <div className="mt-auto pb-8">
          <button
            onClick={scrollToAbout}
            className="animate-bounce mx-auto block"
          >
            <ChevronDown className="w-8 h-8 text-muted-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
