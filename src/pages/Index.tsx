import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, FileText, Phone, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-hero">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              HaloGov
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Digitalisasi Layanan Publik Melalui WhatsApp
            </p>
            <p className="text-lg mb-12 text-white/80 max-w-2xl mx-auto">
              Membantu instansi pemerintah memberikan pelayanan yang lebih cepat, 
              efisien, dan mudah diakses oleh masyarakat.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/case-study">
                <Button size="lg" variant="secondary" className="min-w-[200px]">
                  <FileText className="w-5 h-5 mr-2" />
                  Lihat Studi Kasus
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gov-neutral min-w-[200px]">
                <Phone className="w-5 h-5 mr-2" />
                Hubungi Kami
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gov-neutral">
              Kenapa Memilih HaloGov?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gradient-card shadow-medium border-0">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Zap className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gov-neutral">Cepat & Responsif</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Respons otomatis 24/7 melalui WhatsApp untuk melayani kebutuhan masyarakat kapan saja
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-card shadow-medium border-0">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Phone className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gov-neutral">Mudah Digunakan</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Interface familiar melalui WhatsApp yang sudah dikenal dan digunakan masyarakat luas
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-card shadow-medium border-0">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gov-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FileText className="w-8 h-8 text-gov-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gov-neutral">Terstruktur</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Sistem pelaporan yang terorganisir dengan dashboard monitoring untuk instansi
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="bg-primary text-primary-foreground shadow-large border-0">
              <CardContent className="p-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Siap Digitalisasi Layanan Publik Anda?
                </h2>
                <p className="text-lg mb-8 text-primary-foreground/90">
                  Bergabunglah dengan puluhan instansi yang telah merasakan 
                  manfaat digitalisasi dengan HaloGov
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/case-study">
                    <Button variant="secondary" size="lg">
                      <FileText className="w-5 h-5 mr-2" />
                      Pelajari Studi Kasus
                    </Button>
                  </Link>
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                    <Phone className="w-5 h-5 mr-2" />
                    Konsultasi Gratis
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
