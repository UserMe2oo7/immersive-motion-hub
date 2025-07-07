
import { useState, useEffect } from 'react';
import { ChevronDown, Code, Palette, Zap } from 'lucide-react';

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

  return (
    <section id="hero" className="section-transition gradient-bg">
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
