import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: [
        "React 18", "TypeScript", "JavaScript", "HTML5", "CSS3",
        "Tailwind CSS", "Responsive Design", "PWA", "Vite",
        "React Router", "Component Libraries", "Modern UI/UX"
      ]
    },
    {
      title: "Backend Development", 
      icon: "⚙️",
      skills: [
        "Node.js", "Python", "FastAPI", "RESTful APIs",
        "Microservices", "API Design", "Authentication",
        "Database Design", "Server Architecture"
      ]
    },
    {
      title: "Database & Cloud",
      icon: "🗄️", 
      skills: [
        "PostgreSQL", "Supabase", "Database Design",
        "Row Level Security", "Real-time Updates",
        "Cloud Storage", "Data Modeling", "Query Optimization"
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: "🤖",
      skills: [
        "Machine Learning", "AI Integration", "Predictive Analytics",
        "Data Analysis", "Natural Language Processing",
        "AI-Powered Features", "Model Integration"
      ]
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️",
      skills: [
        "Git", "GitHub", "VS Code", "npm", "Netlify",
        "Vercel", "PLpgSQL", "Lucide Icons", "Component Testing"
      ]
    },
    {
      title: "Soft Skills",
      icon: "💡",
      skills: [
        "Problem Solving", "Project Management", "Solo Development",
        "Code Architecture", "User Experience Design",
        "Performance Optimization", "Clean Code", "Documentation"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Technical Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive skill set spanning modern web technologies, AI integration, 
            and full-stack development with a focus on creating scalable, user-centric applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="group bg-gradient-card border-border/50 hover:border-accent/50 transition-all duration-500 hover:shadow-large hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-accent transition-colors duration-300">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="hover:bg-accent hover:text-accent-foreground transition-all duration-300 cursor-default text-sm"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-accent p-8 rounded-2xl shadow-glow max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Always Learning, Always Growing
            </h3>
            <p className="text-white/90 text-lg leading-relaxed">
              I'm passionate about staying current with the latest technologies and best practices. 
              Currently exploring advanced AI integrations, serverless architectures, and modern deployment strategies 
              to continuously enhance my development capabilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;