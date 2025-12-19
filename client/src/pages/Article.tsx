import { useParams, Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { useEffect } from "react";

// Mock data for articles - in a real app this would come from a CMS or API
const articlesData = {
  "understanding-cqc-single-assessment-framework": {
    title: "Understanding the CQC Single Assessment Framework",
    category: "CQC Updates",
    date: "12 Dec 2024",
    author: "Dr. Sarah Johnson",
    readTime: "5 min read",
    content: `
      <p class="lead text-xl text-muted-foreground mb-8">The Care Quality Commission (CQC) has transformed how it regulates health and social care in England. The new Single Assessment Framework represents a significant shift from the previous inspection model.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">What is the Single Assessment Framework?</h2>
      <p class="mb-6">The Single Assessment Framework is the CQC's new approach to assessment. It applies to all service types and all levels of regulation, from registration to ongoing assessment. The goal is to make judgments more consistent and transparent.</p>
      
      <h3 class="text-xl font-semibold mt-6 mb-3">The 5 Key Questions Remain</h3>
      <p class="mb-6">Despite the changes, the five key questions that the CQC asks of all services remain the same:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Safe:</strong> Are you protected from abuse and avoidable harm?</li>
        <li><strong>Effective:</strong> Does your care, treatment and support achieve good outcomes and promote a good quality of life?</li>
        <li><strong>Caring:</strong> Do staff treat you with kindness, respect and compassion?</li>
        <li><strong>Responsive:</strong> Do services meet your needs?</li>
        <li><strong>Well-led:</strong> Does the leadership, management and governance of the organisation assure the delivery of high-quality person-centred care?</li>
      </ul>

      <h3 class="text-xl font-semibold mt-6 mb-3">Quality Statements</h3>
      <p class="mb-6">The Key Lines of Enquiry (KLOEs) have been replaced by 34 Quality Statements. These are "we statements" written from the perspective of a provider, describing what good care looks like. For example:</p>
      <blockquote class="border-l-4 border-primary pl-4 italic my-6 bg-slate-50 p-4 rounded-r-lg">
        "We have a shared vision, strategy and culture. This is based on transparency, equity, equality and human rights, diversity and inclusion, engagement, and understanding challenges and the needs of people and our communities in order to meet these."
      </blockquote>

      <h2 class="text-2xl font-bold mt-8 mb-4">Evidence Categories</h2>
      <p class="mb-6">The CQC will now use six categories of evidence to assess services against the quality statements:</p>
      <ol class="list-decimal pl-6 mb-6 space-y-2">
        <li>People's experience of health and care services</li>
        <li>Feedback from staff and leaders</li>
        <li>Feedback from partners</li>
        <li>Observation</li>
        <li>Processes</li>
        <li>Outcomes</li>
      </ol>

      <h2 class="text-2xl font-bold mt-8 mb-4">What This Means for Care Providers</h2>
      <p class="mb-6">The new framework allows for more frequent, targeted assessments without always requiring a site visit. Providers need to be "always on" regarding compliance, ensuring their digital records are up-to-date and accessible.</p>
      <p class="mb-6">Data and evidence collection becomes crucial. Using a digital compliance system like CCMS can help you gather, organise, and present this evidence efficiently, ensuring you are always inspection-ready.</p>
    `
  },
  "top-10-common-cqc-inspection-failures": {
    title: "Top 10 Common CQC Inspection Failures",
    category: "Inspection Prep",
    date: "28 Nov 2024",
    author: "Mark Thompson",
    readTime: "7 min read",
    content: `
      <p class="lead text-xl text-muted-foreground mb-8">Achieving an 'Outstanding' or even 'Good' rating requires meticulous attention to detail. We've analysed hundreds of inspection reports from 2024 to identify the most common reasons for 'Requires Improvement' ratings.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">1. Incomplete Care Plans</h2>
      <p class="mb-6">The most frequent issue is care plans that don't reflect the current needs of the service user. Often, plans are generic and lack person-centred details.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">2. Medication Errors (MAR Charts)</h2>
      <p class="mb-6">Gaps in Medication Administration Records (MAR) are an immediate red flag. Missing signatures, unclear codes, or failure to record topical creams are common pitfalls.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">3. Staff Recruitment Checks</h2>
      <p class="mb-6">Failing to have a robust recruitment process is a major compliance breach. Missing references, gaps in employment history that aren't explained, or DBS checks that pre-date employment are critical errors.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">4. Lack of Mental Capacity Assessments (MCA)</h2>
      <p class="mb-6">Blanket decisions about capacity without specific, time-bound assessments for significant decisions (like bed rails or covert medication) are frequently cited.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">5. Poor Risk Management</h2>
      <p class="mb-6">Risk assessments that identify a risk but fail to specify the control measures—or where the control measures aren't followed in practice.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">6. Governance and Auditing</h2>
      <p class="mb-6">A lack of effective quality assurance systems. If you don't know things are going wrong before the CQC tells you, your 'Well-led' rating will suffer.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">7. Staff Training Gaps</h2>
      <p class="mb-6">Expired mandatory training or a lack of specialised training for specific conditions (e.g., dementia, diabetes, autism) relevant to the service users.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">8. Environment and Safety</h2>
      <p class="mb-6">For care homes, issues with fire safety, infection control, or general maintenance. For domiciliary care, failing to assess the safety of the home environment.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">9. Complaints Management</h2>
      <p class="mb-6">Not recording complaints, or more importantly, not demonstrating what was learned and changed as a result of a complaint.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">10. Notification Failures</h2>
      <p class="mb-6">Failing to notify the CQC of notifiable incidents (deaths, serious injuries, safeguarding allegations) without delay.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">How to Avoid These Pitfalls</h2>
      <p class="mb-6">Regular internal audits are your best defence. Don't wait for the CQC to find these issues. Use a digital system to flag training expiries, missing MAR entries, and incomplete care plans automatically.</p>
    `
  },
  "digital-vs-paper-roi-going-digital": {
    title: "Digital vs Paper: The ROI of Going Digital",
    category: "Digital Transformation",
    date: "15 Nov 2024",
    author: "Emma Richardson",
    readTime: "4 min read",
    content: `
      <p class="lead text-xl text-muted-foreground mb-8">The care sector has traditionally been heavy on paperwork. However, the push for digitisation is not just about saving trees—it's about saving time, reducing risk, and ultimately providing better care.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">The Hidden Cost of Paper</h2>
      <p class="mb-6">Paper records are fragile, easily lost, and difficult to analyse. Consider the time spent:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Printing and filing documents</li>
        <li>Searching for specific records during an inspection</li>
        <li>Deciphering handwriting</li>
        <li>Physically moving binders between locations</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Time Savings</h2>
      <p class="mb-6">Studies show that care staff spend up to 30% of their shift on documentation. Digital care planning can reduce this by half. Features like voice-to-text, drop-down menus, and duplicating recurring entries streamline the process significantly.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Risk Reduction</h2>
      <p class="mb-6">Digital systems provide an audit trail that paper cannot match. You can see exactly who edited a record and when. Mandatory fields ensure that critical information (like allergies or DNACPR status) cannot be skipped.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Real-Time Oversight</h2>
      <p class="mb-6">For managers, the biggest ROI is visibility. You can see the status of all compliance checks, care tasks, and incidents in real-time, from anywhere. This allows for proactive management rather than reactive fire-fighting.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">The Financial Case</h2>
      <p class="mb-6">While there is an upfront cost to software, the reduction in printing costs, storage space, and administrative hours often results in a net saving within the first 12 months. Plus, the reduced risk of regulatory enforcement action has its own invaluable financial benefit.</p>
    `
  }
};

export default function Article() {
  const params = useParams();
  const slug = params.slug;
  const article = articlesData[slug as keyof typeof articlesData];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">The article you are looking for does not exist.</p>
          <Button asChild>
            <Link href="/resources">Back to Resources</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Article Header */}
        <section className="bg-slate-50 py-16 border-b border-border/40">
          <div className="container max-w-4xl">
            <Link href="/resources" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Resources
            </Link>
            
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full bg-blue-100 text-primary text-xs font-medium">
                {article.category}
              </span>
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {article.readTime}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
              {article.title}
            </h1>
            
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500">
                  <User className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{article.author}</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {article.date}
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="rounded-full h-8 w-8">
                  <Share2 className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full h-8 w-8">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full h-8 w-8">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full h-8 w-8">
                  <Facebook className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Article Content */}
        <section className="py-16">
          <div className="container max-w-3xl">
            <div 
              className="prose prose-lg prose-slate max-w-none prose-headings:font-heading prose-headings:font-bold prose-a:text-primary hover:prose-a:text-primary/80"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
            
            {/* CTA Box */}
            <div className="mt-16 p-8 bg-slate-50 rounded-2xl border border-border/50 text-center">
              <h3 className="text-2xl font-heading font-bold mb-4">Ready to simplify your compliance?</h3>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Join hundreds of care businesses using CCMS to streamline their audits, staff compliance, and care planning.
              </p>
              <Button size="lg" className="rounded-full px-8" asChild>
                <a href="https://app.ccms.co.uk/register">Start Free Trial</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
