import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function Careers() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-heading font-bold tracking-tight text-foreground sm:text-5xl mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            We're always looking for talented individuals passionate about improving care quality through technology.
          </p>
          
          <div className="bg-muted/30 rounded-lg p-12 border border-border/50 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">No Open Positions</h2>
            <p className="text-muted-foreground mb-6">
              We don't have any vacancies at the moment, but we're growing fast. Check back soon or follow us on social media for updates.
            </p>
            <Button variant="outline" asChild>
              <a href="/">Return Home</a>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
