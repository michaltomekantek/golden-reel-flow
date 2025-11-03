import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Clock, Shield, Award, ThumbsUp, Wrench, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      icon: Clock,
      title: 'Szybka interwencja',
      description: 'Przyjeżdżamy tego samego dnia. Awaria? Dzwoń!'
    },
    {
      icon: Shield,
      title: 'Gwarancja jakości',
      description: 'Wszystkie usługi objęte gwarancją. Twoje bezpieczeństwo to priorytet'
    },
    {
      icon: Award,
      title: 'Doświadczenie',
      description: 'Wieloletnie doświadczenie i setki zadowolonych klientów'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Profesjonalne usługi <br />
            <span className="text-primary">w Twojej okolicy</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Szybko, solidnie, uczciwie. Twój zaufany fachowiec - hydraulika, elektryka, stolarki i więcej
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg">
              <Phone className="mr-2 h-5 w-5" />
              Zadzwoń: 123 456 789
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/uslugi">Zobacz usługi</Link>
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            ⚡ Pilne interwencje tego samego dnia!
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Dlaczego klienci nas wybierają?
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
                Co nas wyróżnia?
              </h2>
              <ul className="space-y-4">
                {[
                  'Uczciwi ceny bez ukrytych kosztów',
                  'Przybędzjemy punktualnie w ustalonym terminie',
                  'Sprzątamy po sobie - zostaje czysto',
                  'Gwarancja na wykonane usługi',
                  'Profesjonalne narzędzia i materiały',
                  'Bezpłatna wycena i doradztwo',
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-8 h-96 flex flex-col items-center justify-center gap-4">
              <Wrench className="h-24 w-24 text-primary" />
              <p className="text-muted-foreground text-center font-medium">Profesjonalne narzędzia<br />Sprawdzone rozwiązania</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Zaufali nam
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Wykonanych zleceń</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Zadowolonych klientów</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Lat doświadczenia</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Pogotowie awaryjne</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Potrzebujesz pomocy fachowca?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Zadzwoń lub napisz - wycena zawsze bezpłatna!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg">
              <Phone className="mr-2 h-5 w-5" />
              123 456 789
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/kontakt">Formularz kontaktowy</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
