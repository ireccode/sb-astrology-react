import { Button } from "@/components/ui/button";
import { Star, Sparkles } from "lucide-react";
import { useState } from "react";
import ContactModal from "./ContactModal";
import heroBg from "@/assets/sb-astrology-bg-hero.webp";
import logo from "@/assets/stephenbayliss-astrology-logo1.webp";

const Hero = () => {
  const [showContact, setShowContact] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section 
        id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Header with logo and book button */}
        <div className="absolute top-8 left-0 right-0 z-20">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="flex items-center">
              <img 
                src={logo} 
                alt="Stephen Bayliss Astrology" 
                className="h-16 w-auto"
              />
            </div>
            <div className="flex-1 text-center">
              <h1 className="text-2xl font-bold text-cyan-300">Stephen Bayliss Astrology</h1>
            </div>
            <Button
              onClick={() => setShowContact(true)}
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 font-semibold"
            >
              Book Your Reading
            </Button>
          </div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-20 text-center flex-1 flex flex-col justify-center">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Main heading */}
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-6xl font-bold text-cyan-300 leading-tight">
                Who We Are
              </h2>
            </div>

            {/* Main content paragraphs */}
            <div className="space-y-8 text-lg lg:text-xl text-white/90 max-w-5xl mx-auto">
              <p className="italic leading-relaxed">
                As we move into the Aquarian age, with all of the rapid changes in the world, it is becoming increasingly difficult to navigate through all of the information that exists out there.
              </p>
              
              <p className="italic leading-relaxed">
                I have been doing astrology chart interpretation for many years, and understand the current transits and how they are affecting humanity on both a personal and collective level.
              </p>

              <p className="italic leading-relaxed">
                Book a reading with me if you are looking for in depth, psychological and Soul understanding evaluation with a basis on your natal or birth chart and how the current transits might be affecting you.
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button
                onClick={() => setShowContact(true)}
                size="lg"
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 text-lg font-semibold"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Explore Your Destiny
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 px-8 py-3 text-lg font-semibold"
                onClick={() => scrollToSection('testimonials')}
              >
                TESTIMONIALS
              </Button>
            </div>

            {/* Scroll indicator */}
            <div className="pt-16">
              <div className="flex justify-center">
                <div className="animate-bounce">
                  <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      <ContactModal open={showContact} onOpenChange={setShowContact} />
    </>
  );
};

export default Hero;
