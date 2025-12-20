import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, FileText } from "lucide-react";

export default function Resources() {
  const resources = [
    // New Feedback Forms
    {
      title: "Staff Feedback Questionnaire",
      description: "Gather valuable insights from your team about their work environment and support needs.",
      filename: "form-staff-feedback.pdf",
      category: "Feedback"
    },
    {
      title: "Service User Feedback Form",
      description: "Empower residents to share their views on care quality, environment, and activities.",
      filename: "Service_User_Feedback.pdf",
      category: "Feedback"
    },
    {
      title: "Family & Friends Feedback",
      description: "Collect feedback from relatives to ensure holistic satisfaction with your service.",
      filename: "Family_Friends_Feedback.pdf",
      category: "Feedback"
    },
    {
      title: "Visiting Professional Feedback",
      description: "Capture external perspectives from healthcare professionals visiting your service.",
      filename: "Professional_Feedback.pdf",
      category: "Feedback"
    },
    // New Compliance Tools
    {
      title: "Fire Safety Checklist",
      description: "Weekly checklist to ensure all fire safety systems and exits are compliant.",
      filename: "Fire_Safety_Checklist.pdf",
      category: "Compliance"
    },
    {
      title: "Infection Control Audit",
      description: "Comprehensive audit tool for hand hygiene, PPE, and environmental cleanliness.",
      filename: "audit-infection-control.pdf",
      category: "Compliance"
    },
    {
      title: "Complaints Log",
      description: "Structured log for recording, investigating, and resolving complaints.",
      filename: "Complaints_Log.pdf",
      category: "Management"
    },
    {
      title: "Staff Training Matrix",
      description: "Track mandatory and role-specific training compliance across your team.",
      filename: "Training_Matrix.pdf",
      category: "Management"
    },
    // Original Templates
    {
      title: "Medication Administration Audit",
      description: "Ensure safe medication practices with this comprehensive audit tool covering storage, administration, and competency.",
      filename: "audit-medication.pdf",
      category: "Clinical"
    },
    {
      title: "Care Plan Quality Audit",
      description: "Review care plans for person-centred content, risk assessments, and mental capacity compliance.",
      filename: "audit-care-plan.pdf",
      category: "Clinical"
    },
    {
      title: "Daily Infection Control Spot Check",
      description: "Quick daily check for cleanliness, PPE availability, and staff hygiene practices.",
      filename: "Infection_Control_Spot_Check.pdf",
      category: "Compliance"
    },
    {
      title: "Health & Safety Walkaround",
      description: "Monthly environmental check covering hazards, maintenance, and general safety.",
      filename: "Health_Safety_Audit.pdf",
      category: "Safety"
    },
    {
      title: "Kitchen & Food Safety Audit",
      description: "Monitor kitchen hygiene, food storage temperatures, and cleaning schedules.",
      filename: "Kitchen_Audit.pdf",
      category: "Safety"
    },
    {
      title: "Staff Personnel File Audit",
      description: "Verify recruitment checks, DBS status, and mandatory training records for staff.",
      filename: "Staff_File_Audit.pdf",
      category: "HR"
    },
    {
      title: "Resident Room Monthly Check",
      description: "Ensure resident rooms are clean, safe, and personalised to their needs.",
      filename: "Resident_Room_Check.pdf",
      category: "Care"
    },
    {
      title: "Night Shift Safety Check",
      description: "Protocol for night staff to ensure building security and resident safety.",
      filename: "Night_Shift_Check.pdf",
      category: "Safety"
    },
    {
      title: "Manager's Daily Spot Check",
      description: "A quick overview tool for managers to assess the general state of the service.",
      filename: "Spot_Check_Form.pdf",
      category: "Management"
    },
    {
      title: "Staff Supervision Record",
      description: "Template for recording formal supervision sessions, actions, and wellbeing checks.",
      filename: "Supervision_Record.pdf",
      category: "HR"
    },
    {
      title: "Medication Competency Assessment",
      description: "Tool to assess and verify staff competency in administering medication.",
      filename: "Medication_Competency.pdf",
      category: "Clinical"
    },
    {
      title: "Positive DBS Risk Assessment",
      description: "Framework for assessing risks associated with positive DBS disclosures.",
      filename: "DBS_Risk_Assessment.pdf",
      category: "HR"
    },
    {
      title: "Business Continuity Plan",
      description: "Template for planning responses to emergencies like power failure or flood.",
      filename: "Business_Continuity_Plan.pdf",
      category: "Management"
    }
  ];

  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-heading font-bold tracking-tight text-foreground sm:text-5xl mb-4">
              Compliance Resources
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Free templates, checklists, and tools to help you maintain CQC compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <Card key={index} className="flex flex-col h-full border-border/50 shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-video w-full bg-muted/30 relative overflow-hidden border-b border-border/50">
                  <img 
                    src={`/documents/${resource.filename.replace('.pdf', '_thumb.jpg')}`} 
                    alt={resource.title}
                    className="object-cover w-full h-full opacity-90 hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute top-2 right-2">
                    <span className="bg-background/80 backdrop-blur-sm text-xs font-medium px-2 py-1 rounded-full border border-border/50">
                      {resource.category}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="font-heading text-xl">{resource.title}</CardTitle>
                  <CardDescription className="line-clamp-2">
                    {resource.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="mt-auto pt-0">
                  <Button asChild className="w-full gap-2" variant="outline">
                    <a href={`/documents/${resource.filename}`} download>
                      <Download className="h-4 w-4" />
                      Download PDF
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
