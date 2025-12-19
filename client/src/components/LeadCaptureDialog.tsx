import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Loader2, Download } from "lucide-react";
import { toast } from "sonner";

interface LeadCaptureDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  resourceTitle: string;
}

export default function LeadCaptureDialog({ isOpen, onClose, onSuccess, resourceTitle }: LeadCaptureDialogProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [consent, setConsent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    if (!consent) {
      toast.error("Please agree to the privacy policy");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // In a real app, you would send the email to your backend/CRM here
    console.log(`Lead captured for ${resourceTitle}: ${email}`);

    setIsSubmitting(false);
    toast.success("Thank you! Your download is starting.");
    onSuccess();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Download {resourceTitle}</DialogTitle>
          <DialogDescription>
            Enter your email address to unlock this free template and receive updates on CQC compliance.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 py-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="name@carehome.co.uk"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="flex items-start space-x-2">
            <Checkbox 
              id="consent" 
              checked={consent}
              onCheckedChange={(checked) => setConsent(checked as boolean)}
            />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="consent"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I agree to receive communications from Care Compliance System.
              </label>
              <p className="text-xs text-muted-foreground">
                You can unsubscribe at any time. We respect your privacy.
              </p>
            </div>
          </div>

          <DialogFooter>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <Download className="mr-2 h-4 w-4" />
                  Download Template
                </>
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
