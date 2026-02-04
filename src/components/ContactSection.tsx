import { Mail, MapPin, Clock, Facebook, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isFallbackOpen, setIsFallbackOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `Contact Form: ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailto = `mailto:bas@prodiving.asia?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    // Attempt to open the user's mail client. If it doesn't open, show fallback dialog.
    try {
      window.location.href = mailto;
    } catch (err) {
      // ignore: some browsers may throw when opening mailto
    }

    // Show fallback after short delay so user can dismiss if mail client opened
    setTimeout(() => setIsFallbackOpen(true), 1100);
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      // optional: could show a toast; keep simple for now
    } catch (err) {
      // ignore
    }
  };

  return (
    <section id="contact" className="py-24 gradient-ocean-soft">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary uppercase tracking-[0.2em] text-sm font-medium mb-4">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Contact
            <span className="text-gradient-ocean"> Us</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Ready to book your adventure? Send us a message and we'll get back to you shortly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl gradient-ocean flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground mb-1">Email</h3>
                <a
                  href="mailto:bas@prodiving.asia"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  bas@prodiving.asia
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl gradient-ocean flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground mb-1">Location</h3>
                <p className="text-muted-foreground">
                  Koh Tao, Thailand
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl gradient-ocean flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground mb-1">Hours</h3>
                <p className="text-muted-foreground">
                  Open Daily: 7:00 AM - 9:00 PM
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div className="p-6 bg-card rounded-2xl shadow-card">
              <h4 className="font-heading font-bold text-foreground mb-4">Follow Us</h4>
              <div className="flex items-center gap-4">
                <a
                  href="https://facebook.com/prodivingasia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full gradient-ocean flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label="Visit our Facebook page"
                >
                  <Facebook className="w-5 h-5 text-primary-foreground" />
                </a>
                <a
                  href="https://instagram.com/prodivingasia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full gradient-ocean flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label="Visit our Instagram page"
                >
                  <Instagram className="w-5 h-5 text-primary-foreground" />
                </a>
                <a
                  href="https://wa.me/+31638697279"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full gradient-ocean flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label="Contact us on WhatsApp"
                >
                  <MessageCircle className="w-5 h-5 text-primary-foreground" />
                </a>
              </div>
            </div>

            <div className="p-6 bg-card rounded-2xl shadow-card">
              <h4 className="font-heading font-bold text-foreground mb-3">Quick Facts</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-tropical" />
                  PADI 5-Star Dive Center
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-tropical" />
                  A/C available: +300 THB/night
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-tropical" />
                  Professional certified instructors
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-tropical" />
                  Small group sizes
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Your Name
              </label>
              <Input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="John Doe"
                required
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Email Address
              </label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="john@example.com"
                required
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <Textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us about your plans..."
                required
                rows={4}
                className="w-full resize-none"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 font-heading font-semibold"
            >
              Send Message
            </Button>
          </form>

          <Dialog open={isFallbackOpen} onOpenChange={setIsFallbackOpen}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Mail Client Not Detected?</DialogTitle>
                <DialogDescription>
                  If your mail application didn't open, you can copy the message and send it manually, or click the link to open your mail client.
                </DialogDescription>
              </DialogHeader>

              <div className="mt-4 space-y-3">
                <div>
                  <p className="text-sm font-medium">Recipient</p>
                  <div className="flex items-center gap-2">
                    <a href="mailto:bas@prodiving.asia" className="text-primary">bas@prodiving.asia</a>
                    <Button size="sm" variant="outline" onClick={() => copyToClipboard("bas@prodiving.asia")}>
                      Copy
                    </Button>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium">Message</p>
                  <textarea
                    readOnly
                    value={`Subject: Contact Form: ${formData.name}\n\n${formData.message}`}
                    className="w-full rounded-md border px-3 py-2 text-sm"
                    rows={6}
                    aria-label="Your message to copy"
                  />
                  <div className="mt-2">
                    <Button size="sm" variant="outline" onClick={() => copyToClipboard(`Subject: Contact Form: ${formData.name}\n\n${formData.message}`)}>
                      Copy Message
                    </Button>
                  </div>
                </div>
              </div>

              <DialogFooter className="mt-4">
                <Button asChild>
                  <a href={`mailto:bas@prodiving.asia?subject=${encodeURIComponent(`Contact Form: ${formData.name}`)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`}>Open Mail Client</a>
                </Button>
                <Button variant="ghost" onClick={() => setIsFallbackOpen(false)}>Close</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
