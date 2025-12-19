import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-white blur-3xl"></div>
      </div>
      
      <div className="container relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
          Ready to simplify your compliance?
        </h2>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed">
          Join hundreds of care businesses improving their CQC ratings with our all-in-one platform. Start your 30-day free trial today.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="rounded-full text-lg px-8 h-14 bg-white text-primary hover:bg-blue-50 shadow-xl" asChild>
            <a href="https://app.ccms.co.uk/register">
              Get Started for Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="rounded-full text-lg px-8 h-14 border-white/30 text-white hover:bg-white/10 hover:text-white" asChild>
            <a href="mailto:sales@ccms.co.uk">Contact Sales</a>
          </Button>
        </div>
        
        <p className="text-sm text-blue-200 mt-8">
          No credit card required • Cancel anytime • 30-day free trial
        </p>
      </div>
    </section>
  );
}
