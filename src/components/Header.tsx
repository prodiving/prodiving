import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#rooms", label: "Accommodation" },
    { href: "#tours", label: "Daily Tours" },
    { href: "#instructors", label: "Our Team" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 gradient-ocean shadow-ocean">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold text-xl">D</span>
            </div>
            <div className="flex flex-col">
              <span className="text-primary-foreground font-heading font-bold text-xl tracking-tight">
                Pro Diving Asia
              </span>
              <span className="text-primary-foreground/80 text-xs font-light tracking-wider">
                Pro Divers in Aia
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-primary-foreground/90 hover:text-primary-foreground font-medium text-sm uppercase tracking-wide transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Contact Info Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="mailto:bas@prodiving.asia"
              className="flex items-center gap-2 text-primary-foreground/90 hover:text-primary-foreground text-sm transition-colors"
            >
              <Mail className="w-4 h-4" />
              bas@prodiving.asia
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-primary-foreground hover:bg-primary-foreground/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-primary-foreground/20">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-primary-foreground/90 hover:text-primary-foreground font-medium text-sm uppercase tracking-wide transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="mailto:bas@prodiving.asia
                className="flex items-center gap-2 text-primary-foreground/90 text-sm pt-4 border-t border-primary-foreground/20"
              >
                <Mail className="w-4 h-4" />
bas@prodiving.asia              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
