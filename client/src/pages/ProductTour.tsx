import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, ChevronLeft, PlayCircle, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

const tourSteps = [
  {
    id: "dashboard",
    title: "Compliance Dashboard",
    description: "Get a bird's-eye view of your organisation's compliance status. Track real-time scores, upcoming audits, and critical alerts in one place.",
    image: "/images/demo-dashboard.webp",
    features: ["Real-time compliance score", "Upcoming audit reminders", "Critical alert notifications"]
  },
  {
    id: "audits",
    title: "Digital Audits",
    description: "Ditch the paper. Complete CQC-aligned audits directly on any device. Our smart forms guide you through every check to ensure nothing is missed.",
    image: "/images/demo-audits.webp",
    features: ["CQC-aligned templates", "Mobile-friendly forms", "Auto-save progress"]
  },
  {
    id: "staff",
    title: "Staff Compliance",
    description: "Never miss a DBS renewal again. Track employment checks, training certificates, and mandatory documents for every staff member.",
    image: "/images/demo-staff.webp",
    features: ["DBS expiry tracking", "Document storage", "Role-based requirements"]
  },
  {
    id: "reports",
    title: "Analytics & Reporting",
    description: "Prove your compliance to inspectors with one click. Generate detailed reports on audit performance, staff compliance trends, and incident history.",
    image: "/images/demo-reports.webp",
    features: ["One-click CQC reports", "Trend analysis", "Export to PDF/Excel"]
  }
];

export default function ProductTour() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < tourSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <PlayCircle className="w-4 h-4" />
              Interactive Product Tour
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              See Care Compliance in <span className="text-gradient">Action</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Take a guided tour through the key features that help care businesses achieve outstanding CQC ratings.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-4 space-y-4">
              {tourSteps.map((step, index) => (
                <button
                  key={step.id}
                  onClick={() => setCurrentStep(index)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-200 border ${
                    currentStep === index
                      ? "bg-white border-primary shadow-md ring-1 ring-primary/20"
                      : "bg-white/50 border-transparent hover:bg-white hover:border-border"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-heading font-semibold ${currentStep === index ? "text-primary" : "text-foreground"}`}>
                      {index + 1}. {step.title}
                    </span>
                    {currentStep > index && <CheckCircle2 className="w-5 h-5 text-green-500" />}
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {step.description}
                  </p>
                </button>
              ))}
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-8">
              <Card className="overflow-hidden border-none shadow-2xl bg-slate-900">
                <CardContent className="p-0 relative aspect-video group">
                  <img
                    src={tourSteps[currentStep].image}
                    alt={tourSteps[currentStep].title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Navigation Overlay */}
                  <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <Button
                      variant="secondary"
                      size="icon"
                      onClick={prevStep}
                      disabled={currentStep === 0}
                      className="pointer-events-auto h-12 w-12 rounded-full shadow-lg bg-white/90 hover:bg-white"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </Button>
                    <Button
                      variant="secondary"
                      size="icon"
                      onClick={nextStep}
                      disabled={currentStep === tourSteps.length - 1}
                      className="pointer-events-auto h-12 w-12 rounded-full shadow-lg bg-white/90 hover:bg-white"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-8 bg-white rounded-2xl p-8 border shadow-sm">
                <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
                  <div className="space-y-4 flex-1">
                    <h3 className="text-2xl font-heading font-bold text-foreground">
                      {tourSteps[currentStep].title}
                    </h3>
                    <p className="text-lg text-muted-foreground">
                      {tourSteps[currentStep].description}
                    </p>
                    <ul className="space-y-2">
                      {tourSteps[currentStep].features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex-shrink-0">
                    {currentStep === tourSteps.length - 1 ? (
                      <Button size="lg" className="h-12 px-8 text-lg shadow-lg shadow-primary/25" asChild>
                        <a href="https://app.ccms.co.uk/register">Start Free Trial</a>
                      </Button>
                    ) : (
                      <Button size="lg" onClick={nextStep} className="h-12 px-8">
                        Next Feature <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <CTA />
      <Footer />
    </div>
  );
}
