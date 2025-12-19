import { 
  ClipboardCheck, 
  BrainCircuit, 
  BarChart3, 
  Users, 
  Shield, 
  Clock,
  Building2,
  Lock,
  FileText
} from "lucide-react";

const features = [
  {
    icon: ClipboardCheck,
    title: "Comprehensive Audits",
    description: "Access 25+ built-in audit templates covering all CQC domains. Schedule, conduct, and track audits effortlessly.",
    image: "/images/feature-audit.png",
    benefits: [
      "25+ specialised audit types",
      "Automated scheduling & reminders",
      "Evidence upload & digital signatures"
    ]
  },
  {
    icon: BrainCircuit,
    title: "AI-Powered Analysis",
    description: "Upload care plans and staff notes for instant AI analysis. Identify gaps and improve quality automatically.",
    image: "/images/feature-ai.png",
    benefits: [
      "Instant care plan analysis",
      "Staff note quality checks",
      "Automated improvement suggestions"
    ]
  },
  {
    icon: BarChart3,
    title: "Real-time Reporting",
    description: "Visualise compliance status with RAG (Red, Amber, Green) indicators. Generate detailed reports in seconds.",
    image: "/images/feature-reporting.png",
    benefits: [
      "Live RAG status dashboard",
      "CQC-ready compliance reports",
      "Trend analysis & benchmarking"
    ]
  }
];

const additionalFeatures = [
  {
    icon: Users,
    title: "Staff Compliance",
    description: "Track employment checks, DBS status, and compliance across 7 key staff domains including recruitment and appraisals."
  },
  {
    icon: FileText,
    title: "Service User Compliance",
    description: "Monitor 22 critical service user compliance sections, from care plans to risk assessments."
  },
  {
    icon: Shield,
    title: "Incident Management",
    description: "Log incidents with automatic CQC notification triggers and comprehensive investigation tracking."
  },
  {
    icon: Building2,
    title: "Multi-Location Support",
    description: "Manage multiple sites from a single dashboard with location-specific reporting and oversight."
  },
  {
    icon: Lock,
    title: "Role-Based Access",
    description: "Secure access controls for Admins, Managers, and Staff to ensure data privacy and appropriate oversight."
  },
  {
    icon: Clock,
    title: "Automated Scheduling",
    description: "Never miss a deadline with smart automated reminders for upcoming audits, renewals, and tasks."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Everything you need for <span className="text-gradient">CQC excellence</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our platform brings together all aspects of care compliance into one intuitive system, designed specifically for UK care businesses.
          </p>
        </div>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <div key={feature.title} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="inline-flex items-center justify-center p-3 rounded-xl bg-blue-50 text-primary mb-6">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-3xl font-heading font-bold text-foreground mb-4">{feature.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {feature.description}
                </p>
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3 text-foreground/80">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border/50 bg-slate-50 aspect-[4/3] group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-24">
          {additionalFeatures.map((feature) => (
            <div key={feature.title} className="p-8 rounded-2xl bg-slate-50 border border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="h-12 w-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary mb-6">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
