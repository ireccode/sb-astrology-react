import { Button } from "@/components/ui/button";
import { Star, Sparkles, Moon } from "lucide-react";

const Hero = () => {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden starfield-bg"
    >
      {/* Cosmic overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/60"></div>
      
      {/* Header with logo and book button */}
      <div className="absolute top-8 left-0 right-0 z-20">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center">
              <Star className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-secondary">Stephen Bayliss</h1>
              <p className="text-lg text-secondary/80">Astrology</p>
            </div>
          </div>
          <Button
            onClick={scrollToBooking}
            className="bg-secondary hover:bg-secondary/90 text-white px-6 py-2"
          >
            Book Your Reading
          </Button>
        </div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Main heading */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-6xl font-bold text-secondary leading-tight">
              Who We Are
            </h2>
          </div>

          {/* Main content paragraphs */}
          <div className="space-y-8 text-lg lg:text-xl text-foreground/90 max-w-5xl mx-auto">
            <p className="italic leading-relaxed">
              As we move into a new age, one where everything is accessible to everyone, we need to be more aware of 
              everything that is going on around us. Things are changing at such a rapid rate, we need to be actively and 
              acutely aware of our surroundings and environment, but also open to it so that we can make the most of the 
              opportunity that we are lucky enough to be part of.
            </p>
            
            <p className="italic leading-relaxed">
              I for one, am positive about the future, mainly as we have never been in such a position where we can be at 
              the forefront of real change. Yes we have many problems together for Humanity, but I believe we have the 
              ability and the capacity to effect real change, we just need to be open to it.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              onClick={scrollToBooking}
              size="lg"
              className="cosmic-purple-gradient text-white px-8 py-3 text-lg"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Explore Your Destiny
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-3 text-lg"
              onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
            >
              TESTIMONIALS
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="pt-16">
            <div className="flex justify-center">
              <div className="animate-bounce">
                <div className="w-6 h-10 border-2 border-secondary/50 rounded-full flex justify-center">
                  <div className="w-1 h-3 bg-secondary rounded-full mt-2 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;