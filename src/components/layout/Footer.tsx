
import { Link } from "react-router-dom";
import WeatherWidget from "@/components/ui/WeatherWidget";

const Footer = () => {
  return (
    <footer className="bg-stone-100 border-t border-stone-200">
      <div className="max-w-7xl mx-auto py-12 px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h2 className="text-xl font-display font-semibold text-stone-800 mb-4">
              Royal Rider
            </h2>
            <p className="text-sm text-stone-600 max-w-xs">
              Experience the serene beauty of Nubra Valley with luxury accommodations and breathtaking views.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-stone-800 mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm text-stone-600 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-stone-600 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/rooms" className="text-sm text-stone-600 hover:text-primary transition-colors">
                  Rooms
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-stone-600 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-stone-800 mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="text-sm text-stone-600">
                Royal Rider Camp Resort
              </li>
              <li className="text-sm text-stone-600">
                Hunder, Nubra Valley
              </li>
              <li className="text-sm text-stone-600">
                Ladakh, India
              </li>
              <li className="text-sm text-stone-600">
                +91 98765 43210
              </li>
              <li className="text-sm text-stone-600">
                info@royalrider.com
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-stone-800 mb-4">Local Weather</h3>
            <WeatherWidget />
            
            <div className="mt-4">
              <h3 className="text-sm font-medium text-stone-800 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" aria-label="Instagram" className="text-stone-600 hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" aria-label="Facebook" className="text-stone-600 hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" aria-label="Twitter" className="text-stone-600 hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-stone-500">
            © {new Date().getFullYear()} Royal Rider. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-xs text-stone-500 hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-stone-500 hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
