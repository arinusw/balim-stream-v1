'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Play, Camera, Video, Filter, Grid, List, Search, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface Portfolio {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl?: string;
  videoUrl?: string;
  featured: boolean;
}

export default function PortfolioPage() {
  const [portfolio, setPortfolio] = useState<Portfolio[]>([]);
  const [filteredPortfolio, setFilteredPortfolio] = useState<Portfolio[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItem, setSelectedItem] = useState<Portfolio | null>(null);

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'streaming', label: 'Live Streaming' },
    { value: 'photography', label: 'Photography' },
    { value: 'videography', label: 'Videography' }
  ];

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const response = await fetch('/api/portfolio');
        const data = await response.json();
        setPortfolio(data || []);
        setFilteredPortfolio(data || []);
      } catch (error) {
        console.error('Error fetching portfolio:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolio();
  }, []);

  useEffect(() => {
    let filtered = portfolio;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredPortfolio(filtered);
  }, [selectedCategory, searchTerm, portfolio]);

  // Default portfolio items when database is empty
  const defaultPortfolio: Portfolio[] = [
    {
      id: '1',
      title: 'Baliem Valley Cultural Festival',
      description: 'Live streaming coverage of the annual cultural festival showcasing traditional dances, music, and ceremonies from the highlands of Papua.',
      category: 'streaming',
      featured: true
    },
    {
      id: '2',
      title: 'Traditional Wedding Ceremony',
      description: 'Complete photography coverage of a traditional Papuan wedding ceremony, capturing the rich cultural traditions and emotional moments.',
      category: 'photography',
      featured: true
    },
    {
      id: '3',
      title: 'Papua Documentary Series',
      description: 'A documentary series exploring the daily life, traditions, and challenges of communities in the Papua highlands.',
      category: 'videography',
      featured: true
    },
    {
      id: '4',
      title: 'Corporate Event Coverage',
      description: 'Professional live streaming and photography for a major corporate event in Jayapura, reaching international stakeholders.',
      category: 'streaming',
      featured: false
    },
    {
      id: '5',
      title: 'Portrait Series: Elders of Papua',
      description: 'A powerful portrait series capturing the wisdom and stories of traditional elders from various Papuan communities.',
      category: 'photography',
      featured: true
    },
    {
      id: '6',
      title: 'Environmental Conservation Video',
      description: 'Documentary video highlighting environmental conservation efforts in Papua, featuring local communities and their initiatives.',
      category: 'videography',
      featured: false
    },
    {
      id: '7',
      title: 'Music Festival Live Stream',
      description: 'Multi-camera live streaming of the Papua Music Festival, featuring traditional and contemporary musical performances.',
      category: 'streaming',
      featured: true
    },
    {
      id: '8',
      title: 'Landscape Photography Collection',
      description: 'Stunning landscape photography showcasing the natural beauty of Papua, from mountains to coastal areas.',
      category: 'photography',
      featured: false
    },
    {
      id: '9',
      title: 'Cultural Dance Performance',
      description: 'Videography of traditional dance performances, preserving and sharing Papua\'s rich cultural heritage.',
      category: 'videography',
      featured: true
    }
  ];

  const displayPortfolio = filteredPortfolio.length > 0 ? filteredPortfolio : defaultPortfolio.filter(item => {
    if (selectedCategory !== 'all') {
      return item.category === selectedCategory;
    }
    if (searchTerm) {
      return item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
             item.description.toLowerCase().includes(searchTerm.toLowerCase());
    }
    return true;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'streaming':
        return <Play className="w-6 h-6" />;
      case 'photography':
        return <Camera className="w-6 h-6" />;
      case 'videography':
        return <Video className="w-6 h-6" />;
      default:
        return <Camera className="w-6 h-6" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'streaming':
        return 'bg-green-100 text-green-800';
      case 'photography':
        return 'bg-blue-100 text-blue-800';
      case 'videography':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

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
              <Link href="/portfolio" className="text-green-600 font-semibold">Portfolio</Link>
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
            <h1 className="text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl mb-8 font-light">
              Explore our collection of stories, events, and cultural moments captured through the lens of authentic Papuan perspective
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                View All Projects
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                Contact for Project
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <div className="relative flex-1 sm:flex-initial">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent w-full sm:w-64"
                />
              </div>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full sm:w-48">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="p-2"
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="p-2"
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          <div className="mt-4 flex items-center justify-between">
            <p className="text-gray-600">
              Showing {displayPortfolio.length} projects
            </p>
            <div className="flex gap-2">
              {categories.slice(1).map((category) => (
                <Button
                  key={category.value}
                  variant={selectedCategory === category.value ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category.value)}
                  className="text-xs"
                >
                  {getCategoryIcon(category.value)}
                  <span className="ml-1">{category.label}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid/List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }, (_, i) => (
                <Card key={i} className="animate-pulse">
                  <div className="h-64 bg-gray-200 rounded-t-lg"></div>
                  <CardContent className="p-4">
                    <div className="h-6 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : viewMode === 'grid' ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayPortfolio.map((item) => (
                <Card 
                  key={item.id} 
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  onClick={() => setSelectedItem(item)}
                >
                  <div className="relative h-64 bg-gradient-to-br from-green-100 to-blue-100 overflow-hidden">
                    {item.imageUrl ? (
                      <img 
                        src={item.imageUrl} 
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        {getCategoryIcon(item.category)}
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                      <Play className="w-16 h-16 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <Badge className={`absolute top-4 left-4 ${getCategoryColor(item.category)}`}>
                      {item.category}
                    </Badge>
                    {item.featured && (
                      <Badge className="absolute top-4 right-4 bg-yellow-500 text-white">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 line-clamp-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm line-clamp-2">{item.description}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <Button variant="outline" size="sm">
                        View Project
                      </Button>
                      <div className="flex items-center text-gray-500">
                        {getCategoryIcon(item.category)}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {displayPortfolio.map((item) => (
                <Card 
                  key={item.id} 
                  className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => setSelectedItem(item)}
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 h-48 md:h-auto bg-gradient-to-br from-green-100 to-blue-100 relative">
                      {item.imageUrl ? (
                        <img 
                          src={item.imageUrl} 
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          {getCategoryIcon(item.category)}
                        </div>
                      )}
                      <Badge className={`absolute top-4 left-4 ${getCategoryColor(item.category)}`}>
                        {item.category}
                      </Badge>
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-xl">{item.title}</h3>
                        <div className="flex items-center gap-2">
                          {item.featured && (
                            <Badge className="bg-yellow-500 text-white">Featured</Badge>
                          )}
                          <div className="text-gray-500">
                            {getCategoryIcon(item.category)}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <Button variant="outline" size="sm">
                        View Project
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
          
          {displayPortfolio.length === 0 && !loading && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No projects found</h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your filters or search terms
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchTerm('');
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div 
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <div className="h-96 bg-gradient-to-br from-green-100 to-blue-100 relative">
                {selectedItem.imageUrl ? (
                  <img 
                    src={selectedItem.imageUrl} 
                    alt={selectedItem.title}
                    className="w-full h-full object-cover"
                  />
                ) : selectedItem.videoUrl ? (
                  <div className="w-full h-full flex items-center justify-center">
                    <Play className="w-24 h-24 text-green-600" />
                  </div>
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    {getCategoryIcon(selectedItem.category)}
                  </div>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-4 right-4 bg-white/80 hover:bg-white"
                  onClick={() => setSelectedItem(null)}
                >
                  <X className="w-4 h-4" />
                </Button>
                <Badge className={`absolute top-4 left-4 ${getCategoryColor(selectedItem.category)}`}>
                  {selectedItem.category}
                </Badge>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">{selectedItem.title}</h2>
                <p className="text-gray-700 mb-6">{selectedItem.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Button className="bg-green-600 hover:bg-green-700">
                      View Full Project
                    </Button>
                    <Button variant="outline">
                      Contact About This Project
                    </Button>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    {getCategoryIcon(selectedItem.category)}
                    <span className="capitalize">{selectedItem.category}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Create Your Story?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let us help you capture and share your special moments with professional quality and cultural authenticity
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                Start Your Project
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                View Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}