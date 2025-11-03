import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Users, TrendingUp, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      icon: Users,
      title: 'Zespół ekspertów',
      description: 'Doświadczeni specjaliści gotowi pomóc w realizacji Twoich projektów'
    },
    {
      icon: TrendingUp,
      title: 'Wzrost biznesu',
      description: 'Skuteczne strategie prowadzące do rozwoju Twojej firmy'
    },
    {
      icon: Award,
      title: 'Najwyższa jakość',
      description: 'Gwarantujemy profesjonalizm i wysoką jakość świadczonych usług'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Profesjonalne rozwiązania <br />
            <span className="text-primary">dla Twojego biznesu</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Pomagamy firmom osiągać sukces dzięki innowacyjnym rozwiązaniom i sprawdzonej wiedzy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/kontakt">
                Rozpocznij współpracę <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/uslugi">Nasze usługi</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Dlaczego my?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover-scale">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Korzyści ze współpracy
              </h2>
              <ul className="space-y-4">
                {[
                  'Indywidualne podejście do każdego klienta',
                  'Sprawdzone metody i narzędzia',
                  'Wsparcie na każdym etapie projektu',
                  'Przejrzyste warunki współpracy',
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-8 h-96 flex items-center justify-center">
              <p className="text-muted-foreground text-center">Miejsce na grafikę lub zdjęcie</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Gotowy na rozpoczęcie współpracy?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Skontaktuj się z nami już dziś i zobacz, jak możemy pomóc Twojej firmie
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/kontakt">Skontaktuj się</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
