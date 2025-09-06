import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Cecily M",
      rating: 4,
      text: "Steve brings great love, a clear mind and rich experience and knowledge. His insights and reflections are immensely valuable, as are the materials he shares."
    },
    {
      name: "Ela B",
      rating: 4,
      text: "Stephen is a fantastic \"holistic\" astrologer. With his astrological knowledge and intuition you will receive a great chart reading."
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? "fill-accent text-accent" : "text-muted-foreground"
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 starfield-bg relative">
      {/* Cosmic decorative elements */}
      <div className="absolute inset-0 cosmic-pattern opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary">HEAR FROM OUR CLIENTS</h2>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-secondary/90 border-secondary starry-shadow hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex justify-center">
                    <div className="flex gap-1">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                  
                  <p className="text-white text-lg leading-relaxed text-center">
                    {testimonial.text}
                  </p>
                  
                  <div className="text-center">
                    <p className="font-bold text-white text-xl">{testimonial.name}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;