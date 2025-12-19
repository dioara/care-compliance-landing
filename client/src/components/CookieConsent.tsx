import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Show banner after a short delay
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-white border-t border-border shadow-[0_-4px_20px_rgba(0,0,0,0.1)] animate-in slide-in-from-bottom-full duration-500">
      <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex-1 pr-8">
          <h3 className="text-lg font-semibold mb-2">We value your privacy</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            We use cookies to enhance your browsing experience, serve personalised content, and analyse our traffic. 
            By clicking "Accept All", you consent to our use of cookies. Read our{" "}
            <a href="/privacy" className="text-primary hover:underline font-medium">Privacy Policy</a>.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
          <Button variant="outline" onClick={handleDecline} className="w-full sm:w-auto">
            Decline
          </Button>
          <Button onClick={handleAccept} className="w-full sm:w-auto">
            Accept All
          </Button>
        </div>
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 md:hidden text-muted-foreground hover:text-foreground"
        >
          <X className="h-5 w-5" />
          <span className="sr-only">Close</span>
        </button>
      </div>
    </div>
  );
}
