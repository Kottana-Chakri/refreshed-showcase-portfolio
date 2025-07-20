import ProjectCard from './ProjectCard';
import kickstartHero from '@/assets/kickstart-hero.jpg';
import finaiHero from '@/assets/finai-hero.jpg';

const Projects = () => {
  const projects = [
    {
      title: "KickStartX",
      description: "Study Momentum PWA - Transform study intent into daily momentum",
      longDescription: "KickStartX is a comprehensive Progressive Web App designed to help students overcome procrastination by transforming study intentions into actionable daily momentum. The platform combines AI-powered features with psychological insights to create an engaging study experience.",
      technologies: [
        "React 18",
        "TypeScript", 
        "Vite",
        "Tailwind CSS",
        "Supabase",
        "PostgreSQL",
        "Supabase Auth",
        "PWA",
        "Lucide React",
        "React Router DOM"
      ],
      image: kickstartHero,
      githubUrl: "https://github.com/Kottana-Chakri/KickStart",
      liveUrl: "https://kickstartx-study.netlify.app",
      role: "Full Stack Developer",
      duration: "Jul 2025",
      teamSize: "Solo Project",
      features: [
        "Intent-driven voice recordings for personal motivation",
        "AI-powered micro challenges to ease into study sessions",
        "Daily topic planning with content breakdown",
        "PDF upload and link integration for study materials",
        "Progress tracking with visual streaks and analytics",
        "Real-time updates with Supabase integration",
        "Responsive PWA design for mobile and desktop",
        "Row Level Security for data protection"
      ]
    },
    {
      title: "Fin-AI",
      description: "Intelligent Financial Analysis Platform with AI-Powered Insights",
      longDescription: "Fin-AI is a sophisticated financial analysis platform that leverages artificial intelligence to provide comprehensive insights into financial data. The application features both frontend and backend components, offering users advanced analytics and intelligent recommendations for financial decision-making.",
      technologies: [
        "TypeScript",
        "Python",
        "React",
        "FastAPI",
        "Machine Learning",
        "CSS3",
        "JavaScript",
        "Data Analytics",
        "AI/ML APIs",
        "RESTful APIs"
      ],
      image: finaiHero,
      githubUrl: "https://github.com/Kottana-Chakri/Fin-AI",
      role: "Full Stack AI Developer",
      duration: "Jul 2025",
      teamSize: "Solo Project", 
      features: [
        "AI-powered financial data analysis and insights",
        "Intelligent recommendation engine for investment decisions",
        "Real-time market data integration and processing",
        "Advanced data visualization with interactive charts",
        "Machine learning models for predictive analytics",
        "Secure API endpoints for financial data handling",
        "Responsive frontend with modern UI/UX design",
        "Backend microservices architecture with Python/FastAPI"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Showcasing my latest work in full-stack development, AI integration, and modern web technologies. 
            Each project demonstrates my commitment to creating innovative, user-centric solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Interested in seeing more of my work?
          </p>
          <a
            href="https://github.com/Kottana-Chakri"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-accent text-accent-foreground rounded-full font-semibold hover:shadow-glow transition-all duration-300 hover:scale-105"
          >
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;