"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Play,
  Camera,
  Video,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Globe,
  Menu,
  X,
  Star,
  Check,
  CheckCircle2,
  MessageCircle,
  Youtube,
  Facebook,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const whatsappNumber = "6281247942172";
  const whatsappMessage =
    "Halo Balim Stream, saya tertarik untuk menggunakan layanan multimedia Anda.";

  return (
    <div className="min-h-screen bg-white selection:bg-green-100 scroll-smooth">
      {/* Navbar Modern */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-cyan-600 rounded-lg flex items-center justify-center rotate-3">
              <span className="text-white font-black -rotate-3">BS</span>
            </div>
            <span className="font-bold text-xl tracking-tighter hidden sm:inline">
              BALIM STREAM
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
            <a
              href="#services"
              className="hover:text-green-600 transition-colors duration-300"
            >
              Layanan
            </a>
            <a
              href="#portfolio"
              className="hover:text-green-600 transition-colors duration-300"
            >
              Portofolio
            </a>
            <a
              href="#pricing"
              className="hover:text-green-600 transition-colors duration-300"
            >
              Harga
            </a>
            <a
              href="#contact"
              className="hover:text-green-600 transition-colors duration-300"
            >
              Kontak
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <Link
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              whatsappMessage,
            )}`}
            target="_blank"
          >
            <Button className="hidden md:flex bg-green-600 hover:bg-green-700 rounded-full gap-2">
              <MessageCircle size={18} /> Chat WA
            </Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-white/95 backdrop-blur-sm">
            <div className="container mx-auto px-6 py-4 space-y-3">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 hover:text-green-600 transition-colors"
              >
                Layanan
              </a>
              <a
                href="#portfolio"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 hover:text-green-600 transition-colors"
              >
                Portofolio
              </a>
              <a
                href="#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 hover:text-green-600 transition-colors"
              >
                Harga
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 hover:text-green-600 transition-colors"
              >
                Kontak
              </a>
              <Link
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  whatsappMessage,
                )}`}
                target="_blank"
                className="w-full block"
              >
                <Button className="w-full bg-green-600 hover:bg-green-700 rounded-full flex gap-2 justify-center">
                  <MessageCircle size={18} /> Chat WA
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Emphasizing Papua Heritage */}
      <section className="relative pt-36 pb-24 overflow-hidden md:pt-40">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-block mb-6 animate-bounce">
            <Badge
              variant="secondary"
              className="py-1.5 px-4 text-green-700 bg-green-50 border-green-200 text-xs md:text-sm font-semibold"
            >
              ✨ Multimedia Terpercaya dari Papua
            </Badge>
          </div>
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-gray-900 mb-6 tracking-tighter leading-tight">
            Cerita Kami, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-cyan-500 to-green-600 animate-pulse">
              Aliran Kami.
            </span>
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed px-2 italic">
            "Mendokumentasikan jejak budaya dan momen berharga melalui lensa
            profesional."
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <a href="#portfolio">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-cyan-600 hover:from-green-700 hover:to-cyan-700 text-white rounded-full px-8 font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Lihat Hasil Karya
              </Button>
            </a>
            <Link
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                whatsappMessage,
              )}`}
              target="_blank"
            >
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 border-2 border-green-600 text-green-600 hover:bg-green-50 font-semibold"
              >
                Hubungi Kami
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto">
            <div className="bg-gray-50 p-4 rounded-xl hover:bg-green-50 transition-colors">
              <div className="text-2xl md:text-3xl font-bold text-green-600">
                50+
              </div>
              <p className="text-xs md:text-sm text-gray-600 mt-1">
                Proyek Selesai
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl hover:bg-green-50 transition-colors">
              <div className="text-2xl md:text-3xl font-bold text-green-600">
                100%
              </div>
              <p className="text-xs md:text-sm text-gray-600 mt-1">
                Kepuasan Klien
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl hover:bg-green-50 transition-colors">
              <div className="text-2xl md:text-3xl font-bold text-green-600">
                24/7
              </div>
              <p className="text-xs md:text-sm text-gray-600 mt-1">
                Support Siap
              </p>
            </div>
          </div>
        </div>

        {/* Background Decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[300px] md:h-[500px] bg-gradient-to-r from-green-200/30 to-cyan-200/30 blur-[120px] -z-10 rounded-full" />
        <div className="absolute top-10 right-10 w-72 h-72 bg-green-200/10 blur-3xl -z-10 rounded-full" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-cyan-200/10 blur-3xl -z-10 rounded-full" />
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-24 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-gray-900">
              Layanan Unggulan Kami
            </h2>
            <p className="text-gray-600 mb-4 max-w-2xl">
              Kami menyediakan solusi multimedia komprehensif untuk membawa visi
              Anda menjadi kenyataan
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-green-600 to-cyan-600 rounded-full" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Live Streaming",
                icon: <Play className="w-6 h-6" />,
                desc: "Streaming multi-kamera profesional untuk event, ibadah, seminar, dan konferensi dengan kualitas 4K.",
              },
              {
                title: "Photography",
                icon: <Camera className="w-6 h-6" />,
                desc: "Dokumentasi budaya, wedding, pre-wedding, dan foto produk komersial dengan eye catching.",
              },
              {
                title: "Videography",
                icon: <Video className="w-6 h-6" />,
                desc: "Produksi film dokumenter, iklan kreatif, highlight event, dan corporate video berkualitas tinggi.",
              },
            ].map((s, i) => (
              <Card
                key={i}
                className="border border-gray-200 shadow-lg hover:shadow-2xl hover:border-green-300 transition-all duration-500 group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardHeader className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-600 to-cyan-600 text-white rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {s.icon}
                  </div>
                  <CardTitle className="text-xl font-bold">{s.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {s.desc}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="ghost"
                    className="text-green-600 hover:bg-green-50 p-0 font-semibold"
                  >
                    Pelajari lebih →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Portfolio Section */}
      <section id="portfolio" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-gray-900">
              Karya Terbaru
            </h2>
            <p className="text-gray-600 mb-4">
              Momen yang kami abadikan di seluruh tanah Papua
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-green-600 to-cyan-600 rounded-full mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&h=750&fit=crop",
                cat: "Photography",
                title: "Festival Budaya",
              },
              {
                img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&h=750&fit=crop",
                cat: "Live Streaming",
                title: "Konser Musik",
              },
              {
                img: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&h=750&fit=crop",
                cat: "Videography",
                title: "Documentary Project",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-3xl aspect-[4/5] bg-gray-100 shadow-lg transition-transform hover:-translate-y-2"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider text-green-400 mb-2">
                    {item.cat}
                  </span>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 rounded-full"
            >
              Lihat Semua Portfolio →
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-gray-900">
              Paket Layanan
            </h2>
            <p className="text-gray-600 mb-4">
              Pilih layanan yang sesuai dengan kebutuhan Anda
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-green-600 to-cyan-600 rounded-full mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Basic Story",
                price: "Rp 3jt",
                features: [
                  "1 Kamera",
                  "4 Jam Kerja",
                  "Editing Ringan",
                  "Link Download",
                ],
                isPopular: false,
              },
              {
                name: "Pro Flow",
                price: "Rp 7jt",
                features: [
                  "3 Kamera",
                  "Full Day",
                  "Live Streaming Multi-Cam",
                  "Master File 4K",
                  "Drone Footage",
                ],
                isPopular: true,
              },
              {
                name: "Custom Event",
                price: "Hubungi Kami",
                features: [
                  "Sesuai Kebutuhan",
                  "Dokumentasi VIP",
                  "Tim Lengkap",
                  "Peralatan High-End",
                ],
                isPopular: false,
              },
            ].map((pkg, i) => (
              <Card
                key={i}
                className={`relative border-2 transition-all ${
                  pkg.isPopular
                    ? "border-green-600 shadow-2xl scale-105"
                    : "border-transparent shadow-xl"
                }`}
              >
                {pkg.isPopular && (
                  <Badge className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-600 text-white px-4 py-1">
                    Paling Diminati
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-gray-900">
                      {pkg.price}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {pkg.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex gap-3 text-gray-600 items-center"
                    >
                      <CheckCircle2 size={18} className="text-green-600" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </CardContent>
                <CardFooter>
                  <Link
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                      whatsappMessage,
                    )}`}
                    target="_blank"
                    className="w-full"
                  >
                    <Button
                      className={`w-full py-6 rounded-xl font-semibold ${
                        pkg.isPopular
                          ? "bg-green-600 hover:bg-green-700"
                          : "bg-gray-900 hover:bg-gray-800"
                      }`}
                    >
                      Pilih Paket
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-gray-900">
              Apa Kata Klien Kami
            </h2>
            <p className="text-gray-600 mb-4 max-w-2xl">
              Kepercayaan dan kepuasan klien adalah aset terbesar kami
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-green-600 to-cyan-600 rounded-full" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Budi Santoso",
                role: "Event Organizer",
                text: "Layanan live streaming mereka sangat profesional. Kualitas HD yang sempurna untuk event kami.",
                rating: 5,
              },
              {
                name: "Siti Nurhaliza",
                role: "Wedding Planner",
                text: "Fotografer yang luar biasa! Setiap momen tertangkap dengan sempurna dan detail yang menakjubkan.",
                rating: 5,
              },
              {
                name: "Ahmad Wijaya",
                role: "Pemilik Bisnis",
                text: "Video promo produk kami jadi viral! Kreativitas mereka benar-benar luar biasa dan hasil berkualitas tinggi.",
                rating: 5,
              },
            ].map((t, i) => (
              <Card
                key={i}
                className="border-none shadow-lg hover:shadow-xl transition-all p-6"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star
                      key={j}
                      size={18}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">"{t.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-green-600 font-medium">{t.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Footer */}
      <footer
        id="contact"
        className="bg-gray-900 text-white pt-24 pb-12 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-cyan-600/10 -z-10" />

        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 mb-16">
          <div>
            <h2 className="text-5xl font-bold mb-8 leading-tight">
              Mulai Alirkan <br />
              Cerita Anda.
            </h2>
            <div className="space-y-6">
              <div className="flex items-center gap-6 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center text-green-500">
                  <MapPin />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest">
                    Lokasi
                  </p>
                  <p className="font-medium text-lg">
                    Jln. SMA Kristen Wamena, Papua
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6 p-4 rounded-2xl bg-white/5 border border-white/10 text-gray-400 hover:text-green-500 transition-colors cursor-pointer">
                <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center text-green-500">
                  <Phone />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest">
                    WhatsApp
                  </p>
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                      whatsappMessage,
                    )}`}
                    target="_blank"
                    className="font-medium text-lg text-white hover:text-green-400 transition-colors"
                  >
                    0812 4794 2172
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 p-10 rounded-[2.5rem] border border-white/10">
            <h3 className="text-2xl font-semibold mb-8">Kirim Pesan Cepat</h3>
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Nama Lengkap"
                className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder:text-gray-400 focus:outline-none focus:border-green-600 transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder:text-gray-400 focus:outline-none focus:border-green-600 transition-colors"
              />
              <textarea
                placeholder="Ceritakan kebutuhan multimedia Anda..."
                rows={4}
                className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder:text-gray-400 focus:outline-none focus:border-green-600 transition-colors resize-none"
              />
              <Button
                size="lg"
                className="w-full bg-green-600 hover:bg-green-700 py-8 rounded-2xl text-lg font-bold"
              >
                Kirim Sekarang
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="container mx-auto px-6 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-sm">
          <p>© 2024 Balim Stream. Project of Papua Pegunungan.</p>
          <div className="flex gap-6">
            <Link
              href="https://instagram.com"
              target="_blank"
              className="hover:text-green-500 transition-colors flex items-center gap-2"
            >
              <Instagram size={18} /> Instagram
            </Link>
            <Link
              href="https://youtube.com"
              target="_blank"
              className="hover:text-green-500 transition-colors flex items-center gap-2"
            >
              <Youtube size={18} /> YouTube
            </Link>
            <Link
              href="https://facebook.com"
              target="_blank"
              className="hover:text-green-500 transition-colors flex items-center gap-2"
            >
              <Facebook size={18} /> Facebook
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
