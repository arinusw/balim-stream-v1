'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitted(true);
        setFormData({ 
          name: '', 
          email: '', 
          phone: '', 
          company: '', 
          service: '', 
          budget: '', 
          message: '' 
        });
      } else {
        const data = await response.json();
        setError(data.error || 'Failed to submit form. Please try again.');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    'Live Streaming',
    'Photography',
    'Videography',
    'Event Coverage',
    'Custom Project',
    'Not Sure - Need Consultation'
  ];

  const budgets = [
    'Rp 3-5 Million',
    'Rp 5-8 Million',
    'Rp 8-15 Million',
    'Rp 15+ Million',
    'Custom Budget'
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
              <Link href="/#services" className="text-gray-700 hover:text-green-600 transition-colors">Services</Link>
              <Link href="/portfolio" className="text-gray-700 hover:text-green-600 transition-colors">Portfolio</Link>
              <Link href="/#testimonials" className="text-gray-700 hover:text-green-600 transition-colors">Testimonials</Link>
              <Link href="/blog" className="text-gray-700 hover:text-green-600 transition-colors">BS Update</Link>
              <Link href="/contact" className="text-green-600 font-semibold">Contact</Link>
            </nav>
            <Button className="bg-green-600 hover:bg-green-700">
              Get Quote
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl mb-8 font-light">
              Ready to tell your story? Let's discuss how Balim Stream can help bring your vision to life
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                Start Your Project
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Visit Our Office</h3>
                  <p className="text-gray-600">
                    Jln. SMA Kristen Wamena<br />
                    Papua Pegunungan<br />
                    Indonesia
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                  <p className="text-gray-600">
                    Phone: 0812 4794 2172<br />
                    WhatsApp: 0812 4794 2172<br />
                    Available 9 AM - 6 PM
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                  <p className="text-gray-600">
                    General: balimstream@gmail.com<br />
                    Projects: projects@balimstream.com<br />
                    Support: support@balimstream.com
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                {submitted ? (
                  <Card className="p-8 bg-green-50 border-green-200">
                    <div className="text-center">
                      <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-green-800 mb-2">Message Sent Successfully!</h3>
                      <p className="text-green-600 mb-4">
                        Thank you for contacting Balim Stream. We'll get back to you within 24 hours.
                      </p>
                      <Button 
                        variant="outline" 
                        onClick={() => setSubmitted(false)}
                        className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  </Card>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <Input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <Input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                          Company/Organization
                        </label>
                        <Input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                          Service Interested In *
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        >
                          <option value="">Select a service</option>
                          {services.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                          Estimated Budget
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        >
                          <option value="">Select budget range</option>
                          {budgets.map((budget) => (
                            <option key={budget} value={budget}>
                              {budget}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Project Details *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        placeholder="Tell us about your project, event date, location, and any specific requirements..."
                        className="w-full"
                      />
                    </div>

                    {error && (
                      <div className="flex items-center p-4 bg-red-50 border border-red-200 rounded-lg">
                        <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
                        <span className="text-red-600">{error}</span>
                      </div>
                    )}

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-green-600 hover:bg-green-700 py-3"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>

              {/* Additional Information */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Balim Stream?</h2>
                
                <div className="space-y-6">
                  <Card className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-green-600">Authentic Papuan Perspective</h3>
                    <p className="text-gray-600">
                      We bring genuine understanding and cultural sensitivity to every project, ensuring your story is told with authenticity and respect.
                    </p>
                  </Card>

                  <Card className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-blue-600">Professional Quality</h3>
                    <p className="text-gray-600">
                      International standards with local soul. Our team combines technical expertise with deep cultural knowledge to deliver exceptional results.
                    </p>
                  </Card>

                  <Card className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-purple-600">Quick Response Time</h3>
                    <p className="text-gray-600">
                      We understand the importance of timely communication. Expect a response within 24 hours for all inquiries.
                    </p>
                  </Card>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    Emergency contact available for urgent projects
                  </p>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm" className="hover:bg-green-600 hover:text-white">
                      Facebook
                    </Button>
                    <Button variant="outline" size="sm" className="hover:bg-green-600 hover:text-white">
                      Instagram
                    </Button>
                    <Button variant="outline" size="sm" className="hover:bg-green-600 hover:text-white">
                      YouTube
                    </Button>
                    <Button variant="outline" size="sm" className="hover:bg-green-600 hover:text-white">
                      LinkedIn
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-3">How far in advance should I book your services?</h3>
                <p className="text-gray-600">
                  We recommend booking at least 1-2 weeks in advance for regular projects and 1-2 months for large events or weddings. However, we can accommodate urgent requests when our schedule permits.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-3">Do you work outside of Wamena?</h3>
                <p className="text-gray-600">
                  Yes! We travel throughout Papua and beyond for projects. Travel expenses may apply for locations outside of Wamena, which will be discussed during the consultation.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-3">What is included in your pricing?</h3>
                <p className="text-gray-600">
                  Our pricing includes professional equipment, experienced crew, basic editing, and digital delivery of final content. Additional services like advanced post-production, extra copies, or rush delivery may incur additional costs.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-3">How long does it take to receive the final content?</h3>
                <p className="text-gray-600">
                  Turnaround time varies by project type: Photography (5-7 days), Videography (2-3 weeks), Live Streaming (immediate for live content, edited highlights within 1 week). Rush delivery is available for an additional fee.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-3">Do you require a deposit?</h3>
                <p className="text-gray-600">
                  Yes, we require a 50% deposit to secure your booking date, with the remaining 50% due upon project completion. Payment plans are available for larger projects.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Find Us</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Office Location</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-green-600 mr-3 mt-1" />
                    <div>
                      <p className="font-medium">Balim Stream Headquarters</p>
                      <p className="text-gray-600">
                        Jln. SMA Kristen Wamena<br />
                        Papua Pegunungan 99511<br />
                        Indonesia
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-green-600 mr-3 mt-1" />
                    <div>
                      <p className="font-medium">Contact Numbers</p>
                      <p className="text-gray-600">
                        Phone: +62 812 4794 2172<br />
                        WhatsApp: +62 812 4794 2172
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-green-600 mr-3 mt-1" />
                    <div>
                      <p className="font-medium">Email Addresses</p>
                      <p className="text-gray-600">
                        General: balimstream@gmail.com<br />
                        Projects: projects@balimstream.com
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Getting Here</h3>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    <strong>By Air:</strong> Wamena Airport is the main gateway to Papua's highlands. 
                    Our office is approximately 15 minutes from the airport by car.
                  </p>
                  <p className="text-gray-600">
                    <strong>By Land:</strong> If you're traveling from other parts of Papua, 
                    our office is easily accessible via the main Trans-Papua highway.
                  </p>
                  <p className="text-gray-600">
                    <strong>Local Transport:</strong> Taxis and local transportation are readily available. 
                    Just mention "Balim Stream office near SMA Kristen" to local drivers.
                  </p>
                </div>
                
                <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <strong>Note:</strong> Please schedule an appointment before visiting. 
                    Our team is often on location for projects throughout Papua.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Contact us today to discuss your vision and how we can help bring it to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              <Send className="w-5 h-5 mr-2" />
              Send Message
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
              <Phone className="w-5 h-5 mr-2" />
              Call Us Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}