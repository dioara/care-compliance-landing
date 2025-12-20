import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Blog() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-heading font-bold tracking-tight text-foreground sm:text-5xl mb-6">
              Latest News & Insights
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Updates, tips, and industry news from the Care Compliance System team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border/50 shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-video w-full bg-muted/30 relative overflow-hidden border-b border-border/50">
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/20">
                  Image Placeholder
                </div>
              </div>
              <CardHeader>
                <div className="text-sm text-primary font-medium mb-2">Company News</div>
                <CardTitle className="font-heading text-xl">Welcome to Care Compliance System</CardTitle>
                <CardDescription>
                  We're excited to launch our new platform designed to simplify CQC compliance for care providers across the UK.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Dec 20, 2025 • 3 min read</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
