
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";

const rooms = [
  {
    id: "deluxe-tent",
    name: "Deluxe Tent",
    description: "Experience glamping at its finest with our spacious luxury tents that offer all the comfort of a hotel room with the adventure of camping in the beautiful Nubra Valley.",
    shortDescription: "Spacious luxury tent with mountain views",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80&w=600",
    price: "₹12,000",
    capacity: "2 Adults",
    size: "40 sq.m",
    amenities: [
      "King-sized bed",
      "Private bathroom with hot water",
      "Heating system",
      "Mountain view",
      "Outdoor seating area",
      "Daily housekeeping",
      "Complimentary breakfast"
    ]
  },
  {
    id: "premium-cottage",
    name: "Premium Cottage",
    description: "Our Premium Cottages offer a perfect blend of traditional Ladakhi architecture and modern amenities, providing a cozy retreat after a day of exploring the valley.",
    shortDescription: "Private cottage with panoramic views of the valley",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80&w=600",
    price: "₹18,000",
    capacity: "2 Adults, 1 Child",
    size: "60 sq.m",
    amenities: [
      "King-sized bed",
      "Sitting area with sofa",
      "Luxury bathroom with shower",
      "Heating and cooling system",
      "Valley view",
      "Private terrace",
      "Mini refrigerator",
      "Complimentary breakfast and evening tea"
    ]
  },
  {
    id: "royal-suite",
    name: "Royal Suite",
    description: "The epitome of luxury in Nubra Valley, our Royal Suite offers unparalleled comfort with panoramic views, a private jacuzzi, and personalized butler service.",
    shortDescription: "Our most luxurious accommodation with all amenities",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=600",
    price: "₹25,000",
    capacity: "2 Adults, 2 Children",
    size: "90 sq.m",
    amenities: [
      "King-sized bed with premium linens",
      "Separate living room",
      "Luxury bathroom with jacuzzi",
      "Panoramic mountain view",
      "Private deck with lounge chairs",
      "Dining area",
      "Mini bar and refrigerator",
      "Smart TV and entertainment system",
      "24-hour butler service",
      "Complimentary breakfast, lunch, and dinner"
    ]
  },
  {
    id: "family-cottage",
    name: "Family Cottage",
    description: "Perfect for families, our spacious Family Cottage offers two bedrooms and a shared living area, allowing families to enjoy privacy while staying together.",
    shortDescription: "Spacious two-bedroom cottage ideal for families",
    image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&q=80&w=600",
    price: "₹22,000",
    capacity: "4 Adults, 2 Children",
    size: "85 sq.m",
    amenities: [
      "Two bedrooms (one with king bed, one with twin beds)",
      "Common living area",
      "Bathroom with shower",
      "Heating system",
      "Garden view",
      "Outdoor seating",
      "Mini refrigerator",
      "Complimentary breakfast"
    ]
  }
];

