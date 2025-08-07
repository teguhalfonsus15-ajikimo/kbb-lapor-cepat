import { CaseStudyHero } from "@/components/case-study-hero";
import { MetricCard } from "@/components/ui/metric-card";
import { FeatureCard } from "@/components/ui/feature-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, QrCode, Phone, FileText, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function CaseStudy() {
  return (
    <div className="min-h-screen bg-background">
      <CaseStudyHero />
      
      {/* Background Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gov-neutral mb-8 text-center">
              Latar Belakang
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  Dinas Perhubungan Kabupaten Bandung Barat menghadapi tantangan dalam menangani 
                  laporan kerusakan jalan, lampu lalu lintas, dan fasilitas umum lainnya. 
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  Sebelum digitalisasi, laporan disampaikan secara manual dan tidak terstruktur, 
                  menyulitkan tindak lanjut teknis di lapangan.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Melalui kerja sama dengan HaloGov, Dishub KBB kini memanfaatkan chatbot WhatsApp 
                  untuk menerima laporan warga secara otomatis dan real-time.
                </p>
              </div>
              
              <div className="bg-gradient-card rounded-lg p-8 shadow-medium">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gov-neutral mb-2">
                    Logo Dishub KBB
                  </h3>
                  <p className="text-muted-foreground">
                    Ilustrasi chatbot pelaporan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gov-neutral mb-12 text-center">
              Solusi yang Diterapkan
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FeatureCard 
                title="WhatsApp sebagai kanal utama pelaporan masyarakat"
                description="Platform yang familiar dan mudah diakses oleh seluruh lapisan masyarakat"
              />
              <FeatureCard 
                title="Alur chatbot interaktif untuk mengumpulkan detail lokasi dan jenis kerusakan"
                description="Sistem otomatis yang memandu pelapor untuk memberikan informasi lengkap"
              />
              <FeatureCard 
                title="Dashboard untuk teknisi lapangan & operator Dishub"
                description="Interface terpusat untuk monitoring dan koordinasi tim teknis"
              />
              <FeatureCard 
                title="Notifikasi otomatis kepada pelapor terkait status penanganan"
                description="Update real-time mengenai progress penanganan laporan"
              />
              <FeatureCard 
                title="Format laporan terstruktur untuk kecepatan tindak lanjut"
                description="Standarisasi data untuk efisiensi proses internal"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gov-neutral mb-12 text-center">
              Hasil yang Telah Dicapai
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <MetricCard 
                icon="📥"
                value="12.500+"
                label="laporan masuk sejak peluncuran (Q2 2024 – Q3 2025)"
              />
              <MetricCard 
                icon="🚧"
                value="87%"
                label="laporan ditindaklanjuti dalam 3x24 jam"
              />
              <MetricCard 
                icon="👷‍♂️"
                value="35"
                label="teknisi lapangan terhubung langsung melalui sistem"
              />
              <MetricCard 
                icon="💬"
                value="45%"
                label="pengurangan waktu respons operator"
              />
            </div>
            
            <Card className="bg-gradient-card shadow-large border-0">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <Quote className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <blockquote className="text-xl italic text-gov-neutral mb-4 leading-relaxed">
                      "Sekarang kami bisa memproses laporan warga lebih cepat dan terarah. 
                      WhatsApp jadi jembatan komunikasi yang efektif."
                    </blockquote>
                    <cite className="font-semibold text-primary">
                      — Kepala Dinas Perhubungan KBB
                    </cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gov-neutral mb-6">
              Coba Simulasikan Layanan Pelaporan Dishub KBB
            </h2>
            
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Ingin merasakan langsung bagaimana warga Kabupaten Bandung Barat melaporkan 
              kerusakan jalan, rambu lalu lintas, atau masalah transportasi? Coba simulasi 
              chatbot WhatsApp kami di bawah ini.
            </p>
            
            <div className="bg-gradient-card rounded-lg p-8 shadow-medium mb-8">
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="text-center">
                  <div className="w-32 h-32 bg-muted rounded-lg flex items-center justify-center mx-auto mb-4">
                    <QrCode className="w-16 h-16 text-muted-foreground" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    QR Code: Tautkan ke link s.id chatbot demo
                  </p>
                </div>
                
                <div className="text-center">
                  <Button size="lg" className="mb-4">
                    <Phone className="w-5 h-5 mr-2" />
                    Mulai Simulasi WhatsApp
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    📌 Coba kirim laporan seperti warga KBB asli
                  </p>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  Layanan ini sepenuhnya terintegrasi dengan WhatsApp Business API dan 
                  mendukung identifikasi lokasi laporan secara otomatis.
                </p>
              </div>
            </div>
            
            <Card className="bg-primary text-primary-foreground shadow-large border-0">
              <CardContent className="p-8">
                <p className="text-lg mb-4">
                  Tertarik menerapkan solusi serupa di daerah Anda?
                </p>
                <Button variant="secondary" size="lg">
                  Minta Demo Sistem Pelaporan WhatsApp
                </Button>
                <p className="text-sm mt-4 text-primary-foreground/80">
                  Tim HaloGov siap membantu instansi Anda dalam digitalisasi layanan publik 
                  yang efektif dan efisien.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <section className="py-8 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Kembali ke Studi Kasus Lainnya
            </Link>
            <span className="text-muted-foreground hidden md:block">|</span>
            <Link to="/kontak" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              Hubungi Tim HaloGov
            </Link>
            <span className="text-muted-foreground hidden md:block">|</span>
            <Link to="/fitur/whatsapp" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors">
              <FileText className="w-4 h-4 mr-2" />
              Pelajari Solusi WhatsApp Lainnya
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}