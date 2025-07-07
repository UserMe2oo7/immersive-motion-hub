
import { useEffect, useRef, useState } from 'react';
import { Award, Coffee, Clock, Users } from 'lucide-react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    { icon: Coffee, value: '500+', label: 'Cups of Coffee' },
    { icon: Clock, value: '3+', label: 'Years Experience' },
    { icon: Award, value: '50+', label: 'Projects Completed' },
    { icon: Users, value: '100+', label: 'Happy Clients' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section-transition bg-background" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-space">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                I'm a passionate full-stack developer with a love for creating beautiful, 
                functional, and user-centered digital experiences. With over 3 years of 
                experience in web development, I specialize in modern JavaScript frameworks 
                and have a keen eye for design.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or sharing my knowledge through 
                technical articles and mentoring.
              </p>
              <p>
                I believe in writing clean, maintainable code and creating solutions 
                that not only work well but also provide an exceptional user experience.
              </p>
            </div>
          </div>

          <div className={`${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className={`glass-effect p-6 rounded-xl text-center hover-lift ${
                      isVisible ? 'animate-fade-in' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <Icon className="w-8 h-8 text-primary mx-auto mb-4" />
                    <div className="text-2xl font-bold text-gradient mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
