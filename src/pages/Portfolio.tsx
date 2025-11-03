import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const projects = [
    {
      title: 'Remont łazienki - Warszawa Mokotów',
      category: 'Hydraulika + Płytki',
      description: 'Kompleksowa wymiana instalacji wodnej, kanalizacji i glazury',
      tags: ['Hydraulika', 'Glazura', 'Kabina prysznicowa'],
      image: 'Realizacja 1'
    },
    {
      title: 'Wymiana instalacji elektrycznej - Dom jednorodzinny',
      category: 'Elektryka',
      description: 'Całkowita wymiana starej instalacji elektrycznej wraz z tablicą rozdzielczą',
      tags: ['Instalacja', 'Tablica', 'LED'],
      image: 'Realizacja 2'
    },
    {
      title: 'Zabudowa garderoby na wymiar',
      category: 'Stolarka',
      description: 'Projektowanie i wykonanie funkcjonalnej zabudowy szafy wnękowej',
      tags: ['Meble', 'Na wymiar', 'Organizacja'],
      image: 'Realizacja 3'
    },
    {
      title: 'Malowanie mieszkania 80m²',
      category: 'Malarstwo',
      description: 'Odświeżenie ścian i sufitów w całym mieszkaniu',
      tags: ['Malowanie', 'Gładź', 'Biały mat'],
      image: 'Realizacja 4'
    },
    {
      title: 'Wymiana grzejników - 10 szt.',
      category: 'Hydraulika',
      description: 'Demontaż starych i montaż nowych grzejników panelowych',
      tags: ['Grzejniki', 'CO', 'Panelowe'],
      image: 'Realizacja 5'
    },
    {
      title: 'Montaż drzwi wewnętrznych - 6 szt.',
      category: 'Stolarka',
      description: 'Profesjonalny montaż drzwi wewnętrznych z ościeżnicami',
      tags: ['Drzwi', 'Montaż', 'Regulacja'],
      image: 'Realizacja 6'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nasze realizacje</h1>
          <p className="text-xl text-muted-foreground">
            Zobacz wybrane prace, które wykonaliśmy dla naszych klientów
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

        <div className="mt-16 text-center bg-muted rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-4">Chcesz zobaczyć więcej?</h3>
          <p className="text-muted-foreground mb-6">
            To tylko wybrane realizacje. Zadzwoń, a pokażemy Ci więcej naszych prac!
          </p>
          <Button size="lg" asChild>
            <Link to="/kontakt">
              <Phone className="mr-2 h-5 w-5" />
              Skontaktuj się
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