const Rooms = () => {
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
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/50 to-stone-900" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection animation="slide-up">
            <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium tracking-wide mb-4">
              ACCOMMODATIONS
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-white mb-6">
              Our Luxury Rooms
            </h1>
            <p className="text-white/80 max-w-2xl mx-auto">
              Discover the perfect blend of comfort and nature in our thoughtfully designed accommodations
            </p>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Rooms List Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-stone-800 mb-4">
              Choose Your Perfect Stay
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Each accommodation at Royal Rider is designed to provide maximum comfort while connecting you with the natural beauty of Nubra Valley
            </p>
          </AnimatedSection>
          
          <div className="space-y-16">
            {rooms.map((room, index) => (
              <AnimatedSection key={room.id} animation="slide-up" className="group">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <div className="relative overflow-hidden rounded-lg shadow-lg">
                      <img 
                        src={room.image} 
                        alt={room.name} 
                        className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                        <span className="text-primary font-medium">{room.price}</span>
                        <span className="text-xs text-stone-500">/night</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-display font-semibold text-stone-800 mb-2">
                      {room.name}
                    </h3>
                    <p className="text-stone-600 mb-6">
                      {room.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2">
                          <path d="M20 10V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3"></path>
                          <path d="M4 19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-9a2 2 0 0 0-4 0v2h-8V8a2 2 0 0 0-4 0z"></path>
                        </svg>
                        <span className="text-stone-700">{room.capacity}</span>
                      </div>
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2">
                          <rect width="7" height="7" x="14" y="3" rx="1"></rect>
                          <path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1"></path>
                        </svg>
                        <span className="text-stone-700">{room.size}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {room.amenities.slice(0, 5).map((amenity) => (
                        <span
                          key={amenity}
                          className="text-xs px-2 py-1 rounded-full bg-stone-100 text-stone-600"
                        >
                          {amenity}
                        </span>
                      ))}
                      {room.amenities.length > 5 && (
                        <span className="text-xs px-2 py-1 rounded-full bg-stone-100 text-primary">
                          +{room.amenities.length - 5} more
                        </span>
                      )}
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        to={`/rooms/${room.id}`}
                        className="px-6 py-3 rounded-md bg-primary text-white font-medium transition-all hover:bg-primary/90 text-center"
                      >
                        View Details
                      </Link>
                      <Link
                        to="/contact"
                        className="px-6 py-3 rounded-md bg-stone-100 text-stone-800 font-medium transition-all hover:bg-stone-200 text-center"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Amenities Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-stone-800 mb-4">
              Resort Amenities
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Enjoy these additional facilities and services available to all our guests
            </p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection animation="slide-up" delay={100}>
              <div className="p-6 rounded-xl border border-stone-100 bg-white shadow-sm h-full">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-primary">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                    <line x1="9" x2="9.01" y1="9" y2="9"></line>
                    <line x1="15" x2="15.01" y1="9" y2="9"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-display font-medium text-stone-800 mb-2">
                  Restaurant & Dining
                </h3>
                <p className="text-stone-600">
                  Enjoy authentic Ladakhi cuisine, Indian specialties, and international dishes prepared with fresh, locally-sourced ingredients.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-up" delay={200}>
              <div className="p-6 rounded-xl border border-stone-100 bg-white shadow-sm h-full">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-primary">
                    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
                    <circle cx="12" cy="13" r="3"></circle>
                  </svg>
                </div>
                <h3 className="text-xl font-display font-medium text-stone-800 mb-2">
                  Photography Tours
                </h3>
                <p className="text-stone-600">
                  Capture the breathtaking landscapes of Nubra Valley with our guided photography tours, perfect for both amateurs and professionals.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-up" delay={300}>
              <div className="p-6 rounded-xl border border-stone-100 bg-white shadow-sm h-full">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-primary">
                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-display font-medium text-stone-800 mb-2">
                  Wellness Center
                </h3>
                <p className="text-stone-600">
                  Relax and rejuvenate with traditional Ladakhi and modern treatments at our wellness center, including massage and yoga sessions.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-up" delay={400}>
              <div className="p-6 rounded-xl border border-stone-100 bg-white shadow-sm h-full">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-primary">
                    <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"></path>
                    <path d="M16.5 9.4 7.55 4.24"></path>
                    <path d="M12 12v8"></path>
                    <path d="M21 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"></path>
                    <path d="m19 14-1.5-1.5"></path>
                    <path d="m19 18-1.5 1.5"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-display font-medium text-stone-800 mb-2">
                  Adventure Activities
                </h3>
                <p className="text-stone-600">
                  Experience the thrill of camel safaris, mountain biking, and guided hikes through the scenic landscapes of Nubra Valley.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-up" delay={500}>
              <div className="p-6 rounded-xl border border-stone-100 bg-white shadow-sm h-full">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-primary">
                    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                    <line x1="4" x2="4" y1="22" y2="15"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-display font-medium text-stone-800 mb-2">
                  Cultural Performances
                </h3>
                <p className="text-stone-600">
                  Immerse yourself in local culture with traditional Ladakhi music and dance performances organized regularly at the resort.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-up" delay={600}>
              <div className="p-6 rounded-xl border border-stone-100 bg-white shadow-sm h-full">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-primary">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                    <path d="M2 12h20"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-display font-medium text-stone-800 mb-2">
                  Excursion Services
                </h3>
                <p className="text-stone-600">
                  Explore Nubra Valley's attractions with our curated excursions to sand dunes, monasteries, hot springs, and more.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Booking Policies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-stone-800 mb-4">
              Booking Information
            </h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              Important details about our booking policies and procedures
            </p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 gap-12">
            <AnimatedSection animation="slide-right">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-display font-medium text-stone-800 mb-2">
                    Check-in & Check-out
                  </h3>
                  <p className="text-stone-600">
                    Check-in time: 2:00 PM<br />
                    Check-out time: 11:00 AM
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-display font-medium text-stone-800 mb-2">
                    Cancellation Policy
                  </h3>
                  <p className="text-stone-600">
                    • Free cancellation up to 30 days before arrival<br />
                    • 50% refund for cancellations between 15-30 days before arrival<br />
                    • No refund for cancellations less than 15 days before arrival
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-display font-medium text-stone-800 mb-2">
                    Payment
                  </h3>
                  <p className="text-stone-600">
                    • 50% deposit required at the time of booking<br />
                    • Remaining balance due 30 days before arrival<br />
                    • We accept credit cards, bank transfers, and PayTM
                  </p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-left">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-display font-medium text-stone-800 mb-2">
                    Children Policy
                  </h3>
                  <p className="text-stone-600">
                    • Children under 5 years stay free when using existing bedding<br />
                    • Children 5-12 years are charged 50% of the adult rate<br />
                    • Children above 12 years are considered adults
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-display font-medium text-stone-800 mb-2">
                    Additional Information
                  </h3>
                  <p className="text-stone-600">
                    • All rates include breakfast<br />
                    • Extra bed charges: ₹2,000 per night<br />
                    • Pets are not allowed<br />
                    • Inner Line Permit required for visiting Nubra Valley
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-display font-medium text-stone-800 mb-2">
                    Season Information
                  </h3>
                  <p className="text-stone-600">
                    • High Season: June to September<br />
                    • Shoulder Season: May and October<br />
                    • Resort remains closed from November to April due to weather conditions
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
          style={{ backgroundImage: `url(https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/50 to-stone-900" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection animation="slide-up">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-white mb-6">
              Ready to Book Your Stay?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Contact us to check availability and make a reservation for your perfect Nubra Valley retreat.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 rounded-md bg-primary text-white font-medium transition-all hover:bg-primary/90"
            >
              Book Now
            </Link>
          </AnimatedSection>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Rooms;
