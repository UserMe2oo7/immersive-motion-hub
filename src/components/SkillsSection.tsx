
import { useEffect, useRef, useState } from 'react';
import { Code, Database, Palette, Server, Smartphone, Globe } from 'lucide-react';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<Set<string>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      skills: [
        { name: 'React', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Vue.js', level: 80 },
        { name: 'Tailwind CSS', level: 95 },
      ]
    },
    {
      title: 'Backend',
      icon: Server,
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'Express.js', level: 90 },
        { name: 'API Design', level: 85 },
      ]
    },
    {
      title: 'Database',
      icon: Database,
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'Redis', level: 75 },
        { name: 'Prisma', level: 85 },
      ]
    },
    {
      title: 'Design',
      icon: Palette,
      skills: [
        { name: 'UI/UX Design', level: 85 },
        { name: 'Figma', level: 90 },
        { name: 'Adobe XD', level: 80 },
        { name: 'Prototyping', level: 85 },
      ]
    },
    {
      title: 'Mobile',
      icon: Smartphone,
      skills: [
        { name: 'React Native', level: 80 },
        { name: 'Flutter', level: 75 },
        { name: 'Expo', level: 85 },
        { name: 'PWA', level: 90 },
      ]
    },
    {
      title: 'DevOps',
      icon: Globe,
      skills: [
        { name: 'Docker', level: 80 },
        { name: 'AWS', level: 75 },
        { name: 'Vercel', level: 90 },
        { name: 'CI/CD', level: 80 },
      ]
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skill bars with staggered delays
          skillCategories.forEach((category, categoryIndex) => {
            category.skills.forEach((skill, skillIndex) => {
              setTimeout(() => {
                setAnimatedSkills(prev => new Set(prev).add(`${categoryIndex}-${skillIndex}`));
              }, (categoryIndex * 200) + (skillIndex * 100));
            });
          });
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section-transition bg-background" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-space">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className={`glass-effect p-6 rounded-xl hover-lift ${
                  isVisible ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <div className="flex items-center mb-6">
                  <Icon className="w-6 h-6 text-primary mr-3" />
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-progress"
                          style={{
                            width: animatedSkills.has(`${categoryIndex}-${skillIndex}`) 
                              ? `${skill.level}%` 
                              : '0%'
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
