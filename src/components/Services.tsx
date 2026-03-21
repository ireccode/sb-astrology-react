import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ContactModal from "./ContactModal";
import natalChartImg from "@/assets/natal-charts-readings-product2.webp";
import transitsImg from "@/assets/transists-and-progression-readings-product.webp";
import couplesImg from "@/assets/couples-readings-product .webp";

const Services = () => {
  const [showContact, setShowContact] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    {
      id: "natal-chart",
      title: "Natal Chart Astrology Readings",
      description: "Natal chart readings are offered for anyone looking to understand their psychological makeup and cosmic blueprint. Discover the secrets written in the stars at the moment of your birth.",
      originalPrice: "$270",
      price: "$180",
      discount: "-50% OFF",
      duration: "90 - 120 minutes • Duration varies",
      image: natalChartImg
    },
    {
      id: "transits",
      title: "Transits & Progressions Readings",
      description: "Follow up transit readings are great after a natal chart reading. These readings can offer insights into current planetary influences and how they affect your personal journey.",
      originalPrice: "$225",
      price: "$150",
      discount: "-50% OFF",
      duration: "60 mins and over",
      image: transitsImg
    },
    {
      id: "couples",
      title: "Couples Reading",
      description: "A lot of people like to know what influences their partner or spouse and what ways can they work together harmoniously. Discover your cosmic compatibility.",
      originalPrice: "$375",
      price: "$250",
      discount: "-50% OFF",
      duration: "120 mins",
      image: couplesImg
    }
  ];

  const handleBooking = (serviceId: string) => {
    setSelectedService(serviceId);
    setShowContact(true);
  };

  return (
    <>
      <section id="services" className="py-20 services-section-bg">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-cyan-300">SERVICES WE OFFER</h2>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service) => (
              <Card key={service.id} className="bg-white border-0 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                {/* Service Image */}
                <div className="w-full bg-gray-200">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-auto object-contain"
                  />
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-lg lg:text-xl text-gray-900 font-bold">{service.title}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Price Section */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-start gap-2">
                      <span className="text-sm text-gray-500 line-through">{service.originalPrice}</span>
                      <span className="text-xs text-red-600 font-semibold">{service.discount}</span>
                    </div>
                    <div className="text-2xl font-bold text-red-600">{service.price}</div>
                    <div className="text-xs text-gray-600">{service.duration}</div>
                  </div>

                  {/* Description */}
                  <CardDescription className="text-gray-700 text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>

                  {/* Book Button */}
                  <Button
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-2 rounded"
                    onClick={() => handleBooking(service.id)}
                  >
                    Book Your Reading
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      <ContactModal open={showContact} onOpenChange={setShowContact} selectedService={selectedService} />
    </>
  );
};

export default Services;
