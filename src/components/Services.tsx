import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Users, Clock, Sparkles } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Star,
      title: "Natal Chart Astrology Readings",
      description: "Natal chart readings are offered for anyone looking to understand their psychological makeup and cosmic blueprint. Discover the secrets written in the stars at the moment of your birth.",
      price: "$180",
      duration: "90 - 120 minutes • Duration varies",
      specialty: "Core Reading"
    },
    {
      icon: Clock,
      title: "Transits & Progressions Readings",
      description: "Follow up transit readings are great after a natal chart reading. These readings can offer insights into current planetary influences and how they affect your personal journey.",
      price: "Contact",
      duration: "Follow-up sessions",
      specialty: "Advanced"
    },
    {
      icon: Users,
      title: "Couples Reading",
      description: "A lot of people like to know what influences their partner or spouse and what ways can they work together harmoniously. Discover your cosmic compatibility.",
      price: "Contact",
      duration: "120 mins",
      specialty: "Relationship"
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary">SERVICES WE OFFER</h2>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="bg-card border-border starry-shadow hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl lg:text-2xl text-secondary font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-6">
                  <CardDescription className="text-foreground/80 leading-relaxed text-base">
                    {service.description}
                  </CardDescription>
                  
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-secondary">{service.price}</div>
                    <div className="text-sm text-muted-foreground">{service.duration}</div>
                  </div>
                  
                  <Button
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                    onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                    MEMBERSHIP
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;