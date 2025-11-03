import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code, Megaphone, LineChart, Palette, Shield, Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Rozwój oprogramowania',
      description: 'Tworzymy nowoczesne aplikacje webowe i mobilne dostosowane do Twoich potrzeb',
      features: ['Aplikacje webowe', 'Aplikacje mobilne', 'Systemy dedykowane']
    },
    {
      icon: Megaphone,
      title: 'Marketing cyfrowy',
      description: 'Skuteczne strategie marketingowe zwiększające widoczność Twojej marki',
      features: ['SEO/SEM', 'Social media', 'Content marketing']
    },
    {
      icon: LineChart,
      title: 'Analityka biznesowa',
      description: 'Analizujemy dane i dostarczamy insights wspierających decyzje biznesowe',
      features: ['Analiza danych', 'Raporty', 'Optymalizacja procesów']
    },
    {
      icon: Palette,
      title: 'Design & UX',
      description: 'Projektujemy intuicyjne interfejsy zapewniające świetne doświadczenia użytkowników',
      features: ['UI/UX Design', 'Branding', 'Prototypowanie']
    },
    {
      icon: Shield,
      title: 'Cyberbezpieczeństwo',
      description: 'Chronimy Twoje dane i infrastrukturę przed zagrożeniami cyfrowym',
      features: ['Audyty bezpieczeństwa', 'Szkolenia', 'Monitoring']
    },
    {
      icon: Headphones,
      title: 'Wsparcie techniczne',
      description: 'Zapewniamy profesjonalne wsparcie i utrzymanie systemów IT',
      features: ['24/7 Support', 'Utrzymanie', 'Aktualizacje']
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nasze usługi</h1>
          <p className="text-xl text-muted-foreground">
            Oferujemy szeroki zakres usług dostosowanych do potrzeb współczesnych przedsiębiorstw
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
          <h2 className="text-3xl font-bold mb-4">Potrzebujesz pomocy w wyborze?</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Skontaktuj się z nami, a pomożemy dobrać idealne rozwiązanie dla Twojego biznesu
          </p>
          <Button size="lg" asChild>
            <Link to="/kontakt">Porozmawiajmy</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Services;
