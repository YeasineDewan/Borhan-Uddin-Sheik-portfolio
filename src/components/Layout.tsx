import { ReactNode, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Instagram
} from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleCVDownload = () => {
    // Create a proper download link for the PDF
    const link = document.createElement('a');
    link.href = './CV/MD SIR PROFILE.pdf';
    link.download = 'MD SIR PROFILE.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
      {/* Professional Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg z-50 border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/home" className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#a3ff00] rounded-full flex items-center justify-center">
                <span className="text-slate-900 font-black text-sm sm:text-lg">BS</span>
              </div>
              <span className="text-lg sm:text-xl font-bold text-slate-900 hidden xs:block">Borhan Uddin Sheik</span>
              <span className="text-lg sm:text-xl font-bold text-slate-900 xs:hidden sm:hidden lg:block">Borhan Uddin Sheik</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              <Link to="/home" className="text-slate-600 hover:text-[#a3ff00] font-semibold transition-colors text-sm xl:text-base">Home</Link>
              <Link to="/about" className="text-slate-600 hover:text-[#a3ff00] font-semibold transition-colors text-sm xl:text-base">About</Link>
              <Link to="/experience" className="text-slate-600 hover:text-[#a3ff00] font-semibold transition-colors text-sm xl:text-base">Experience</Link>
              <Link to="/projects" className="text-slate-600 hover:text-[#a3ff00] font-semibold transition-colors text-sm xl:text-base">Projects</Link>
              <Link to="/contact" className="text-slate-600 hover:text-[#a3ff00] font-semibold transition-colors text-sm xl:text-base">Contact</Link>
              <Link to="/privacy-policy" className="text-slate-600 hover:text-[#a3ff00] font-semibold transition-colors text-sm xl:text-base">Privacy</Link>
              <Link to="/terms-of-service" className="text-slate-600 hover:text-[#a3ff00] font-semibold transition-colors text-sm xl:text-base">Terms</Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 sm:p-3 text-slate-600 hover:text-[#a3ff00] transition-colors rounded-lg hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:hidden mt-4 pb-4 border-t border-slate-200 pt-4"
            >
              <div className="flex flex-col gap-3 sm:gap-4">
                <Link 
                  to="/home" 
                  className="text-slate-600 hover:text-[#a3ff00] font-semibold transition-colors py-2 px-3 rounded-lg hover:bg-slate-50 text-base sm:text-lg" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/about" 
                  className="text-slate-600 hover:text-[#a3ff00] font-semibold transition-colors py-2 px-3 rounded-lg hover:bg-slate-50 text-base sm:text-lg" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  to="/experience" 
                  className="text-slate-600 hover:text-[#a3ff00] font-semibold transition-colors py-2 px-3 rounded-lg hover:bg-slate-50 text-base sm:text-lg" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  Experience
                </Link>
                <Link 
                  to="/projects" 
                  className="text-slate-600 hover:text-[#a3ff00] font-semibold transition-colors py-2 px-3 rounded-lg hover:bg-slate-50 text-base sm:text-lg" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </Link>
                <Link 
                  to="/contact" 
                  className="text-slate-600 hover:text-[#a3ff00] font-semibold transition-colors py-2 px-3 rounded-lg hover:bg-slate-50 text-base sm:text-lg" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link 
                  to="/privacy-policy" 
                  className="text-slate-600 hover:text-[#a3ff00] font-semibold transition-colors py-2 px-3 rounded-lg hover:bg-slate-50 text-base sm:text-lg" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  Privacy Policy
                </Link>
                <Link 
                  to="/terms-of-service" 
                  className="text-slate-600 hover:text-[#a3ff00] font-semibold transition-colors py-2 px-3 rounded-lg hover:bg-slate-50 text-base sm:text-lg" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  Terms of Service
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Page Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Professional Footer */}
      <footer className="bg-slate-900 text-white py-12 sm:py-16 mt-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tighter mb-4">Borhan Uddin <span className="text-[#a3ff00]">Sheik</span></h3>
              <p className="text-slate-300 leading-relaxed mb-6 text-sm sm:text-base">
                Managing Director of premier healthcare enterprises in Bangladesh, specializing in medical diagnostics and clinical laboratory sciences.
                A visionary leader committed to advancing healthcare excellence and patient care through innovation and strategic partnerships.
              </p>
              <div className="flex gap-3 sm:gap-4">
                <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-[#a3ff00] hover:text-slate-900 transition-colors">
                  <Linkedin size={16} className="sm:w-5 sm:h-5" />
                </a>
                <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-[#a3ff00] hover:text-slate-900 transition-colors">
                  <Twitter size={16} className="sm:w-5 sm:h-5" />
                </a>
                <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-[#a3ff00] hover:text-slate-900 transition-colors">
                  <Facebook size={16} className="sm:w-5 sm:h-5" />
                </a>
                <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-[#a3ff00] hover:text-slate-900 transition-colors">
                  <Instagram size={16} className="sm:w-5 sm:h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-base sm:text-lg font-bold uppercase tracking-widest mb-4 text-[#a3ff00]">Quick Links</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li><Link to="/home" className="text-slate-300 hover:text-[#a3ff00] transition-colors text-sm sm:text-base">Home</Link></li>
                <li><Link to="/about" className="text-slate-300 hover:text-[#a3ff00] transition-colors text-sm sm:text-base">About</Link></li>
                <li><Link to="/experience" className="text-slate-300 hover:text-[#a3ff00] transition-colors text-sm sm:text-base">Experience</Link></li>
                <li><Link to="/projects" className="text-slate-300 hover:text-[#a3ff00] transition-colors text-sm sm:text-base">Projects</Link></li>
                <li><Link to="/privacy-policy" className="text-slate-300 hover:text-[#a3ff00] transition-colors text-sm sm:text-base">Privacy Policy</Link></li>
                <li><Link to="/terms-of-service" className="text-slate-300 hover:text-[#a3ff00] transition-colors text-sm sm:text-base">Terms of Service</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-base sm:text-lg font-bold uppercase tracking-widest mb-4 text-[#a3ff00]">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone size={14} className="text-[#a3ff00] sm:w-4 sm:h-4" />
                  <span className="text-slate-300 text-sm sm:text-base">+8801712643626</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={14} className="text-[#a3ff00] sm:w-4 sm:h-4" />
                  <span className="text-slate-300 text-sm sm:text-base">borhanbds@yahoo.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={14} className="text-[#a3ff00] sm:w-4 sm:h-4" />
                  <span className="text-slate-300 text-sm sm:text-base">Dhaka, Bangladesh</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-700 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-xs sm:text-sm text-center sm:text-left">© 2024 Borhan Uddin Sheik • All rights reserved</p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 items-center">
              <Link to="/privacy-policy" className="text-slate-400 hover:text-[#a3ff00] transition-colors text-xs sm:text-sm font-semibold">Privacy Policy</Link>
              <Link to="/terms-of-service" className="text-slate-400 hover:text-[#a3ff00] transition-colors text-xs sm:text-sm font-semibold">Terms of Service</Link>
              <button 
                onClick={handleCVDownload}
                className="text-slate-400 hover:text-[#a3ff00] transition-colors text-xs sm:text-sm font-semibold"
              >
                Download CV
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
