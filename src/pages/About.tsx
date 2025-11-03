import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Eye, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">O nas</h1>
          <p className="text-xl text-muted-foreground mb-12 text-center">
            Poznaj naszą historię i wartości, którymi się kierujemy
          </p>

          <div className="prose prose-lg max-w-none mb-16">
            <p className="text-lg">
              Jesteśmy firmą z pasją do tworzenia innowacyjnych rozwiązań. Od lat pomagamy przedsiębiorstwom
              w osiąganiu ich celów biznesowych poprzez profesjonalne usługi i indywidualne podejście.
            </p>
            <p className="text-lg">
              Nasz zespół składa się z doświadczonych specjalistów, którzy łączą wiedzę techniczną
              z kreatywnym myśleniem. Wierzymy, że sukces naszych klientów to nasz sukces.
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
                  Dostarczanie najwyższej jakości rozwiązań, które realnie wspierają rozwój firm
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Eye className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Wizja</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Być liderem w branży i partnerem pierwszego wyboru dla przedsiębiorstw
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
                  Profesjonalizm, transparentność i zaangażowanie w każdym projekcie
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="bg-muted rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Nasze liczby</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Zadowolonych klientów</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                <div className="text-sm text-muted-foreground">Zrealizowanych projektów</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Lat doświadczenia</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Członków zespołu</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
