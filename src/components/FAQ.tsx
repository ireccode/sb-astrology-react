import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is a natal chart reading?",
      answer: "A natal chart maps the planets at your birth. Stephen interprets this through psychological astrology for personal growth."
    },
    {
      question: "Can I book readings online in Australia?",
      answer: "Yes. All astrology readings are available via secure online video sessions anywhere in Australia."
    },
    {
      question: "How should I prepare for a reading?",
      answer: "Have your exact birth date, time, and place ready, along with any current life questions or concerns."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary">STILL NOT SURE?</h2>
          <h3 className="text-2xl lg:text-3xl font-semibold text-foreground">Frequently Asked Questions</h3>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-semibold text-secondary hover:text-secondary/80">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-foreground/80 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
