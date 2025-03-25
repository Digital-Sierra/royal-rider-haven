
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:py-40 bg-stone-900">
        <div 
          className="absolute inset-0 bg-center bg-cover opacity-30"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/50 to-stone-900" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection animation="slide-up">
            <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium tracking-wide mb-4">
              OUR STORY
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-white mb-6">
              About Royal Rider
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto">
              Discover our journey of creating an exceptional retreat in the heart of Nubra Valley
            </p>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-right">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80" 
                  alt="Royal Rider Camp Resort" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-6 -right-6 hidden md:block">
                  <div className="bg-white p-4 rounded-lg shadow-lg">
                    <p className="text-stone-800 font-medium">Established in 2015</p>
                    <p className="text-stone-600 text-sm">Serving guests for over 8 years</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-left">
              <h2 className="text-3xl font-display font-semibold text-stone-800 mb-6">
                Our Journey
              </h2>
              <p className="text-stone-600 mb-4">
                Royal Rider was founded with a vision to create a sanctuary where travelers could experience the raw beauty of Nubra Valley without compromising on comfort and luxury.
              </p>
              <p className="text-stone-600 mb-4">
                What started as a small camp with just three tents has now evolved into a premier destination that perfectly balances luxury with sustainability and cultural authenticity.
              </p>
              <p className="text-stone-600">
                Our commitment to providing exceptional service while preserving the natural environment and supporting local communities has earned us recognition as one of the finest retreats in Ladakh.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Location Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-stone-800 mb-4">
              Our Location
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Nestled in the magical landscape of Hunder, Nubra Valley
            </p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-right" className="order-2 md:order-1">
              <h3 className="text-2xl font-display font-semibold text-stone-800 mb-4">
                Hunder, Nubra Valley
              </h3>
              <p className="text-stone-600 mb-4">
                Located in the picturesque Hunder village, Royal Rider offers breathtaking views of the sand dunes, Shyok River, and the majestic Karakoram Range.
              </p>
              <p className="text-stone-600 mb-4">
                Just a short distance from the famous double-humped Bactrian camels and ancient Diskit Monastery, our location provides easy access to the region's most iconic attractions.
              </p>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-primary/10 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-stone-800">Address</h4>
                    <p className="text-stone-600">Royal Rider Camp Resort, Hunder Village, Nubra Valley, Ladakh</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-primary/10 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="m12 19-7-7 7-7"></path>
                      <path d="M19 12H5"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-stone-800">Distance from Leh</h4>
                    <p className="text-stone-600">Approximately 120 km (4-5 hours drive)</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 p-2 bg-primary/10 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-stone-800">Best Time to Visit</h4>
                    <p className="text-stone-600">May to September</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-left" className="order-1 md:order-2">
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13038.650404729956!2d77.4534583871582!3d34.59901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38fdf3745bfffad9%3A0x5a94f3dc43e9fbf4!2sHunder%2C%20Jammu%20and%20Kashmir%20194401!5e0!3m2!1sen!2sin!4v1685451296352!5m2!1sen!2sin" 
                  width="100%" 
                  height="450" 
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
      
      {/* Our Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-stone-800 mb-4">
              Our Values
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              The principles that guide everything we do at Royal Rider
            </p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection animation="slide-up" delay={100}>
              <div className="p-6 rounded-xl border border-stone-100 shadow-sm h-full">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-primary">
                    <path d="M23 6H1v12h22zm-4-9H5v3h14zM5 21h14v3H5z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-display font-medium text-stone-800 mb-2">
                  Authentic Luxury
                </h3>
                <p className="text-stone-600">
                  We believe luxury should be authentic and meaningful. Our accommodations blend premium comfort with genuine local experiences.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-up" delay={200}>
              <div className="p-6 rounded-xl border border-stone-100 shadow-sm h-full">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-primary">
                    <path d="M2 12a10 10 0 1 0 20 0 10 10 0 1 0-20 0"></path>
                    <path d="M12 2v20"></path>
                    <path d="M2 12h20"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-display font-medium text-stone-800 mb-2">
                  Environmental Stewardship
                </h3>
                <p className="text-stone-600">
                  We are committed to preserving the pristine beauty of Nubra Valley through sustainable practices and minimal environmental impact.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-up" delay={300}>
              <div className="p-6 rounded-xl border border-stone-100 shadow-sm h-full">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-primary">
                    <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"></path>
                    <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"></path>
                    <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"></path>
                    <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.5-5.5-1.5L3 18"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-display font-medium text-stone-800 mb-2">
                  Community Support
                </h3>
                <p className="text-stone-600">
                  We actively engage with and support the local community through employment opportunities and cultural preservation initiatives.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-stone-800 mb-4">
              Meet Our Team
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              The dedicated people behind Royal Rider's exceptional service
            </p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection animation="slide-up" delay={100}>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600&h=600" 
                  alt="Sonam Wangchuk" 
                  className="w-full aspect-square object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-display font-medium text-stone-800 mb-1">
                    Sonam Wangchuk
                  </h3>
                  <p className="text-primary mb-3">Founder & Director</p>
                  <p className="text-stone-600 text-sm">
                    Born and raised in Ladakh, Sonam's vision was to create a luxury retreat that showcases the region's natural beauty and cultural heritage.
                  </p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-up" delay={200}>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600&h=600" 
                  alt="Pema Dolkar" 
                  className="w-full aspect-square object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-display font-medium text-stone-800 mb-1">
                    Pema Dolkar
                  </h3>
                  <p className="text-primary mb-3">Head of Operations</p>
                  <p className="text-stone-600 text-sm">
                    With over 15 years in hospitality, Pema ensures that every aspect of the guest experience exceeds expectations.
                  </p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-up" delay={300}>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=600&h=600" 
                  alt="Tenzin Norbu" 
                  className="w-full aspect-square object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-display font-medium text-stone-800 mb-1">
                    Tenzin Norbu
                  </h3>
                  <p className="text-primary mb-3">Head Chef</p>
                  <p className="text-stone-600 text-sm">
                    Tenzin brings together traditional Ladakhi flavors and international cuisine to create unforgettable dining experiences.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative py-24 bg-stone-900 overflow-hidden">
        <div 
          className="absolute inset-0 bg-center bg-cover opacity-30"
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&q=80)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/50 to-stone-900" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection animation="slide-up">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-white mb-6">
              Come Experience Royal Rider
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Visit us in Nubra Valley and discover why our guests keep coming back year after year.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 rounded-md bg-primary text-white font-medium transition-all hover:bg-primary/90"
            >
              Contact Us
            </a>
          </AnimatedSection>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
