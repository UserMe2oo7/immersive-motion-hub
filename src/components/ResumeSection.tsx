
import { useState } from 'react';
import { FileText, Download, Eye, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ResumeSection = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    // Simulate download delay
    setTimeout(() => {
      setIsDownloading(false);
      // In a real app, this would trigger the actual download
      console.log('Resume download started');
    }, 1500);
  };

  const handlePreview = () => {
    // In a real app, this would open the resume in a new tab
    console.log('Resume preview opened');
  };

  return (
    <section id="resume" className="section-transition bg-gradient-to-br from-background via-secondary/20 to-background">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient animate-fade-in">
            My Resume
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in animation-delay-200">
            Download my professional resume or preview it online to learn more about my experience and qualifications.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Resume Preview Card */}
            <Card className="glass-effect hover-lift group animate-fade-in animation-delay-400">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Eye className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Preview Resume</CardTitle>
                <CardDescription>
                  View my resume online before downloading
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button 
                  onClick={handlePreview}
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Preview Online
                </Button>
              </CardContent>
            </Card>

            {/* Resume Download Card */}
            <Card className="glass-effect hover-lift group animate-fade-in animation-delay-600">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Download className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Download Resume</CardTitle>
                <CardDescription>
                  Get a PDF copy of my latest resume
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button 
                  onClick={handleDownload}
                  disabled={isDownloading}
                  className="w-full neon-glow hover:shadow-2xl transition-all duration-300"
                >
                  {isDownloading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Downloading...
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Resume Highlights */}
          <Card className="glass-effect animate-fade-in animation-delay-800">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Resume Highlights</CardTitle>
              <CardDescription>
                Key points from my professional experience
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Star className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">5+ Years Experience</h4>
                      <p className="text-sm text-muted-foreground">Full-stack web development</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Star className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Modern Technologies</h4>
                      <p className="text-sm text-muted-foreground">React, TypeScript, Node.js</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Star className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Problem Solver</h4>
                      <p className="text-sm text-muted-foreground">Complex technical challenges</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Star className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Team Leadership</h4>
                      <p className="text-sm text-muted-foreground">Led cross-functional teams</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Star className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Continuous Learning</h4>
                      <p className="text-sm text-muted-foreground">Always staying updated</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Star className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Results Driven</h4>
                      <p className="text-sm text-muted-foreground">Delivering quality solutions</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
