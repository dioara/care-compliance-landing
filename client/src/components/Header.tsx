import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { name: "Features", href: "/#features" },
    { name: "Pricing", href: "/#pricing" },
    { name: "Resources", href: "/resources" },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith("/#")) {
      // If we are on the home page, scroll to section
      if (location === "/") {
        const element = document.querySelector(href.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          setIsOpen(false);
          return;
        }
      }
      // Otherwise navigate to the page
      window.location.href = href;
    } else {
      // Handle standard links (like /resources)
      if (href.startsWith("/")) {
        // Use wouter navigation for internal links to avoid full reload if possible, 
        // but window.location.href is safer for mixed anchor/path logic. 
        // For simplicity and consistency with the anchor logic above, we'll use window.location.href 
        // or just let the default anchor behavior happen if we didn't preventDefault.
        // However, the onClick prevents default.
        window.location.href = href;
      } else {
        window.location.href = href;
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 font-heading font-bold text-xl text-primary">
            <ShieldCheck className="h-8 w-8" />
            <span>Care Compliance</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="https://app.ccms.co.uk" className="text-sm font-medium text-muted-foreground hover:text-primary">
            Log in
          </a>
          <Button asChild className="rounded-full px-6">
            <a href="https://app.ccms.co.uk/register">Start Free Trial</a>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-8 mt-8">
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className="text-lg font-medium text-muted-foreground hover:text-primary"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
              <div className="flex flex-col gap-4">
                <Button variant="outline" asChild className="w-full justify-center">
                  <a href="https://app.ccms.co.uk">Log in</a>
                </Button>
                <Button asChild className="w-full justify-center">
                  <a href="https://app.ccms.co.uk/register">Start Free Trial</a>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
