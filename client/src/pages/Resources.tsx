import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Download, BookOpen, ShieldCheck, CheckCircle, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadCaptureDialog from "@/components/LeadCaptureDialog";

export default function Resources() {
  const [selectedTemplate, setSelectedTemplate] = useState<{ title: string; url: string } | null>(null);

  const templates = [
    {
      title: "Hospital Passport Template",
      description: "A comprehensive document to ensure continuity of care when a service user is admitted to hospital. Includes sections for medical history, communication needs, and personal preferences.",
      icon: FileText,
      downloadUrl: "/documents/hospital_passport_template.pdf",
      thumbnail: "/images/templates/hospital_passport_template.png",
      category: "Care Management"
    },
    {
      title: "Right to Work Checklist",
      description: "Essential checklist for UK employers to verify staff eligibility. Covers acceptable documents (List A & B) and the 3-step check process to prevent illegal working.",
      icon: ShieldCheck,
      downloadUrl: "/documents/right_to_work_checklist.pdf",
      thumbnail: "/images/templates/right_to_work_checklist.png",
      category: "HR & Compliance"
    },
    {
      title: "Person-Centred Care Plan",
      description: "CQC-compliant care plan template focusing on individual needs, risks, and goals. Perfect for structuring resident care documentation.",
      icon: CheckCircle,
      downloadUrl: "/documents/care_plan_template.pdf",
      thumbnail: "/images/templates/care_plan_template.png",
      category: "Care Planning"
    },
    {
      title: "Risk Assessment Form",
      description: "Standardised risk assessment template to identify hazards, evaluate risks, and implement control measures for service users or environments.",
      icon: ShieldCheck,
      downloadUrl: "/documents/risk_assessment_template.pdf",
      thumbnail: "/images/templates/risk_assessment_template.png",
      category: "Safety"
    },
    {
      title: "Infection Control Audit",
      description: "Comprehensive checklist for auditing infection prevention and control standards, covering hand hygiene, PPE, and environmental cleanliness.",
      icon: CheckCircle,
      downloadUrl: "/documents/infection_control_audit.pdf",
      thumbnail: "/images/templates/infection_control_audit.png",
      category: "Audits"
    },
    {
      title: "MAR Chart Template",
      description: "Medication Administration Record chart for accurate tracking of medication administration, ensuring safety and compliance.",
      icon: FileText,
      downloadUrl: "/documents/mar_chart_template.pdf",
      thumbnail: "/images/templates/mar_chart_template.png",
      category: "Medication"
    },
    {
      title: "Staff Induction Checklist",
      description: "Structured induction checklist to ensure new staff receive all necessary training, policy reviews, and introductions during their first weeks.",
      icon: Users,
      downloadUrl: "/documents/staff_induction_checklist.pdf",
      thumbnail: "/images/templates/staff_induction_checklist.png",
      category: "HR & Compliance"
    },
    {
      title: "Incident Report Form",
      description: "Formal template for recording accidents and incidents, including details of injuries, witnesses, and immediate actions taken.",
      icon: ShieldCheck,
      downloadUrl: "/documents/incident_report_form.pdf",
      thumbnail: "/images/templates/incident_report_form.png",
      category: "Safety"
    }
  ];

  const handleDownloadClick = (template: typeof templates[0]) => {
    setSelectedTemplate({ title: template.title, url: template.downloadUrl });
  };

  const handleDownloadSuccess = () => {
    if (selectedTemplate) {
      const link = document.createElement('a');
      link.href = selectedTemplate.url;
      link.download = selectedTemplate.url.split('/').pop() || 'download';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const articles = [
    {
      title: "Understanding the CQC Single Assessment Framework",
      excerpt: "A guide to the new CQC assessment approach, focusing on the 5 key questions and 34 quality statements.",
      readTime: "5 min read",
      category: "CQC Updates"
    },
    {
      title: "Top 10 Common CQC Inspection Failures",
      excerpt: "Learn from common mistakes. We analyse the most frequent reasons for 'Requires Improvement' ratings in 2024.",
      readTime: "7 min read",
      category: "Inspection Prep"
    },
    {
      title: "Digital vs Paper: The ROI of Going Digital",
      excerpt: "How switching to digital care planning saves time, reduces errors, and improves staff retention.",
      readTime: "4 min read",
      category: "Digital Transformation"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-slate-50">
          <div className="container text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Compliance <span className="text-gradient">Resources</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Free templates, guides, and articles to help your care business stay compliant and deliver outstanding care.
            </p>
          </div>
        </section>

        {/* Templates Section */}
        <section className="py-20">
          <div className="container">
            <div className="flex items-center gap-3 mb-12">
              <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center text-primary">
                <Download className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-heading font-bold">Free Templates</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {templates.map((template, index) => (
                <Card key={index} className="flex flex-col hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                  <div className="h-48 bg-slate-100 relative group overflow-hidden border-b border-border/50">
                    <img 
                      src={template.thumbnail} 
                      alt={`${template.title} Preview`} 
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-medium text-foreground shadow-sm">
                        {template.category}
                      </span>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl">
                      <template.icon className="h-5 w-5 text-primary shrink-0" />
                      {template.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <CardDescription className="text-base mb-6 flex-1">
                      {template.description}
                    </CardDescription>
                    <Button 
                      className="w-full gap-2" 
                      onClick={() => handleDownloadClick(template)}
                    >
                      <Download className="h-4 w-4" />
                      Download PDF
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Articles Section */}
        <section className="py-20 bg-slate-50">
          <div className="container">
            <div className="flex items-center gap-3 mb-12">
              <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center text-green-600">
                <BookOpen className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-heading font-bold">Latest Articles</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <article key={index} className="group cursor-pointer">
                  <div className="rounded-2xl overflow-hidden bg-white border border-border shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col">
                    <div className="h-48 bg-slate-200 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 group-hover:scale-105 transition-transform duration-500"></div>
                      <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium">
                        {article.category}
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 flex-1">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center text-sm text-muted-foreground mt-auto">
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      <LeadCaptureDialog 
        isOpen={!!selectedTemplate}
        onClose={() => setSelectedTemplate(null)}
        onSuccess={handleDownloadSuccess}
        resourceTitle={selectedTemplate?.title || ""}
      />
    </div>
  );
}
