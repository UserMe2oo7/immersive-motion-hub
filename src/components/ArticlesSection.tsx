
import { BookOpen, Calendar, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ArticlesSection = () => {
  const articles = [
    {
      title: 'Building Scalable React Applications',
      description: 'Learn the best practices for creating maintainable and scalable React applications with modern tooling.',
      date: '2024-01-15',
      readTime: '8 min read',
      tags: ['React', 'JavaScript', 'Best Practices'],
      link: '#',
      delay: 'animation-delay-200'
    },
    {
      title: 'TypeScript Tips for Better Code Quality',
      description: 'Explore advanced TypeScript features that will help you write more robust and type-safe code.',
      date: '2024-01-08',
      readTime: '6 min read',
      tags: ['TypeScript', 'Code Quality', 'Development'],
      link: '#',
      delay: 'animation-delay-400'
    },
    {
      title: 'Modern CSS Techniques and Animation',
      description: 'Discover the latest CSS features and animation techniques to create stunning user interfaces.',
      date: '2024-01-01',
      readTime: '10 min read',
      tags: ['CSS', 'Animation', 'UI/UX'],
      link: '#',
      delay: 'animation-delay-600'
    },
    {
      title: 'Full-Stack Development with Node.js',
      description: 'A comprehensive guide to building full-stack applications using Node.js and modern frameworks.',
      date: '2023-12-25',
      readTime: '12 min read',
      tags: ['Node.js', 'Full-Stack', 'Backend'],
      link: '#',
      delay: 'animation-delay-800'
    }
  ];

  const handleArticleClick = (link: string) => {
    console.log('Navigate to article:', link);
  };

  return (
    <section id="articles" className="section-transition bg-gradient-to-br from-background via-electric-900/10 to-background">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient animate-fade-in">
            Featured Articles
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in animation-delay-200">
            Insights, tutorials, and thoughts on web development, technology, and best practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {articles.map((article, index) => (
            <Card 
              key={article.title}
              className={`glass-effect hover-lift group cursor-pointer animate-fade-in ${article.delay} transition-all duration-300 hover:shadow-2xl`}
              onClick={() => handleArticleClick(article.link)}
            >
              <CardHeader>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(article.date).toLocaleDateString()}</span>
                  <span>•</span>
                  <Clock className="w-4 h-4" />
                  <span>{article.readTime}</span>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {article.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {article.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button 
                  variant="ghost" 
                  className="w-full justify-between group-hover:bg-primary/10 transition-colors"
                >
                  <span className="flex items-center">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Read Article
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in animation-delay-1000">
          <Card className="glass-effect max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Want to Read More?</h3>
              <p className="text-muted-foreground mb-6">
                I regularly publish articles about web development, technology trends, and programming best practices.
              </p>
              <Button className="neon-glow">
                <BookOpen className="w-4 h-4 mr-2" />
                View All Articles
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
