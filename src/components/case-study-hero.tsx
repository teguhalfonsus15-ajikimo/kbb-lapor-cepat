import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Play, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-road-infrastructure.jpg";

export function CaseStudyHero() {
  return (
    <div className="relative min-h-[60vh] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Beranda
          </Link>
          
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              #laporkerusakan
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              #teknisilapangan
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              #transportasipublik
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Digitalisasi Pelaporan Jalan & Transportasi di Bandung Barat
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl">
            Dinas Perhubungan Kabupaten Bandung Barat kini menggunakan HaloGov untuk menerima 
            laporan warga secara cepat dan terstruktur melalui WhatsApp.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              <Play className="w-5 h-5 mr-2" />
              Lihat Demo WhatsApp
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gov-neutral">
              <Eye className="w-5 h-5 mr-2" />
              Kembali ke Studi Kasus Lainnya
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}