
import { useEffect, useState } from 'react';

const ParticleBackground = () => {
  const [particles, setParticles] = useState<Array<{
    id: number;
    left: string;
    size: string;
    delay: string;
    duration: string;
  }>>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 15; i++) {
        newParticles.push({
          id: i,
          left: Math.random() * 100 + '%',
          size: Math.random() * 4 + 2 + 'px',
          delay: Math.random() * 15 + 's',
          duration: (Math.random() * 10 + 15) + 's'
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  return (
    <div className="particles-container">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: particle.left,
            width: particle.size,
            height: particle.size,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
          }}
        />
      ))}
    </div>
  );
};

export default ParticleBackground;
