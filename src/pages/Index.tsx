
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { cn } from "@/lib/utils";

// Replace with your own images or use these placeholder images
const heroImages = [
  "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80"
];

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-primary">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    ),
    title: "Prime Location",
    description: "Nestled in the heart of Nubra Valley, with stunning views of the mountains and sand dunes."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-primary">
        <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
        <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path>
        <path d="M12 3v6"></path>
      </svg>
    ),
    title: "Luxury Amenities",
    description: "Enjoy premium amenities including fine dining, spa services, and guided local excursions."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-primary">
        <path d="M19 7v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7"></path>
        <rect width="20" height="5" x="2" y="2" rx="2"></rect>
        <circle cx="12" cy="14" r="4"></circle>
        <path d="M12 18v2"></path>
      </svg>
    ),
    title: "Cultural Experience",
    description: "Immerse yourself in the rich local culture with traditional music, food, and activities."
  }
];

const roomHighlights = [
  {
    id: "deluxe-tent",
    name: "Deluxe Tent",
    description: "Spacious luxury tent with mountain views",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80&w=600",
    price: "₹12,000",
    amenities: ["King Bed", "Private Bathroom", "Heating", "Mountain View"]
  },
  {
    id: "premium-cottage",
    name: "Premium Cottage",
    description: "Private cottage with panoramic views of the valley",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80&w=600",
    price: "₹18,000",
    amenities: ["King Bed", "Sitting Area", "Luxury Bathroom", "Valley View"]
  },
  {
    id: "royal-suite",
    name: "Royal Suite",
    description: "Our most luxurious accommodation with all amenities",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=600",
    price: "₹25,000",
    amenities: ["King Bed", "Living Room", "Jacuzzi", "Panoramic View"]
  }
];

const testimonials = [
  {
    text: "Our stay at Royal Rider was absolutely magical. The staff went above and beyond to make our experience unforgettable.",
    author: "Sarah Johnson",
    role: "Traveler from London"
  },
  {
    text: "The perfect blend of luxury and nature. Waking up to the view of the Nubra Valley was breathtaking.",
    author: "Michael Chen",
    role: "Adventure Photographer"
  },
  {
    text: "I've stayed at many luxury resorts, but Royal Rider offers something truly special with its authentic local experience.",
    author: "Priya Sharma",
    role: "Travel Blogger"
  }
];

const Index = () => {
  const [currentHeroImage, setCurrentHeroImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 w-full h-full bg-center bg-cover transition-opacity duration-2000",
              index === currentHeroImage ? "opacity-100" : "opacity-0"
            )}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        <div className="absolute inset-0 bg-black/30" />
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <AnimatedSection animation="slide-down" className="mb-4">
            <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium tracking-wide mb-4">
              WELCOME TO NUBRA VALLEY
            </span>
          </AnimatedSection>
          
          <AnimatedSection animation="slide-up" className="mb-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-semibold text-white max-w-4xl leading-tight">
              Experience Luxury in the Heart of Ladakh
            </h1>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in" delay={300} className="mb-8">
            <p className="text-lg md:text-xl text-white/90 max-w-2xl">
              Royal Rider offers unparalleled luxury and comfort in the serene Nubra Valley
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in" delay={600}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/rooms"
                className="px-6 py-3 rounded-md bg-primary text-white font-medium transition-all hover:bg-primary/90"
              >
                Explore Rooms
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 rounded-md bg-white/10 backdrop-blur-sm text-white border border-white/30 font-medium transition-all hover:bg-white/20"
              >
                Book Now
              </Link>
            </div>
          </AnimatedSection>
        </div>
        
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHeroImage(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all",
                index === currentHeroImage ? "bg-white w-8" : "bg-white/50"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
      
      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-stone-800 mb-4">
              Experience the Royal Rider Difference
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Discover why our guests choose Royal Rider for their Ladakh experience
            </p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection
                key={feature.title}
                animation="slide-up"
                delay={index * 100}
              >
                <div className="p-6 rounded-xl border border-stone-100 shadow-sm transition-all hover:shadow-md hover:border-stone-200">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-display font-medium text-stone-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-stone-600">
                    {feature.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Room Highlights Section */}
      <section className="section-padding bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-stone-800 mb-4">
              Our Luxury Accommodations
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Each room is thoughtfully designed to provide comfort while connecting you with the natural beauty of Nubra
            </p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-8">
            {roomHighlights.map((room, index) => (
              <AnimatedSection
                key={room.id}
                animation="slide-up"
                delay={index * 100}
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-sm transition-all hover:shadow-md">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-display font-medium text-stone-800">
                        {room.name}
                      </h3>
                      <span className="text-primary font-medium">
                        {room.price}<span className="text-xs text-stone-500">/night</span>
                      </span>
                    </div>
                    <p className="text-stone-600 mb-4">
                      {room.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {room.amenities.map((amenity) => (
                        <span
                          key={amenity}
                          className="text-xs px-2 py-1 rounded-full bg-stone-100 text-stone-600"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                    <Link
                      to={`/rooms/${room.id}`}
                      className="block w-full py-2 text-center rounded-md bg-stone-100 text-stone-800 hover:bg-stone-200 transition-colors font-medium"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          
          <AnimatedSection animation="fade-in" className="mt-12 text-center">
            <Link
              to="/rooms"
              className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors"
            >
              View All Accommodations
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-stone-800 mb-4">
              Guest Experiences
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Hear what our guests have to say about their stay at Royal Rider
            </p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection
                key={index}
                animation="slide-up"
                delay={index * 100}
              >
                <div className="p-8 rounded-xl border border-stone-100 shadow-sm transition-all hover:shadow-md hover:border-stone-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-primary/30 mb-4">
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                  </svg>
                  <p className="text-stone-700 mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <h4 className="font-medium text-stone-800">
                      {testimonial.author}
                    </h4>
                    <p className="text-sm text-stone-500">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative py-24 bg-stone-900 overflow-hidden">
        <div 
          className="absolute inset-0 bg-center bg-cover opacity-30"
          style={{ backgroundImage: `url(${heroImages[2]})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/50 to-stone-900" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection animation="slide-up">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-white mb-6">
              Begin Your Nubra Valley Adventure
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Book your stay at Royal Rider and experience the perfect blend of luxury and nature in one of the world's most beautiful locations.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 rounded-md bg-primary text-white font-medium transition-all hover:bg-primary/90"
            >
              Book Your Stay
            </Link>
          </AnimatedSection>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
