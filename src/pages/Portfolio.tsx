import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      category: 'Rozwój oprogramowania',
      description: 'Kompleksowa platforma e-commerce z systemem zarządzania produktami i integracją płatności',
      tags: ['React', 'Node.js', 'PostgreSQL'],
      image: 'Projekt 1'
    },
    {
      title: 'Marketing Campaign',
      category: 'Marketing cyfrowy',
      description: 'Kampania marketingowa zwiększająca świadomość marki o 300%',
      tags: ['SEO', 'Social Media', 'Content'],
      image: 'Projekt 2'
    },
    {
      title: 'Business Dashboard',
      category: 'Analityka',
      description: 'Zaawansowany dashboard analityczny z real-time reporting',
      tags: ['Analytics', 'BI', 'Visualization'],
      image: 'Projekt 3'
    },
    {
      title: 'Mobile App Design',
      category: 'Design',
      description: 'Nowoczesna aplikacja mobilna z intuicyjnym interfejsem użytkownika',
      tags: ['UI/UX', 'Mobile', 'Figma'],
      image: 'Projekt 4'
    },
    {
      title: 'Security Audit',
      category: 'Cyberbezpieczeństwo',
      description: 'Kompleksowy audyt bezpieczeństwa infrastruktury IT',
      tags: ['Security', 'Audit', 'Compliance'],
      image: 'Projekt 5'
    },
    {
      title: 'CRM System',
      category: 'Rozwój oprogramowania',
      description: 'System CRM dostosowany do specyficznych potrzeb klienta',
      tags: ['CRM', 'Cloud', 'API'],
      image: 'Projekt 6'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Portfolio</h1>
          <p className="text-xl text-muted-foreground">
            Wybrane projekty, które zrealizowaliśmy dla naszych klientów
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover-scale overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <p className="text-muted-foreground font-medium">{project.image}</p>
              </div>
              <CardHeader>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <Badge variant="secondary">{project.category}</Badge>
                </div>
                <CardDescription className="text-base">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="outline">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            To tylko wybrane projekty. Mamy wiele więcej do pokazania!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
