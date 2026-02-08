'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Play, Camera, Video, CheckCircle, Star, Clock, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface Service {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl?: string;
  featured: boolean;
}

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('/api/services');
        const data = await response.json();
        setServices(data || []);
      } catch (error) {
        console.error('Error fetching services:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const serviceCategories = [
    {
      icon: Play,
      title: "Live Streaming",
      description: "Professional multi-camera live streaming services",
      color: "from-green-400 to-blue-400",
      features: [
        "Multi-camera setup",
        "Professional audio",
        "Real-time broadcasting",
        "International reach",
        "Event documentation"
      ]
    },
    {
      icon: Camera,
      title: "Photography",
      description: "Cultural and event photography services",
      color: "from-blue-400 to-purple-400",
      features: [
        "Cultural ceremonies",
        "Event coverage",
        "Portrait photography",
        "Landscape documentation",
        "Photo editing"
      ]
    },
    {
      icon: Video,
      title: "Videography",
      description: "Professional video production services",
      color: "from-purple-400 to-pink-400",
      features: [
        "Documentary filming",
        "Event coverage",
        "Corporate videos",
        "Cultural storytelling",
        "Post-production"
      ]
    }
  ];

  const pricingPackages = [
    {
      name: "Basic Package",
      price: 3000000,
      description: "Perfect for small events and personal projects",
      features: [
        "Single camera/operator",
        "3 hours coverage",
        "Basic editing",
        "Digital delivery",
        "1 revision"
      ],
      popular: false
    },
    {
      name: "Professional Package",
      price: 8000000,
      description: "Ideal for corporate events and medium-sized projects",
      features: [
        "Multi-camera setup",
        "8 hours coverage",
        "Professional editing",
        "4K quality",
        "Digital & physical delivery",
        "3 revisions",
        "Basic motion graphics"
      ],
      popular: true
    },
    {
      name: "Premium Package",
      price: 15000000,
      description: "Complete solution for large events and documentaries",
      features: [
        "Full production team",
        "Unlimited coverage",
        "Cinematic editing",
        "4K + drone footage",
        "Multiple delivery formats",
        "Unlimited revisions",
        "Advanced post-production",
        "Priority support"
      ],
      popular: false
    }
  ];

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
              <Link href="/services" className="text-green-600 font-semibold">Services</Link>
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
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl mb-8 font-light">
              Professional multimedia services with authentic Papuan perspective and international quality standards
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                View Pricing
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive multimedia services tailored to your needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                <div className={`h-48 bg-gradient-to-br ${category.color} flex items-center justify-center relative overflow-hidden`}>
                  <category.icon className="w-20 h-20 text-white z-10" />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{category.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-green-600 hover:bg-green-700">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Descriptions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Service Details</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Learn more about our specialized services
            </p>
          </div>

          <div className="space-y-16 max-w-6xl mx-auto">
            {/* Live Streaming Details */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <Play className="w-12 h-12 text-green-600 mr-4" />
                  <h3 className="text-3xl font-bold text-gray-900">Live Streaming Services</h3>
                </div>
                <p className="text-gray-700 mb-6">
                  Our professional live streaming services bring your events to a global audience with 
                  technical excellence and cultural sensitivity. We specialize in broadcasting cultural 
                  ceremonies, corporate events, and special occasions with multi-camera coverage and 
                  professional audio quality.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-green-600 mr-2" />
                    <span className="text-gray-700">Global Audience Reach</span>
                  </div>
                  <div className="flex items-center">
                    <Camera className="w-5 h-5 text-green-600 mr-2" />
                    <span className="text-gray-700">Multi-Camera Setup</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-green-600 mr-2" />
                    <span className="text-gray-700">Real-Time Broadcasting</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-green-600 mr-2" />
                    <span className="text-gray-700">HD Quality</span>
                  </div>
                </div>
                <Button className="bg-green-600 hover:bg-green-700">
                  Get Streaming Quote
                </Button>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop"
                  alt="Live streaming setup"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>

            {/* Photography Details */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative">
                <img 
                  src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=400&fit=crop"
                  alt="Photography session"
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center mb-6">
                  <Camera className="w-12 h-12 text-blue-600 mr-4" />
                  <h3 className="text-3xl font-bold text-gray-900">Photography Services</h3>
                </div>
                <p className="text-gray-700 mb-6">
                  Our photography services capture the essence of Papua's rich culture and natural beauty. 
                  From traditional ceremonies to modern corporate events, we approach every project with 
                  cultural understanding and artistic vision. Our team specializes in documentary-style 
                  photography that tells authentic stories.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-gray-700">Cultural Events</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-gray-700">Portrait Photography</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-gray-700">Event Coverage</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-gray-700">Professional Editing</span>
                  </div>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Get Photography Quote
                </Button>
              </div>
            </div>

            {/* Videography Details */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <Video className="w-12 h-12 text-purple-600 mr-4" />
                  <h3 className="text-3xl font-bold text-gray-900">Videography Services</h3>
                </div>
                <p className="text-gray-700 mb-6">
                  Our videography services create compelling visual narratives that showcase Papua's 
                  stories, culture, and beauty. We produce documentaries, event coverage, corporate 
                  videos, and promotional content with cinematic quality and authentic storytelling. 
                  Our team combines technical expertise with deep cultural understanding.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-purple-600 mr-2" />
                    <span className="text-gray-700">Documentary Films</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-purple-600 mr-2" />
                    <span className="text-gray-700">Event Videos</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-purple-600 mr-2" />
                    <span className="text-gray-700">4K Quality</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-purple-600 mr-2" />
                    <span className="text-gray-700">Post-Production</span>
                  </div>
                </div>
                <Button className="bg-purple-600 hover:bg-purple-700">
                  Get Videography Quote
                </Button>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=600&h=400&fit=crop"
                  alt="Video production"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Pricing Packages</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Flexible pricing options to suit your needs and budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPackages.map((pkg, index) => (
              <Card key={index} className={`relative hover:shadow-xl transition-shadow ${pkg.popular ? 'border-2 border-green-600' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-green-600 text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">
                      Rp {(pkg.price / 1000000).toFixed(1)}M
                    </span>
                  </div>
                  <CardDescription className="mt-2">{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${pkg.popular ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-600 hover:bg-gray-700'}`}>
                    Choose Package
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Need a custom solution? We can tailor our services to your specific requirements.
            </p>
            <Button variant="outline" size="lg">
              Get Custom Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Booking Information */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Booking Information</h2>
              <p className="text-xl text-gray-600">
                Everything you need to know about working with us
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Booking Requirements</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Contract signing required for all projects</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">50% down payment before project start</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Minimum 1 week advance booking</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Custom packages available upon request</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">What's Included</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Professional equipment and crew</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Pre-production consultation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Post-production and editing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Digital delivery of final content</span>
                  </li>
                </ul>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Card className="p-8 bg-gradient-to-r from-green-50 to-blue-50">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
                <p className="text-gray-700 mb-6">
                  Contact us today to discuss your project and get a personalized quote
                </p>
                <Link href="/#contact">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700">
                    Contact Us Now
                  </Button>
                </Link>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}