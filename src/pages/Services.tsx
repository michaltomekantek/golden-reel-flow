import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Droplet, Zap, Hammer, Paintbrush, Wrench, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Droplet,
      title: 'Usługi hydrauliczne',
      description: 'Kompleksowe usługi hydrauliczne - od drobnych napraw po instalacje',
      features: ['Naprawa kranów i baterii', 'Udrażnianie rur', 'Montaż instalacji', 'Wymiana grzejników']
    },
    {
      icon: Zap,
      title: 'Usługi elektryczne',
      description: 'Bezpieczne i profesjonalne usługi elektryczne z uprawnieniami',
      features: ['Wymiana instalacji', 'Montaż gniazdek', 'Tablice rozdzielcze', 'Oświetlenie LED']
    },
    {
      icon: Hammer,
      title: 'Usługi stolarskie',
      description: 'Meble na wymiar, remonty i naprawa elementów drewnianych',
      features: ['Meble na wymiar', 'Montaż drzwi', 'Naprawa mebli', 'Zabudowy wnęk']
    },
    {
      icon: Paintbrush,
      title: 'Usługi malarskie',
      description: 'Profesjonalne malowanie i wykończenia wnętrz',
      features: ['Malowanie ścian', 'Tapetowanie', 'Gładź szpachlowa', 'Panele ścienne']
    },
    {
      icon: Wrench,
      title: 'Drobne naprawy',
      description: 'Szybkie naprawy i usługi ogólnobudowlane',
      features: ['Wieszanie półek', 'Naprawa okien', 'Montaż karniszy', 'Drobne remonty']
    },
    {
      icon: Phone,
      title: 'Interwencje awaryjne',
      description: 'Dostępni 24/7 w sytuacjach awaryjnych',
      features: ['Awarie hydrauliczne', 'Awarie elektryczne', 'Pilne naprawy', 'Szybka reakcja']
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nasze usługi</h1>
          <p className="text-xl text-muted-foreground">
            Kompleksowe usługi dla Twojego domu i firmy - szybko, solidnie, uczciwie
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="hover-scale">
              <CardHeader>
                <service.icon className="h-12 w-12 text-primary mb-4" />
                <CardTitle>{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-muted rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Nie ma Twojej usługi na liście?</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Zadzwoń - wykonujemy również wiele innych usług. Bezpłatna wycena!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              <Phone className="mr-2 h-5 w-5" />
              Zadzwoń: 123 456 789
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/kontakt">Formularz kontaktowy</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
