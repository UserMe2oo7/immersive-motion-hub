
import { useState, useEffect } from 'react';
import { ChevronDown, Code, Palette, Zap, Cpu, Globe, Rocket, Database, Wifi, Monitor, Smartphone, Cloud } from 'lucide-react';

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

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Left side floating icons
  const leftSideIcons = [
    { icon: Cpu, delay: '0s', top: '15%', left: '5%' },
    { icon: Database, delay: '1s', top: '35%', left: '8%' },
    { icon: Globe, delay: '2s', top: '55%', left: '6%' },
    { icon: Wifi, delay: '3s', top: '75%', left: '9%' },
  ];

  // Right side floating icons
  const rightSideIcons = [
    { icon: Rocket, delay: '0.5s', top: '20%', right: '5%' },
    { icon: Monitor, delay: '1.5s', top: '40%', right: '8%' },
    { icon: Smartphone, delay: '2.5s', top: '60%', right: '6%' },
    { icon: Cloud, delay: '3.5s', top: '80%', right: '9%' },
  ];

  return (
    <section id="hero" className="section-transition gradient-bg">
      {/* Left Side Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {leftSideIcons.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div
              key={`left-${index}`}
              className="absolute glass-effect p-4 rounded-full animate-float opacity-70 hover:opacity-100 transition-opacity duration-300"
              style={{
                top: item.top,
                left: item.left,
                animationDelay: item.delay,
                animationDuration: '4s'
              }}
            >
              <IconComponent className="w-6 h-6 text-cyber-400" />
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
              className="absolute glass-effect p-4 rounded-full animate-float opacity-70 hover:opacity-100 transition-opacity duration-300"
              style={{
                top: item.top,
                right: item.right,
                animationDelay: item.delay,
                animationDuration: '4s'
              }}
            >
              <IconComponent className="w-6 h-6 text-neon-green" />
            </div>
          );
        })}
      </div>

      <div className="container mx-auto px-6 text-center z-10 relative">
        <div className="animate-fade-in">
          <div className="mb-8 flex justify-center space-x-4">
            <div className="glass-effect p-4 rounded-full animate-float">
              <Code className="w-8 h-8 text-primary" />
            </div>
            <div className="glass-effect p-4 rounded-full animate-float animation-delay-200">
              <Palette className="w-8 h-8 text-cyber-400" />
            </div>
            <div className="glass-effect p-4 rounded-full animate-float animation-delay-400">
              <Zap className="w-8 h-8 text-neon-green" />
            </div>
          </div>
          
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
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-in-left animation-delay-600">
            <button
              onClick={scrollToAbout}
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
        
        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="w-8 h-8 text-muted-foreground" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
