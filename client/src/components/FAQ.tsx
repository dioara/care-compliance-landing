import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "What counts as a 'licence'?",
      answer: "A licence is required for every individual user who needs to log in to the system. This includes Administrators, Managers, and Staff members. For example, if you have 1 Manager and 5 Staff members who all need access, you will need 6 licences. Licences are not based on the number of locations or beds."
    },
    {
      question: "Can I share a single licence across multiple staff?",
      answer: "No. For security and audit purposes, each user must have their own unique login credentials. Sharing accounts compromises the audit trail, which is a critical requirement for CQC compliance. You can easily reassign licences if a staff member leaves."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We use bank-grade encryption for all data in transit and at rest. Our servers are hosted in secure UK-based data centres that comply with GDPR and NHS Data Security and Protection Toolkit standards."
    },
    {
      question: "What happens if I need to add more users later?",
      answer: "You can add more licences at any time directly from your dashboard. Our volume discounts apply automatically as you grow. For example, if you reach 6 users, your price per licence will automatically drop by 10%."
    },
    {
      question: "Do you offer support for setting up?",
      answer: "Yes! All plans include access to our support team. For organisations with 20+ licences, we offer a dedicated onboarding specialist to help you migrate your existing data and train your team."
    },
    {
      question: "Is there a minimum contract period?",
      answer: "For monthly plans, there is no minimum contract—you can cancel anytime. Annual plans are billed upfront for 12 months and offer a significant 15% discount compared to monthly billing."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about licences, billing, and security.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
