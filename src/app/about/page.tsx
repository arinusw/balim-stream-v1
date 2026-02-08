'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Heart, Users, Target, Award, MapPin, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">BS</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Balim Stream</h1>
                <p className="text-xs text-gray-600">Cerita kami Aliran kami</p>
              </div>
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link href="/services" className="text-gray-700 hover:text-green-600 transition-colors">Services</Link>
              <Link href="/portfolio" className="text-gray-700 hover:text-green-600 transition-colors">Portfolio</Link>
              <Link href="/#testimonials" className="text-gray-700 hover:text-green-600 transition-colors">Testimonials</Link>
              <Link href="/blog" className="text-gray-700 hover:text-green-600 transition-colors">BS Update</Link>
              <Link href="/contact" className="text-gray-700 hover:text-green-600 transition-colors">Contact</Link>
            </nav>
            <Link href="/contact">
              <Button className="bg-green-600 hover:bg-green-700">
                Get Quote
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">About Balim Stream</h1>
            <p className="text-xl mb-8 font-light">
              Discover our story, mission, and the passionate team behind authentic Papuan storytelling
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                Meet Our Team
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Balim Stream was born from the heart of Papua, where the majestic Balim River flows through the highlands, carrying stories of generations. Our name reflects this natural flow - "Balim" from our homeland, and "Stream" representing the continuous flow of stories, culture, and creativity.
                  </p>
                  <p>
                    Founded by a group of passionate young Papuans, we recognized the need to preserve and share our rich cultural heritage through modern multimedia platforms. We bridge the gap between traditional wisdom and contemporary technology, ensuring that Papuan voices are heard globally.
                  </p>
                  <p>
                    Today, Balim Stream stands as a testament to the power of authentic storytelling. We don't just capture moments; we preserve legacies, celebrate traditions, and create bridges between cultures through the universal language of visual media.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?w=600&h=400&fit=crop"
                  alt="Papua landscape"
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-6 rounded-lg shadow-lg">
                  <p className="text-2xl font-bold">Founded 2020</p>
                  <p className="text-green-100">Wamena, Papua</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission & Vision</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Guided by our commitment to preserve and share Papuan culture
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <Target className="w-12 h-12 text-green-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To preserve, promote, and share Papuan cultural heritage through professional multimedia services, 
                creating authentic connections between local communities and global audiences while empowering 
                young Papuans with creative skills and opportunities.
              </p>
              <div className="mt-6 space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Cultural preservation through digital media</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Youth empowerment and skill development</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Global cultural exchange and understanding</span>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-6">
                <Heart className="w-12 h-12 text-green-600 mr-4" />
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To become the leading multimedia platform for authentic Papuan storytelling, 
                where traditional wisdom flows seamlessly into modern creativity, inspiring 
                global appreciation for Papua's rich cultural heritage and natural beauty.
              </p>
              <div className="mt-6 space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Global recognition for Papuan creativity</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Sustainable creative ecosystem in Papua</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Bridge between tradition and innovation</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Tagline Explanation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">"Cerita kami Aliran kami"</h2>
            <p className="text-xl text-gray-600 mb-12">
              This tagline represents our deep commitment to authentic storytelling and cultural continuity
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Authentic Storytelling</h3>
                <p className="text-gray-600">
                  Narratives told from genuine Papuan perspectives, preserving the voice and wisdom of our people
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Cultural Current</h3>
                <p className="text-gray-600">
                  The continuous flow of heritage and creativity, like the Balim River that sustains our homeland
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Natural Harmony</h3>
                <p className="text-gray-600">
                  Flowing with purpose and beauty, reflecting the natural harmony of Papua's landscapes and people
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The passionate young Papuans bringing stories to life
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Yohanis Balim",
                role: "Founder & Creative Director",
                bio: "Visionary leader with deep roots in Papuan culture and modern media expertise"
              },
              {
                name: "Maria Kogoya",
                role: "Lead Photographer",
                bio: "Capturing the essence of Papua through her lens with cultural sensitivity"
              },
              {
                name: "Daniel Wenda",
                role: "Video Producer",
                bio: "Storyteller who brings Papuan narratives to life through compelling visuals"
              },
              {
                name: "Sarah Yikwa",
                role: "Streaming Specialist",
                bio: "Technical expert ensuring seamless live broadcasts of cultural events"
              }
            ].map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-blue-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <Badge variant="secondary" className="mb-3">{member.role}</Badge>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Cultural Authenticity",
                description: "We honor and preserve the genuine voice and traditions of Papua in every project"
              },
              {
                title: "Technical Excellence",
                description: "Professional quality standards that match international best practices"
              },
              {
                title: "Community Impact",
                description: "Creating positive change and opportunities for local communities"
              },
              {
                title: "Innovation",
                description: "Embracing new technologies while respecting traditional wisdom"
              },
              {
                title: "Collaboration",
                description: "Working together with clients and communities to achieve shared goals"
              },
              {
                title: "Sustainability",
                description: "Building a lasting creative ecosystem for future generations"
              }
            ].map((value, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-green-600 font-bold text-lg">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Story</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you're looking to document your event, share your story, or collaborate on a project, 
            we're here to help you create something meaningful.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4">
                Start Your Project
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-green-600 mb-3" />
                <p className="font-semibold">Visit Us</p>
                <p className="text-gray-600 text-sm">Jln. SMA Kristen Wamena, Papua Pegunungan</p>
              </div>
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-green-600 mb-3" />
                <p className="font-semibold">Call Us</p>
                <p className="text-gray-600 text-sm">0812 4794 2172</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-green-600 mb-3" />
                <p className="font-semibold">Email Us</p>
                <p className="text-gray-600 text-sm">balimstream@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}