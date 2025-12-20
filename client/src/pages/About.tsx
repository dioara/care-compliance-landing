import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Heart, CheckCircle, Lightbulb, Handshake, Award } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-heading font-bold tracking-tight text-foreground sm:text-5xl mb-6">
              Empowering Care Providers with Confidence
            </h1>
            <p className="text-xl text-muted-foreground">
              We're on a mission to simplify compliance so you can focus on what matters most: delivering exceptional care.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-4">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded by care industry veterans, Care Compliance System was born out of frustration with complex, paper-based audit trails. We realised that care managers were spending more time on paperwork than on people.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, we help hundreds of UK care businesses automate their CQC compliance, reduce risk, and improve their ratings through our intuitive, all-in-one platform.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-primary/5 border-none">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Shield className="h-10 w-10 text-primary mb-3" />
                  <h3 className="font-semibold">CQC Ready</h3>
                </CardContent>
              </Card>
              <Card className="bg-primary/5 border-none">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Users className="h-10 w-10 text-primary mb-3" />
                  <h3 className="font-semibold">User Focused</h3>
                </CardContent>
              </Card>
              <Card className="bg-primary/5 border-none">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Heart className="h-10 w-10 text-primary mb-3" />
                  <h3 className="font-semibold">Care First</h3>
                </CardContent>
              </Card>
              <Card className="bg-primary/5 border-none">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <CheckCircle className="h-10 w-10 text-primary mb-3" />
                  <h3 className="font-semibold">Compliance</h3>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-muted-foreground">Constantly evolving our technology to meet the changing needs of the care sector.</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Handshake className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Integrity</h3>
                <p className="text-muted-foreground">We believe in transparent, honest partnerships with our clients and stakeholders.</p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                <p className="text-muted-foreground">Striving for the highest standards in both our software and our customer support.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
