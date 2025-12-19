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
          {/* Monthly Plan */}
          <div className="relative p-8 rounded-3xl bg-white border border-border shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="mb-8">
              <h3 className="text-xl font-heading font-semibold text-foreground mb-2">Monthly License</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-foreground">£70</span>
                <span className="text-muted-foreground">/license/month</span>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Perfect for smaller care homes getting started with digital compliance.
              </p>
            </div>
            
            <div className="space-y-4 mb-8">
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
              <div className="flex items-center gap-3">
                <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                  <Check className="h-3 w-3" />
                </div>
                <span className="text-sm text-foreground/80">Standard support</span>
              </div>
            </div>
            
            <Button className="w-full rounded-xl" variant="outline" asChild>
              <a href="https://app.carecompliance.com/register">Start Monthly</a>
            </Button>
          </div>

          {/* Volume Plan - Highlighted */}
          <div className="relative p-8 rounded-3xl bg-white border-2 border-primary shadow-2xl transform scale-105 z-10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
              Most Popular
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-heading font-semibold text-foreground mb-2">Volume Discount</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-foreground">£63</span>
                <span className="text-muted-foreground">/license/month</span>
              </div>
              <p className="text-sm text-green-600 font-medium mt-2">
                Save 10-20% per license
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                For growing organizations with 6+ licenses.
              </p>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                  <Check className="h-3 w-3" />
                </div>
                <span className="text-sm text-foreground/80">Everything in Monthly</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                  <Check className="h-3 w-3" />
                </div>
                <span className="text-sm text-foreground/80">
                  <span className="font-semibold">10% off</span> for 6-10 licenses
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                  <Check className="h-3 w-3" />
                </div>
                <span className="text-sm text-foreground/80">
                  <span className="font-semibold">15% off</span> for 11-20 licenses
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                  <Check className="h-3 w-3" />
                </div>
                <span className="text-sm text-foreground/80">
                  <span className="font-semibold">20% off</span> for 21+ licenses
                </span>
              </div>
            </div>
            
            <Button className="w-full rounded-xl h-12 text-lg shadow-lg shadow-primary/20" asChild>
              <a href="https://app.carecompliance.com/register">Start Free Trial</a>
            </Button>
            <p className="text-xs text-center text-muted-foreground mt-4">30-day free trial • No card required</p>
          </div>

          {/* Annual Plan */}
          <div className="relative p-8 rounded-3xl bg-white border border-border shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="mb-8">
              <h3 className="text-xl font-heading font-semibold text-foreground mb-2">Annual Billing</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-foreground">£59.50</span>
                <span className="text-muted-foreground">/license/mo</span>
              </div>
              <p className="text-sm text-green-600 font-medium mt-2">
                Save additional 15%
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Commit annually and get 2 months free equivalent.
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
                <span className="text-sm text-foreground/80">Combines with volume discounts</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                  <Check className="h-3 w-3" />
                </div>
                <span className="text-sm text-foreground/80">Priority support</span>
              </div>
            </div>
            
            <Button className="w-full rounded-xl" variant="outline" asChild>
              <a href="https://app.carecompliance.com/register">Contact Sales</a>
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
                  <a href="mailto:sales@carecompliance.com" className="text-primary font-medium hover:underline">Contact our sales team</a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>For organizations with 50+ licenses</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
        </div>
      </div>
    </section>
  );
}
