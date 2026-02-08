'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Clock, User, Search, ArrowRight, Heart, MessageCircle, Share2 } from 'lucide-react';
import Link from 'next/link';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt?: string;
  imageUrl?: string;
  published: boolean;
  slug: string;
  createdAt: string;
  author?: string;
  category?: string;
  readTime?: number;
}

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const categories = [
    { value: 'all', label: 'All Posts' },
    { value: 'culture', label: 'Culture & Tradition' },
    { value: 'technology', label: 'Technology' },
    { value: 'events', label: 'Events' },
    { value: 'stories', label: 'Stories' },
    { value: 'updates', label: 'Company Updates' }
  ];

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch('/api/blog');
        const data = await response.json();
        setBlogPosts(data || []);
        setFilteredPosts(data || []);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  useEffect(() => {
    let filtered = blogPosts;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredPosts(filtered);
  }, [selectedCategory, searchTerm, blogPosts]);

  // Default blog posts when database is empty
  const defaultBlogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Preserving Papuan Culture Through Digital Media',
      content: `In the heart of Papua, where ancient traditions meet modern technology, Balim Stream is pioneering a movement to preserve and share our rich cultural heritage through digital media. Our mission goes beyond simply capturing moments; we're creating a digital archive of Papuan wisdom, stories, and traditions for future generations.

The challenge is significant. Many of our elders carry knowledge that has been passed down through generations, but with the rapid pace of modernization, there's a real risk that this wisdom could be lost. Through our work, we're creating a bridge between traditional knowledge and modern technology.

Our approach is holistic. We don't just document; we collaborate. We work closely with community leaders, cultural experts, and knowledge keepers to ensure that what we capture is authentic, respectful, and meaningful. Every project is an opportunity to learn, to understand, and to share the beauty of Papuan culture with the world.

The impact has been remarkable. Young Papuans who may have been disconnected from their roots are now finding ways to connect with their heritage through digital platforms. International audiences are gaining a deeper appreciation for the richness and diversity of Papuan culture. And most importantly, we're creating a legacy that will serve as a resource for generations to come.

As we look to the future, we're excited about the possibilities. From virtual reality experiences of traditional ceremonies to interactive digital archives of cultural knowledge, we're constantly exploring new ways to fulfill our mission of preserving and sharing Papuan culture through the power of digital media.`,
      excerpt: 'How Balim Stream is using modern technology to preserve and share traditional stories and cultural knowledge for future generations.',
      imageUrl: 'https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?w=800&h=400&fit=crop',
      published: true,
      slug: 'preserving-papuan-culture-digital-media',
      createdAt: '2024-01-15',
      author: 'Yohanis Balim',
      category: 'culture',
      readTime: 5
    },
    {
      id: '2',
      title: 'Behind the Scenes: Cultural Ceremony Coverage',
      content: `Documenting cultural ceremonies is both an honor and a tremendous responsibility. When Balim Stream is invited to cover traditional ceremonies, we understand that we're not just photographers or videographers – we're custodians of sacred moments.

Our preparation begins long before the ceremony itself. We spend time with community leaders, understanding the significance of each ritual, the protocols we need to follow, and the aspects that are most important to preserve. This cultural preparation is just as important as our technical preparation.

During the ceremony, our approach is respectful and unobtrusive. We use long lenses to capture intimate moments without disrupting the natural flow of the ceremony. Our team dresses appropriately, follows all cultural protocols, and always asks permission before filming or photographing sacred elements.

One of the most challenging aspects is balancing the need to document with the requirement to respect privacy and sacredness. Not everything is meant to be shared widely, and we work closely with community leaders to determine what can be shared and what should remain within the community.

The post-production process is equally thoughtful. We consult with cultural experts to ensure that our editing respects the integrity of the ceremony. We avoid sensationalism and focus on authentic representation.

The result is documentation that not only preserves the ceremony for future generations but also helps others understand and appreciate the depth and beauty of Papuan cultural traditions. Each project teaches us something new about our own culture and reinforces our commitment to respectful, authentic storytelling.`,
      excerpt: 'The challenges and rewards of documenting traditional ceremonies in Papua with cultural sensitivity and respect.',
      imageUrl: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&h=400&fit=crop',
      published: true,
      slug: 'behind-scenes-cultural-ceremony',
      createdAt: '2024-01-10',
      author: 'Maria Kogoya',
      category: 'events',
      readTime: 7
    },
    {
      id: '3',
      title: 'The Future of Live Streaming in Papua',
      content: `Live streaming technology is revolutionizing how we share Papuan stories with the world. At Balim Stream, we've been at the forefront of this transformation, using cutting-edge technology to bring cultural events, ceremonies, and stories to global audiences in real-time.

The impact has been extraordinary. Families who have moved away from Papua can now participate in important cultural events from anywhere in the world. International audiences can experience the beauty of Papuan culture without leaving their homes. And most importantly, we're creating new opportunities for cultural exchange and understanding.

Our live streaming setup is sophisticated but portable. We use multi-camera systems, professional audio equipment, and reliable satellite internet connections to ensure high-quality broadcasts even in remote locations. Our team is trained to handle the technical challenges of streaming from areas with limited infrastructure.

One of our most successful projects was the live streaming of the Baliem Valley Cultural Festival. We reached over 50,000 viewers from 30+ countries, generating international interest in Papuan culture and creating new opportunities for cultural tourism and exchange.

Looking ahead, we're excited about the possibilities. We're exploring virtual reality streaming, 360-degree video coverage, and interactive elements that will allow viewers to engage more deeply with the content. We're also working on training more young Papuans in live streaming technology, creating new career opportunities and ensuring that the technology serves the community.

The future of live streaming in Papua is bright, and Balim Stream is proud to be leading the way in using this technology to share our stories with the world while preserving their cultural integrity and significance.`,
      excerpt: 'Exploring opportunities for bringing Papuan stories to global audiences through cutting-edge live streaming technology.',
      imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop',
      published: true,
      slug: 'future-live-streaming-papua',
      createdAt: '2024-01-05',
      author: 'Daniel Wenda',
      category: 'technology',
      readTime: 6
    },
    {
      id: '4',
      title: 'Empowering Youth Through Creative Skills',
      content: `One of the most rewarding aspects of Balim Stream's work is seeing young Papuans discover their creative potential. We believe that empowering youth with creative skills is not just about creating career opportunities – it's about giving them the tools to tell their own stories and preserve their culture in their own way.

Our training programs are comprehensive and hands-on. We start with the basics of photography and videography, then move on to more advanced techniques in editing, storytelling, and production. But technical skills are only part of what we teach. We also focus on cultural understanding, ethical storytelling, and the business aspects of creative work.

The results have been inspiring. Many of our trainees have gone on to start their own creative businesses, work with international media organizations, or use their skills to document their own communities. Some have become trainers themselves, passing on their knowledge to the next generation.

We've seen shy, quiet young people grow into confident storytellers. We've seen technical skills combine with cultural knowledge to create powerful, authentic content. And we've seen young Papuans realize that their stories matter and that they have the power to share them with the world.

Our goal is to create a sustainable creative ecosystem in Papua – one where young people can build careers while contributing to the preservation and celebration of their culture. We're not just training individuals; we're building a community of creative professionals who will carry our mission forward for years to come.

As we look to the future, we're expanding our programs, developing new curriculum, and creating more opportunities for our trainees to gain real-world experience. We believe that by investing in our youth, we're investing in the future of Papuan storytelling.`,
      excerpt: 'How Balim Stream is creating opportunities for young Papuans to develop creative skills and build careers in multimedia.',
      imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=400&fit=crop',
      published: true,
      slug: 'empowering-youth-creative-skills',
      createdAt: '2023-12-28',
      author: 'Sarah Yikwa',
      category: 'stories',
      readTime: 8
    },
    {
      id: '5',
      title: 'Balim Stream: Our Journey and Vision',
      content: `As we reflect on our journey since founding Balim Stream in 2020, we're filled with gratitude for how far we've come and excitement for where we're headed. What started as a small group of passionate young Papuans with a vision has grown into a respected multimedia organization making a real difference in our community.

Our early days were challenging. We had limited equipment, minimal funding, and big dreams. But what we lacked in resources, we made up for in passion, determination, and community support. Our first projects were small – local events, family ceremonies, community gatherings – but each one taught us valuable lessons and helped us build our reputation.

The turning point came when we were asked to live stream a major cultural festival. The success of that project opened doors to new opportunities and helped us secure the funding we needed to invest in better equipment and expand our team.

Today, Balim Stream is a team of 12 creative professionals, each bringing their unique talents and perspectives to our work. We've documented over 100 cultural events, trained 50+ young people in multimedia skills, and reached audiences in over 40 countries.

But we're not stopping here. Our vision for the future is ambitious. We want to build a state-of-the-art multimedia training center in Wamena, create a comprehensive digital archive of Papuan culture, and establish partnerships with international media organizations to bring Papuan stories to global audiences.

Most importantly, we want to continue being a platform for authentic Papuan voices – a place where our stories can be told with dignity, respect, and pride. Our journey is just beginning, and we're excited to continue flowing with the current of our culture, sharing our stories with the world.`,
      excerpt: 'Reflecting on Balim Stream\'s growth from a small startup to a respected multimedia organization and our vision for the future.',
      imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=400&fit=crop',
      published: true,
      slug: 'balim-stream-journey-vision',
      createdAt: '2023-12-20',
      author: 'Yohanis Balim',
      category: 'updates',
      readTime: 6
    }
  ];

  const displayPosts = filteredPosts.length > 0 ? filteredPosts : defaultBlogPosts.filter(post => {
    if (selectedCategory !== 'all') {
      return post.category === selectedCategory;
    }
    if (searchTerm) {
      return post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
             post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
             post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase());
    }
    return true;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getCategoryColor = (category?: string) => {
    switch (category) {
      case 'culture':
        return 'bg-green-100 text-green-800';
      case 'technology':
        return 'bg-blue-100 text-blue-800';
      case 'events':
        return 'bg-purple-100 text-purple-800';
      case 'stories':
        return 'bg-yellow-100 text-yellow-800';
      case 'updates':
        return 'bg-red-100 text-red-800';
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
              <Link href="/portfolio" className="text-gray-700 hover:text-green-600 transition-colors">Portfolio</Link>
              <Link href="/#testimonials" className="text-gray-700 hover:text-green-600 transition-colors">Testimonials</Link>
              <Link href="/blog" className="text-green-600 font-semibold">BS Update</Link>
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
            <h1 className="text-5xl font-bold mb-6">BS Update</h1>
            <p className="text-xl mb-8 font-light">
              Stories, insights, and updates from the heart of Papua's creative community
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                Subscribe to Updates
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                Featured Stories
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <div className="relative flex-1 sm:flex-initial">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 w-full sm:w-64"
                />
              </div>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full sm:w-48">
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
          </div>
          
          <div className="mt-4 flex items-center justify-between">
            <p className="text-gray-600">
              Showing {displayPosts.length} articles
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
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }, (_, i) => (
                <Card key={i} className="animate-pulse">
                  <div className="h-48 bg-gray-200 rounded-t-lg"></div>
                  <CardHeader>
                    <div className="h-6 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded"></div>
                  </CardHeader>
                  <CardContent>
                    <div className="h-20 bg-gray-200 rounded mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayPosts.map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow cursor-pointer group">
                  <div className="relative h-48 overflow-hidden">
                    {post.imageUrl ? (
                      <img 
                        src={post.imageUrl} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-green-100 to-blue-100"></div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <Badge className={getCategoryColor(post.category)}>
                        {post.category || 'General'}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(post.createdAt)}</span>
                      {post.readTime && (
                        <>
                          <Clock className="w-4 h-4 ml-2" />
                          <span>{post.readTime} min read</span>
                        </>
                      )}
                    </div>
                    <CardTitle className="text-xl line-clamp-2 group-hover:text-green-600 transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {post.excerpt || post.content.substring(0, 150) + '...'}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {post.author && (
                          <>
                            <User className="w-4 h-4 text-gray-500" />
                            <span className="text-sm text-gray-600">{post.author}</span>
                          </>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                          <Heart className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Share2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-full mt-4 group-hover:bg-green-600 group-hover:text-white group-hover:border-green-600"
                      onClick={() => setSelectedPost(post)}
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
          
          {displayPosts.length === 0 && !loading && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
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

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl mb-8">
              Subscribe to BS Update and get the latest stories and insights from Papua delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder-white/70"
              />
              <Button className="bg-white text-green-600 hover:bg-gray-100">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Post Modal */}
      {selectedPost && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPost(null)}
        >
          <div 
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <div className="h-64 relative">
                {selectedPost.imageUrl ? (
                  <img 
                    src={selectedPost.imageUrl} 
                    alt={selectedPost.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-green-100 to-blue-100"></div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-4 right-4 bg-white/80 hover:bg-white"
                  onClick={() => setSelectedPost(null)}
                >
                  ×
                </Button>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <Badge className={getCategoryColor(selectedPost.category)} variant="secondary">
                    {selectedPost.category || 'General'}
                  </Badge>
                  <h1 className="text-3xl font-bold mt-2">{selectedPost.title}</h1>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(selectedPost.createdAt)}</span>
                  </div>
                  {selectedPost.author && (
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{selectedPost.author}</span>
                    </div>
                  )}
                  {selectedPost.readTime && (
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{selectedPost.readTime} min read</span>
                    </div>
                  )}
                </div>
                <div className="prose max-w-none">
                  {selectedPost.content.split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Button variant="outline" size="sm">
                        <Heart className="w-4 h-4 mr-2" />
                        Like
                      </Button>
                      <Button variant="outline" size="sm">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Comment
                      </Button>
                      <Button variant="outline" size="sm">
                        <Share2 className="w-4 h-4 mr-2" />
                        Share
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}