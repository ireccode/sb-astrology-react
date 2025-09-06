import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Booking from "@/components/Booking";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

import React, { useState } from "react";

const Index = () => {
  const [calLink, setCalLink] = useState("smartechall");
  return (
    <div className="min-h-screen">
      <Navigation setCalLink={setCalLink} />
      <Hero />
      <Services />
      <Booking calLink={calLink} />
      <Testimonials />
      <Location />
      <Footer />
    </div>
  );
};

export default Index;
