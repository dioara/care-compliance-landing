import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";

export default function Updates() {
  const updates = [
    {
      version: "v1.2.0",
      date: "19 Dec 2025",
      title: "Performance & Media Enhancements",
      changes: [
        "Optimised logo assets for faster loading times.",
        "Implemented efficient media storage handling.",
        "Improved overall site performance scores."
      ]
    },
    {
      version: "v1.1.0",
      date: "18 Dec 2025",
      title: "Security & Subscription Management",
      changes: [
        "Added email verification for new accounts.",
        "Implemented API rate limiting for enhanced security.",
        "Launched new license management dashboard for admins."
      ]
    },
    {
      version: "v1.0.5",
      date: "17 Dec 2025",
      title: "Compliance & Localisation",
      changes: [
        "Enforced British English spelling across the platform.",
        "Fixed PDF generation formatting issues.",
        "Updated default compliance templates."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-heading font-bold tracking-tight text-foreground sm:text-5xl mb-6">
                Product Updates
              </h1>
              <p className="text-xl text-muted-foreground">
                See what's new in Care Compliance System. We're constantly improving to help you deliver better care.
              </p>
            </div>

            <div className="space-y-12">
              {updates.map((update, index) => (
                <div key={index} className="relative pl-8 border-l border-border/50 pb-12 last:pb-0">
                  <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-primary" />
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                    <h2 className="text-2xl font-bold font-heading">{update.version}</h2>
                    <div className="flex items-center gap-3">
                      <Badge variant="secondary">{update.date}</Badge>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{update.title}</h3>
                  <ul className="space-y-2">
                    {update.changes.map((change, i) => (
                      <li key={i} className="text-muted-foreground flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/60 shrink-0" />
                        {change}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
