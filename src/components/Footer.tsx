import { Separator } from "@/components/ui/separator";
import { Star, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand Section */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center">
              <Star className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-secondary">Stephen Bayliss</h3>
              <p className="text-secondary/80">Astrology</p>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-foreground/80">© 2022 StephenBaylissAstrology - All Rights Reserved</p>
          </div>

          {/* Contact */}
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-secondary" />
            <a 
              href="mailto:astrologyofthetimes@gmail.com" 
              className="text-foreground/80 hover:text-secondary transition-colors italic"
            >
              astrologyofthetimes@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;