import { Star, Mail, Instagram } from "lucide-react";
import logo from "@/assets/stephenbayliss-astrology-logo1.webp";

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand Section */}
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="Stephen Bayliss Astrology" 
              className="h-16 w-auto"
            />
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-400">© 2025 StephenBaylissAstrology - All Rights Reserved</p>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-orange-500" />
              <a 
                href="mailto:info@stephenbaylissastrology.com.au" 
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                info@stephenbaylissastrology.com.au
              </a>
            </div>
            <div className="flex items-center gap-3">
              <a 
                href="https://www.instagram.com/stephenbaylissastrology" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
