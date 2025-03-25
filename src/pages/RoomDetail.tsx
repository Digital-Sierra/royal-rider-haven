
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedSection from "@/components/ui/AnimatedSection";

// Room data
const roomsData = [
  {
    id: "deluxe-tent",
    name: "Deluxe Tent",
    description: "Experience glamping at its finest with our spacious luxury tents that offer all the comfort of a hotel room with the adventure of camping in the beautiful Nubra Valley. Our Deluxe Tents provide a unique opportunity to connect with nature without sacrificing luxury. Each tent features elegant décor inspired by Ladakhi culture, premium bedding, and a private bathroom with hot water.",
    images: [
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80"
    ],
    price: "₹12,000",
    capacity: "2 Adults",
    size: "40 sq.m",
    features: [
      "Spacious interior with wooden flooring",
      "Insulated walls for temperature control",
      "Premium king-sized bed with luxury linens",
      "Private bathroom with hot shower",
      "Wooden deck with mountain views",
      "Seating area with handcrafted furniture",
      "Heating system for cold nights",
      "Charging points for electronic devices",
      "Daily housekeeping service",
      "Complimentary breakfast"
    ],
    amenities: [
      "King-sized bed",
      "Private bathroom",
      "Hot water",
      "Heating",
      "Mountain view",
      "Outdoor seating",
      "Daily housekeeping",
      "Complimentary breakfast",
      "Wi-Fi in common areas",
      "Laundry service (additional charge)"
    ]
  },
  {
    id: "premium-cottage",
    name: "Premium Cottage",
    description: "Our Premium Cottages offer a perfect blend of traditional Ladakhi architecture and modern amenities, providing a cozy retreat after a day of exploring the valley. Built using local materials and featuring authentic Ladakhi design elements, these cottages offer both cultural immersion and modern comfort. The large windows provide stunning panoramic views of the surrounding mountains and valley.",
    images: [
      "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&q=80"
    ],
    price: "₹18,000",
    capacity: "2 Adults, 1 Child",
    size: "60 sq.m",
    features: [
      "Authentic Ladakhi architecture with modern touches",
      "Panoramic windows with valley views",
      "Separate sitting area with comfortable sofa",
      "Luxury bathroom with rainfall shower",
      "Private terrace with lounge chairs",
      "Mini refrigerator stocked with refreshments",
      "Electric kettle with selection of teas and coffee",
      "Room temperature control",
      "Writing desk and chair",
      "Ambient lighting with local crafted lamps"
    ],
    amenities: [
      "King-sized bed",
      "Sitting area with sofa",
      "Luxury bathroom with shower",
      "Heating and cooling system",
      "Valley view",
      "Private terrace",
      "Mini refrigerator",
      "Complimentary breakfast",
      "Evening tea service",
      "Wi-Fi access",
      "Laundry service"
    ]
  },
  {
    id: "royal-suite",
    name: "Royal Suite",
    description: "The epitome of luxury in Nubra Valley, our Royal Suite offers unparalleled comfort with panoramic views, a private jacuzzi, and personalized butler service. This expansive suite combines the best of Ladakhi design with world-class luxury amenities. The separate living room provides ample space to relax, while the private deck offers a perfect setting to enjoy the breathtaking landscape of Nubra Valley.",
    images: [
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80"
    ],
    price: "₹25,000",
    capacity: "2 Adults, 2 Children",
    size: "90 sq.m",
    features: [
      "Premium suite with separate bedroom and living area",
      "Floor-to-ceiling windows with panoramic mountain views",
      "Luxury bathroom with jacuzzi and walk-in shower",
      "Private deck with lounge chairs and dining area",
      "Fully stocked mini bar with premium selections",
      "Smart TV and entertainment system",
      "Dining area with handcrafted table and chairs",
      "Working desk with ergonomic chair",
      "Personalized butler service",
      "Fireplace for cool evenings",
      "Premium toiletries and bath amenities"
    ],
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
      "Complimentary breakfast, lunch, and dinner",
      "Priority booking for excursions",
      "Complimentary airport transfers"
    ]
  },
  {
    id: "family-cottage",
    name: "Family Cottage",
    description: "Perfect for families, our spacious Family Cottage offers two bedrooms and a shared living area, allowing families to enjoy privacy while staying together. Thoughtfully designed with families in mind, this cottage provides ample space for everyone to relax and recharge. The open layout ensures families can spend quality time together, while the separate bedrooms provide privacy when needed.",
    images: [
      "https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80"
    ],
    price: "₹22,000",
    capacity: "4 Adults, 2 Children",
    size: "85 sq.m",
    features: [
      "Two separate bedrooms (one with king bed, one with twin beds)",
      "Common living area with comfortable seating",
      "Family-sized bathroom with shower",
      "Outdoor garden area with seating",
      "Board games and books for family entertainment",
      "Mini refrigerator with family-friendly refreshments",
      "Tea and coffee making facilities",
      "Heating system throughout",
      "Extra storage space for luggage",
      "Child-friendly amenities upon request"
    ],
    amenities: [
      "Two bedrooms",
      "Common living area",
      "Bathroom with shower",
      "Heating system",
      "Garden view",
      "Outdoor seating",
      "Mini refrigerator",
      "Complimentary breakfast",
      "Family activity schedule",
      "Children's meal options",
      "Babysitting service (additional charge)"
    ]
  }
];

const relatedRooms = [
  {
    id: "deluxe-tent",
    name: "Deluxe Tent",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80&w=600",
    price: "₹12,000"
  },
  {
    id: "premium-cottage",
    name: "Premium Cottage",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80&w=600",
    price: "₹18,000"
  },
  {
    id: "royal-suite",
    name: "Royal Suite",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=600",
    price: "₹25,000"
  }
];

const RoomDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [room, setRoom] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [currentImage, setCurrentImage] = useState(0);
  const [filteredRelatedRooms, setFilteredRelatedRooms] = useState<any[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Find the room data based on the id
    const foundRoom = roomsData.find((r) => r.id === id);
    
    if (foundRoom) {
      setRoom(foundRoom);
      
      // Filter out the current room from related rooms
      const related = relatedRooms.filter((r) => r.id !== id).slice(0, 2);
      setFilteredRelatedRooms(related);
    }
    
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!room) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-display font-semibold text-stone-800 mb-4">Room Not Found</h2>
            <p className="text-stone-600 mb-6">The room you are looking for does not exist.</p>
            <Link
              to="/rooms"
              className="px-6 py-3 rounded-md bg-primary text-white font-medium transition-all hover:bg-primary/90"
            >
              View All Rooms
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Room Gallery */}
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection animation="fade-in">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="relative overflow-hidden rounded-lg shadow-lg aspect-[4/3]">
                  <img 
                    src={room.images[currentImage]} 
                    alt={`${room.name} - Image ${currentImage + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  {room.images.map((img: string, index: number) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`relative overflow-hidden rounded-lg border-2 aspect-[4/3] transition-all ${
                        currentImage === index ? "border-primary" : "border-transparent"
                      }`}
                    >
                      <img 
                        src={img} 
                        alt={`${room.name} - Thumbnail ${index + 1}`} 
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="mt-8 md:mt-0">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h1 className="text-3xl md:text-4xl font-display font-semibold text-stone-800">
                      {room.name}
                    </h1>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-medium text-primary">{room.price}</span>
                    <span className="block text-sm text-stone-500">per night</span>
                  </div>
                </div>
                
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
                
                <Link
                  to="/contact"
                  className="w-full block text-center px-6 py-3 rounded-md bg-primary text-white font-medium transition-all hover:bg-primary/90 mb-6"
                >
                  Book Now
                </Link>
                
                <div className="p-4 rounded-lg bg-stone-50 border border-stone-100">
                  <h3 className="font-medium text-stone-800 mb-2">Key Information</h3>
                  <ul className="text-sm space-y-2 text-stone-600">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2 mt-0.5">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Check-in: 2:00 PM, Check-out: 11:00 AM
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2 mt-0.5">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      50% deposit required at booking
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2 mt-0.5">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Free cancellation up to 30 days prior to arrival
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2 mt-0.5">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Prices may vary based on season and availability
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Room Features & Amenities */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <AnimatedSection animation="slide-right">
              <h2 className="text-2xl font-display font-semibold text-stone-800 mb-6">
                Room Features
              </h2>
              <ul className="space-y-3">
                {room.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-3 mt-0.5">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="text-stone-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-left">
              <h2 className="text-2xl font-display font-semibold text-stone-800 mb-6">
                Amenities
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {room.amenities.map((amenity: string, index: number) => (
                  <div key={index} className="flex items-center p-3 rounded-lg bg-white border border-stone-100">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mr-2">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="text-stone-700 text-sm">{amenity}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Policies */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection animation="fade-in">
            <h2 className="text-2xl font-display font-semibold text-stone-800 mb-6">
              Booking and Cancellation Policy
            </h2>
            <div className="p-6 rounded-lg border border-stone-100 shadow-sm">
              <dl className="grid md:grid-cols-2 gap-6">
                <div>
                  <dt className="font-medium text-stone-800 mb-2">Booking</dt>
                  <dd className="text-stone-600">
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        50% deposit required at the time of booking
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Remaining payment due 30 days prior to arrival
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Government-issued ID required at check-in
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Credit card details required to secure booking
                      </li>
                    </ul>
                  </dd>
                </div>
                
                <div>
                  <dt className="font-medium text-stone-800 mb-2">Cancellation</dt>
                  <dd className="text-stone-600">
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Free cancellation up to 30 days before arrival
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        50% refund for cancellations 15-30 days before arrival
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        No refund for cancellations less than 15 days before arrival
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Changes subject to availability and rate differences
                      </li>
                    </ul>
                  </dd>
                </div>
              </dl>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Related Rooms */}
      {filteredRelatedRooms.length > 0 && (
        <section className="py-16 bg-stone-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <AnimatedSection animation="fade-in">
              <h2 className="text-2xl font-display font-semibold text-stone-800 mb-8">
                You May Also Like
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {filteredRelatedRooms.map((relatedRoom) => (
                  <div key={relatedRoom.id} className="group">
                    <Link to={`/rooms/${relatedRoom.id}`} className="block">
                      <div className="bg-white rounded-xl overflow-hidden shadow-sm transition-all hover:shadow-md">
                        <div className="aspect-[3/2] overflow-hidden">
                          <img
                            src={relatedRoom.image}
                            alt={relatedRoom.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex justify-between items-center">
                            <h3 className="text-xl font-display font-medium text-stone-800">
                              {relatedRoom.name}
                            </h3>
                            <span className="text-primary font-medium">
                              {relatedRoom.price}<span className="text-xs text-stone-500">/night</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <Link
                  to="/rooms"
                  className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors"
                >
                  View All Rooms
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}
      
      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection animation="fade-in">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-display font-semibold text-stone-800 mb-4">
                Ready to Experience {room.name}?
              </h2>
              <p className="text-stone-600 max-w-2xl mx-auto mb-8">
                Contact us to check availability and book your stay at Royal Rider.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-3 rounded-md bg-primary text-white font-medium transition-all hover:bg-primary/90"
                >
                  Book Now
                </Link>
                <Link
                  to="/rooms"
                  className="px-8 py-3 rounded-md bg-stone-100 text-stone-800 font-medium transition-all hover:bg-stone-200"
                >
                  Explore Other Rooms
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default RoomDetail;
