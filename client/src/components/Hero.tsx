import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden bg-gradient-to-b from-blue-50/50 to-white">
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/50 text-primary text-sm font-medium border border-blue-200">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              New: AI-Powered Audit Analysis
            </div>
            
            <h1 className="text-5xl md:text-6xl font-heading font-bold tracking-tight text-foreground leading-[1.1]">
              Compliance made <span className="text-gradient">simple</span> for care businesses.
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              The all-in-one CQC compliance management system. Streamline audits, manage staff compliance, and ensure resident safety with confidence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="rounded-full text-lg px-8 h-14 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all" asChild>
                <a href="https://app.ccms.co.uk/register">
                  Start 30-Day Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full text-lg px-8 h-14 bg-white/50 backdrop-blur-sm hover:bg-white/80" asChild>
                <a href="#demo">Watch Demo</a>
              </Button>
            </div>
            
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-secondary-foreground" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-secondary-foreground" />
                  <span>Cancel anytime</span>
                </div>
              </div>
              <p className="text-xs opacity-70">Join 500+ UK care businesses trusting our platform</p>
            </div>
          </div>
          
          <div className="relative lg:h-[600px] flex items-center justify-center animate-fade-in-left delay-200">
            <div className="relative w-full max-w-[600px] aspect-[4/3]">
              {/* Abstract background shapes */}
              <div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-green-200/30 rounded-full blur-3xl"></div>
              
              {/* Main Hero Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/50 glass-card transform transition-transform hover:scale-[1.02] duration-500">
                <img 
                  src="/images/hero-dashboard.png" 
                  alt="Care Compliance Dashboard" 
                  className="w-full h-full object-cover"
                />
                
                {/* Floating UI Elements for depth */}
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-border/50 max-w-[200px] animate-float">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground">Audit Status</p>
                      <p className="text-sm font-bold text-foreground">CQC Ready</p>
                    </div>
                  </div>
                  <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-green-500 h-full w-[92%]"></div>
                  </div>
                </div>
                
                <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-border/50 animate-float-delayed">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-primary">
                      <span className="font-bold text-sm">AI</span>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted-foreground">New Report</p>
                      <p className="text-sm font-bold text-foreground">Analysis Complete</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
