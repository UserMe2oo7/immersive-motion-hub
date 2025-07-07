
import { Github, Linkedin, Code, Trophy, User, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ProfilesSection = () => {
  const profiles = [
    {
      name: 'GitHub',
      icon: Github,
      description: 'Check out my open source projects and contributions',
      stats: '50+ repositories',
      link: 'https://github.com/username',
      color: 'hover:bg-gray-800',
      delay: 'animation-delay-200'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      description: 'Connect with me professionally and see my career journey',
      stats: '500+ connections',
      link: 'https://linkedin.com/in/username',
      color: 'hover:bg-blue-600',
      delay: 'animation-delay-400'
    },
    {
      name: 'LeetCode',
      icon: Code,
      description: 'View my coding problem-solving skills and achievements',
      stats: '200+ problems solved',
      link: 'https://leetcode.com/username',
      color: 'hover:bg-orange-600',
      delay: 'animation-delay-600'
    },
    {
      name: 'Portfolio',
      icon: User,
      description: 'Explore my detailed portfolio with case studies',
      stats: '10+ featured projects',
      link: 'https://portfolio.com',
      color: 'hover:bg-purple-600',
      delay: 'animation-delay-800'
    }
  ];

  const handleProfileClick = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="profiles" className="section-transition bg-gradient-to-br from-background via-cyber-900/10 to-background">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient animate-fade-in">
            My Profiles
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in animation-delay-200">
            Connect with me across different platforms and explore my work, achievements, and professional journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {profiles.map((profile, index) => {
            const Icon = profile.icon;
            return (
              <Card 
                key={profile.name}
                className={`glass-effect hover-lift group cursor-pointer animate-fade-in ${profile.delay} transition-all duration-300 ${profile.color}`}
                onClick={() => handleProfileClick(profile.link)}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-primary/20 transition-colors group-hover:scale-110 transform duration-300">
                    <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <CardTitle className="text-2xl group-hover:text-white transition-colors">
                    {profile.name}
                  </CardTitle>
                  <CardDescription className="group-hover:text-gray-200 transition-colors">
                    {profile.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-4">
                    <span className="inline-flex items-center space-x-2 text-sm bg-primary/10 text-primary px-3 py-1 rounded-full group-hover:bg-white/20 group-hover:text-white transition-colors">
                      <Trophy className="w-4 h-4" />
                      <span>{profile.stats}</span>
                    </span>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-white group-hover:text-gray-900 group-hover:border-white transition-all duration-300"
                  >
                    Visit Profile
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Featured Achievements */}
        <Card className="glass-effect animate-fade-in animation-delay-1000 max-w-4xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Featured Achievements</CardTitle>
            <CardDescription>
              Some highlights from my coding journey across platforms
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors">
                <div className="text-2xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">GitHub Stars</div>
              </div>
              <div className="text-center p-4 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors">
                <div className="text-2xl font-bold text-primary mb-2">200+</div>
                <div className="text-sm text-muted-foreground">Problems Solved</div>
              </div>
              <div className="text-center p-4 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors">
                <div className="text-2xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Connections</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProfilesSection;
