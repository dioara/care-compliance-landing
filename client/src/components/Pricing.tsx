import { Button } from "@/components/ui/button";
import { Check, HelpCircle } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Simple, transparent <span className="text-gradient">pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Start with a 30-day free trial. No credit card required. Cancel anytime.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Standard Plan */}
          <div className="relative p-8 rounded-3xl bg-white border border-border shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="mb-8">
              <h3 className="text-xl font-heading font-semibold text-foreground mb-2">Standard License</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-foreground">£70</span>
                <span className="text-muted-foreground">/licence/month</span>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Perfect for smaller care businesses getting started with digital compliance.
              </p>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                  <Check className="h-3 w-3" />
                </div>
                <span className="text-sm text-foreground/80">1-5 licences</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                  <Check className="h-3 w-3" />
                </div>
                <span className="text-sm text-foreground/80">Full access to all features</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                  <Check className="h-3 w-3" />
                </div>
                <span className="text-sm text-foreground/80">Unlimited audits</span>
              </div>
            </div>
            
            <Button className="w-full rounded-xl" variant="outline" asChild>
              <a href="https://app.ccms.co.uk/register">Start Monthly</a>
            </Button>
          </div>

          {/* Volume Plan - Highlighted */}
          <div className="relative p-8 rounded-3xl bg-white border-2 border-primary shadow-2xl transform scale-105 z-10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
              Volume Discounts
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-heading font-semibold text-foreground mb-2">Growing Organisation</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-foreground">£56</span>
                <span className="text-muted-foreground">/licence/month</span>
              </div>
              <p className="text-sm text-green-600 font-medium mt-2">
                Save up to 20% per licence
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Automatic discounts applied as you grow.
              </p>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                  <Check className="h-3 w-3" />
                </div>
                <span className="text-sm text-foreground/80">
                  <span className="font-semibold">10% off (£63)</span> for 6-10 licences
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                  <Check className="h-3 w-3" />
                </div>
                <span className="text-sm text-foreground/80">
                  <span className="font-semibold">15% off (£59.50)</span> for 11-20 licences
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                  <Check className="h-3 w-3" />
                </div>
                <span className="text-sm text-foreground/80">
                  <span className="font-semibold">20% off (£56)</span> for 21+ licences
                </span>
              </div>
            </div>
            
            <Button className="w-full rounded-xl h-12 text-lg shadow-lg shadow-primary/20" asChild>
              <a href="https://app.ccms.co.uk/register">Start Free Trial</a>
            </Button>
            <p className="text-xs text-center text-muted-foreground mt-4">30-day free trial • No card required</p>
          </div>

          {/* Annual Plan */}
          <div className="relative p-8 rounded-3xl bg-white border border-border shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="mb-8">
              <h3 className="text-xl font-heading font-semibold text-foreground mb-2">Annual Billing</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-foreground">£47.60</span>
                <span className="text-muted-foreground">/licence/mo</span>
              </div>
              <p className="text-sm text-green-600 font-medium mt-2">
                Save additional 15%
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Pay annually for maximum savings.
              </p>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                  <Check className="h-3 w-3" />
                </div>
                <span className="text-sm text-foreground/80">Best value for money</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                  <Check className="h-3 w-3" />
                </div>
                <span className="text-sm text-foreground/80">Stacks with volume discounts</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                  <Check className="h-3 w-3" />
                </div>
                <span className="text-sm text-foreground/80">Priority support</span>
              </div>
            </div>
            
            <Button className="w-full rounded-xl" variant="outline" asChild>
              <a href="https://app.ccms.co.uk/register">Contact Sales</a>
            </Button>
          </div>
        </div>

        <div className="mt-16 text-center">
          <TooltipProvider>
            <div className="inline-flex items-center gap-2 text-muted-foreground bg-white px-4 py-2 rounded-full border border-border shadow-sm">
              <HelpCircle className="h-4 w-4" />
              <span className="text-sm">Need a custom enterprise plan?</span>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a href="mailto:sales@ccms.co.uk" className="text-primary font-medium hover:underline">Contact our sales team</a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>For organisations with 50+ licences</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
        </div>
      </div>
    </section>
  );
}
