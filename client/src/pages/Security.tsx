import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Lock, Server, Eye } from "lucide-react";

export default function Security() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-heading font-bold tracking-tight text-foreground sm:text-5xl mb-6">
              Security First
            </h1>
            <p className="text-xl text-muted-foreground">
              We take the protection of your data and your service users' privacy seriously.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-card p-8 rounded-xl border border-border/50">
              <Lock className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Data Encryption</h3>
              <p className="text-muted-foreground">
                All data is encrypted in transit using TLS 1.2+ and at rest using industry-standard AES-256 encryption.
              </p>
            </div>
            <div className="bg-card p-8 rounded-xl border border-border/50">
              <Server className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Secure Infrastructure</h3>
              <p className="text-muted-foreground">
                Hosted on secure, compliant cloud infrastructure with regular backups and redundancy.
              </p>
            </div>
            <div className="bg-card p-8 rounded-xl border border-border/50">
              <Shield className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">GDPR Compliance</h3>
              <p className="text-muted-foreground">
                Fully compliant with UK GDPR and Data Protection Act 2018 requirements.
              </p>
            </div>
            <div className="bg-card p-8 rounded-xl border border-border/50">
              <Eye className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Access Control</h3>
              <p className="text-muted-foreground">
                Role-based access controls ensure staff only see what they need to see.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
