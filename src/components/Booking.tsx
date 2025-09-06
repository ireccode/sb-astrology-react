import React, { useState } from 'react';
import CalEmbed from '@calcom/embed-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, CreditCard } from "lucide-react";

interface BookingProps {
  calLink?: string;
}

const Booking: React.FC<BookingProps> = ({ calLink = 'smartechall' }) => {
  return (
    <section id="booking" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-primary">Book Your Appointment</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose your preferred time, service, and brother. Payment handled securely online.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <Card className="text-center">
            <CardHeader>
              <Clock className="w-12 h-12 mx-auto text-secondary mb-4" />
              <CardTitle>Choose Service</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Pick your service and preferred brother for the perfect cut
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <Calendar className="w-12 h-12 mx-auto text-primary mb-4" />
              <CardTitle>Pick Your Time</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Select from available slots that work with your schedule
              </CardDescription>
            </CardContent>
          </Card>          
          <Card className="text-center">
            <CardHeader>
              <CreditCard className="w-12 h-12 mx-auto text-accent-foreground mb-4" />
              <CardTitle>Secure Payment</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Pay online with Stripe for a contactless experience
              </CardDescription>
            </CardContent>
          </Card>
        </div>
        <div className="flex justify-center">
          <div style={{width: '100%', maxWidth: 600}}>
            <CalEmbed
              key={calLink}
              calLink={calLink}
              style={{height: '950px', width: '100%'}}
              config={{layout: 'month_view'}}
            />
          </div>
        </div>
        <div className="text-center mt-8 space-y-2">
          <p className="text-sm text-muted-foreground">
            Having trouble booking online?
          </p>
          <a 
            href="tel:0411772313" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold"
          >
            Call us directly: 0411 772 313
          </a>
        </div>
      </div>
    </section>
  );
};

export default Booking;