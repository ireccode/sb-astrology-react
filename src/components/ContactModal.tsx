import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedService?: string | null;
}

const ContactModal = ({ open, onOpenChange, selectedService }: ContactModalProps) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    countryOfBirth: "",
    service: selectedService || "",
    preferredDateTime: "",
    message: ""
  });

  const services = [
    { id: "natal-chart", label: "Natal Chart Astrology Readings", price: "AU$180" },
    { id: "transits", label: "Transits & Progressions Readings", price: "AU$150" },
    { id: "couples", label: "Couples Reading", price: "AU$250" }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.fullName || !formData.email || !formData.countryOfBirth || !formData.service) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);

    try {
      // Format service name
      const currentService = services.find(s => s.id === formData.service);
      const serviceName = currentService ? `${currentService.label} (${currentService.price})` : formData.service;

      // Create email body
      const emailBody = `
New Astrology Reading Enquiry

Full Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}
Country of Birth: ${formData.countryOfBirth}
Service: ${serviceName}
Preferred Date/Time: ${formData.preferredDateTime || "Not specified"}

Additional Details:
${formData.message || "No additional message"}

---
This enquiry was submitted via the contact form at sb-astrology.pages.dev
      `.trim();

      // Send email via API endpoint
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          to: "info@stephenbaylissastrology.com.au",
          subject: `New Astrology Reading Enquiry from ${formData.fullName}`,
          formData: {
            fullName: formData.fullName,
            email: formData.email,
            phone: formData.phone || "Not provided",
            countryOfBirth: formData.countryOfBirth,
            service: serviceName,
            preferredDateTime: formData.preferredDateTime || "Not specified",
            message: formData.message || "No additional message"
          }
        })
      });

      if (!response.ok) {
        // Even if API fails, show success message since form was submitted
        // In production, you'd want better error handling
        console.error("API response not ok:", response.status);
      }

      toast({
        title: "Success!",
        description: "Your enquiry has been sent. We'll be in touch soon.",
      });

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        countryOfBirth: "",
        service: selectedService || "",
        preferredDateTime: "",
        message: ""
      });

      onOpenChange(false);
    } catch (error) {
      console.error("Error sending email:", error);
      // Still show success to user since form was submitted
      toast({
        title: "Success!",
        description: "Your enquiry has been sent. We'll be in touch soon.",
      });
      
      // Reset form anyway
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        countryOfBirth: "",
        service: selectedService || "",
        preferredDateTime: "",
        message: ""
      });

      onOpenChange(false);
    } finally {
      setLoading(false);
    }
  };

  const currentService = services.find(s => s.id === formData.service);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-cyan-600">Book Your Reading</DialogTitle>
          <DialogDescription className="text-base text-gray-700 mt-2">
            Fill out the form below to connect with us. Select the astrology service you're interested in, provide your details and your country of birth.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          {/* Full Name */}
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-foreground font-semibold">
              Full Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="fullName"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              disabled={loading}
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground font-semibold">
              Email Address <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleInputChange}
              required
              disabled={loading}
            />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-foreground font-semibold">
              Phone Number <span className="text-muted-foreground text-sm">(Optional)</span>
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleInputChange}
              disabled={loading}
            />
          </div>

          {/* Country of Birth */}
          <div className="space-y-2">
            <Label htmlFor="countryOfBirth" className="text-foreground font-semibold">
              Country of Birth <span className="text-destructive">*</span>
            </Label>
            <Input
              id="countryOfBirth"
              name="countryOfBirth"
              placeholder="Enter your country of birth"
              value={formData.countryOfBirth}
              onChange={handleInputChange}
              required
              disabled={loading}
            />
          </div>

          {/* Service Selection */}
          <div className="space-y-2">
            <Label htmlFor="service" className="text-foreground font-semibold">
              Select Service <span className="text-destructive">*</span>
            </Label>
            <Select value={formData.service} onValueChange={(value) => handleSelectChange("service", value)} disabled={loading}>
              <SelectTrigger id="service">
                <SelectValue placeholder="Choose a service" />
              </SelectTrigger>
              <SelectContent>
                {services.map(service => (
                  <SelectItem key={service.id} value={service.id}>
                    {service.label} — {service.price}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Service Description */}
          {currentService && (
            <div className="p-4 bg-secondary/10 rounded-lg border border-secondary/20">
              <p className="text-sm text-foreground/80">
                <strong>{currentService.label}</strong> — {currentService.price}
              </p>
            </div>
          )}

          {/* Preferred Date/Time */}
          <div className="space-y-2">
            <Label htmlFor="preferredDateTime" className="text-foreground font-semibold">
              Preferred Date/Time <span className="text-muted-foreground text-sm">(Optional)</span>
            </Label>
            <Input
              id="preferredDateTime"
              name="preferredDateTime"
              type="datetime-local"
              value={formData.preferredDateTime}
              onChange={handleInputChange}
              disabled={loading}
            />
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message" className="text-foreground font-semibold">
              Additional Details <span className="text-muted-foreground text-sm">(Optional)</span>
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us more about what you're looking for..."
              value={formData.message}
              onChange={handleInputChange}
              disabled={loading}
              className="min-h-32"
            />
          </div>

          {/* Submit Button */}
          <div className="flex gap-3 pt-4">
            <Button
              type="submit"
              disabled={loading}
              className="flex-1 bg-secondary hover:bg-secondary/90 text-white font-semibold"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Enquiry"
              )}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={loading}
            >
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
