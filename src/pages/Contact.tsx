
import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    adults: "2",
    children: "0",
    roomType: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Booking Request Received",
        description: "We'll get back to you within 24 hours to confirm your reservation.",
      });
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        checkIn: "",
        checkOut: "",
        adults: "2",
        children: "0",
        roomType: "",
        message: ""
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:py-40 bg-stone-900">
        <div 
          className="absolute inset-0 bg-center bg-cover opacity-30"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&q=80)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/50 to-stone-900" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection animation="slide-up">
            <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium tracking-wide mb-4">
              GET IN TOUCH
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-white mb-6">
              Contact & Booking
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto">
              Reach out to us to book your stay or learn more about Royal Rider
            </p>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <AnimatedSection animation="slide-right">
              <h2 className="text-3xl font-display font-semibold text-stone-800 mb-8">
                Book Your Stay
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">Full Name*</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border border-stone-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">Email Address*</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border border-stone-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-1">Phone Number*</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-stone-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="checkIn" className="block text-sm font-medium text-stone-700 mb-1">Check-in Date*</label>
                    <input
                      id="checkIn"
                      name="checkIn"
                      type="date"
                      required
                      value={formData.checkIn}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border border-stone-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="checkOut" className="block text-sm font-medium text-stone-700 mb-1">Check-out Date*</label>
                    <input
                      id="checkOut"
                      name="checkOut"
                      type="date"
                      required
                      value={formData.checkOut}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border border-stone-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    />
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="adults" className="block text-sm font-medium text-stone-700 mb-1">Adults*</label>
                    <select
                      id="adults"
                      name="adults"
                      required
                      value={formData.adults}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border border-stone-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    >
                      <option value="1">1 Adult</option>
                      <option value="2">2 Adults</option>
                      <option value="3">3 Adults</option>
                      <option value="4">4 Adults</option>
                      <option value="5">5 Adults</option>
                      <option value="6">6 Adults</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="children" className="block text-sm font-medium text-stone-700 mb-1">Children</label>
                    <select
                      id="children"
                      name="children"
                      value={formData.children}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-md border border-stone-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    >
                      <option value="0">0 Children</option>
                      <option value="1">1 Child</option>
                      <option value="2">2 Children</option>
                      <option value="3">3 Children</option>
                      <option value="4">4 Children</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="roomType" className="block text-sm font-medium text-stone-700 mb-1">Accommodation Type*</label>
                  <select
                    id="roomType"
                    name="roomType"
                    required
                    value={formData.roomType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-stone-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                  >
                    <option value="" disabled>Select accommodation type</option>
                    <option value="deluxe-tent">Deluxe Tent</option>
                    <option value="premium-cottage">Premium Cottage</option>
                    <option value="royal-suite">Royal Suite</option>
                    <option value="family-cottage">Family Cottage</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1">Special Requests</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-stone-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    placeholder="Any special requests or questions?"
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 rounded-md bg-primary text-white font-medium transition-all hover:bg-primary/90 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      "Book Now"
                    )}
                  </button>
                </div>
              </form>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-left">
              <h2 className="text-3xl font-display font-semibold text-stone-800 mb-8">
                Contact Information
              </h2>
              
              <div className="space-y-8 mb-8">
                <div className="flex items-start">
                  <div className="p-2 bg-primary/10 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-stone-800 mb-1">Address</h3>
                    <p className="text-stone-600">
                      Royal Rider Camp Resort<br />
                      Hunder Village, Nubra Valley<br />
                      Ladakh - 194401, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-2 bg-primary/10 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-stone-800 mb-1">Phone</h3>
                    <p className="text-stone-600">
                      Reservations: +91 98765 43210<br />
                      General Inquiries: +91 98765 43211
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-2 bg-primary/10 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-stone-800 mb-1">Email</h3>
                    <p className="text-stone-600">
                      Reservations: bookings@royalrider.com<br />
                      General Inquiries: info@royalrider.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-2 bg-primary/10 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-stone-800 mb-1">Hours</h3>
                    <p className="text-stone-600">
                      Reservations Office: 9:00 AM - 6:00 PM (IST)<br />
                      Front Desk: 24 hours
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13038.650404729956!2d77.4534583871582!3d34.59901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38fdf3745bfffad9%3A0x5a94f3dc43e9fbf4!2sHunder%2C%20Jammu%20and%20Kashmir%20194401!5e0!3m2!1sen!2sin!4v1685451296352!5m2!1sen!2sin" 
                  width="100%" 
                  height="300" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Map of Royal Rider location"
                ></iframe>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-stone-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Find answers to common questions about staying at Royal Rider
            </p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 gap-6">
            <AnimatedSection animation="slide-up" delay={100}>
              <div className="p-6 rounded-xl border border-stone-100 bg-white shadow-sm">
                <h3 className="text-lg font-medium text-stone-800 mb-2">
                  How do I reach Royal Rider from Leh?
                </h3>
                <p className="text-stone-600">
                  Royal Rider is located in Hunder, approximately 120 km from Leh. The journey takes 4-5 hours by road via Khardung La pass. We can arrange transportation from Leh for an additional fee, or you can hire a taxi.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-up" delay={200}>
              <div className="p-6 rounded-xl border border-stone-100 bg-white shadow-sm">
                <h3 className="text-lg font-medium text-stone-800 mb-2">
                  What is the best time to visit Nubra Valley?
                </h3>
                <p className="text-stone-600">
                  The best time to visit is from May to September when the weather is pleasant. July and August offer the warmest temperatures. The camp remains closed from November to April due to harsh winter conditions.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-up" delay={300}>
              <div className="p-6 rounded-xl border border-stone-100 bg-white shadow-sm">
                <h3 className="text-lg font-medium text-stone-800 mb-2">
                  Do I need a permit to visit Nubra Valley?
                </h3>
                <p className="text-stone-600">
                  Yes, all tourists need an Inner Line Permit to visit Nubra Valley. We can assist in arranging these permits for our guests at an additional charge, or you can obtain them in Leh before your journey.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-up" delay={400}>
              <div className="p-6 rounded-xl border border-stone-100 bg-white shadow-sm">
                <h3 className="text-lg font-medium text-stone-800 mb-2">
                  What amenities are included in the room rates?
                </h3>
                <p className="text-stone-600">
                  All room rates include breakfast. Royal Suite guests receive all meals included. All accommodations include access to common areas, WiFi in designated zones, and basic amenities. Additional services are available at extra cost.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-up" delay={500}>
              <div className="p-6 rounded-xl border border-stone-100 bg-white shadow-sm">
                <h3 className="text-lg font-medium text-stone-800 mb-2">
                  Is Royal Rider suitable for families with children?
                </h3>
                <p className="text-stone-600">
                  Yes, we welcome families with children of all ages. Our Family Cottage is specifically designed for families, and we offer special activities for children. We can also arrange for cribs and extra beds upon request.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-up" delay={600}>
              <div className="p-6 rounded-xl border border-stone-100 bg-white shadow-sm">
                <h3 className="text-lg font-medium text-stone-800 mb-2">
                  What activities are available at or near Royal Rider?
                </h3>
                <p className="text-stone-600">
                  We offer various activities including camel safaris on the sand dunes, guided hikes, cultural performances, star gazing, and excursions to nearby monasteries and villages. Our reception can help you book these activities.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
