import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Wiadomość wysłana!',
      description: 'Skontaktujemy się z Tobą wkrótce.',
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Skontaktuj się z nami</h1>
          <p className="text-xl text-muted-foreground">
            Masz pytania? Chętnie na nie odpowiemy i pomożemy w realizacji Twoich celów
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardHeader>
              <Mail className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Email</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                kontakt@firma.pl<br />
                biuro@firma.pl
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Phone className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Telefon</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                +48 123 456 789<br />
                +48 987 654 321
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <MapPin className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Adres</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                ul. Przykładowa 1<br />
                00-001 Warszawa
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Wyślij wiadomość</CardTitle>
            <CardDescription>Wypełnij formularz, a my skontaktujemy się z Tobą</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Imię i nazwisko
                  </label>
                  <Input id="name" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" required />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Telefon
                </label>
                <Input id="phone" type="tel" />
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Temat
                </label>
                <Input id="subject" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Wiadomość
                </label>
                <Textarea id="message" rows={6} required />
              </div>
              <Button type="submit" className="w-full">
                Wyślij wiadomość
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
