import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Eye, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">O nas</h1>
          <p className="text-xl text-muted-foreground mb-12 text-center">
            Lokalna firma usługowa z wieloletnim doświadczeniem i pasją do rzemiosła
          </p>

          <div className="prose prose-lg max-w-none mb-16">
            <p className="text-lg">
              Jesteśmy firmą rodzinną z wieloletnim doświadczeniem w branży usług remontowo-budowlanych.
              Od ponad 15 lat pomagamy mieszkańcom w codziennych naprawach i większych remontach,
              stawiając na jakość, uczciwość i terminowość.
            </p>
            <p className="text-lg">
              Nasz zespół to wykwalifikowani fachowcy z uprawnieniami i certyfikatami. Każde zlecenie
              traktujemy indywidualnie, dbając o najmniejsze szczegóły. Wierzymy, że zadowolony klient
              to najlepsza rekomendacja.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <Card>
              <CardHeader>
                <Target className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Misja</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Pomagać ludziom w tworzeniu bezpiecznych i komfortowych domów poprzez rzetelne usługi
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Eye className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Doświadczenie</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Ponad 15 lat w branży, setki zadowolonych klientów i tysiące wykonanych zleceń
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Heart className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Wartości</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Uczciwość, solidność i pełne zaangażowanie w każde zlecenie
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="bg-muted rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Zaufali nam</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Zadowolonych klientów</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">2000+</div>
                <div className="text-sm text-muted-foreground">Wykonanych usług</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Lat doświadczenia</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Zadowolenia</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
