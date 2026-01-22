import { ChevronDown, Shield, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen gradient-ocean flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-foreground/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-foreground/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary-foreground/80 uppercase tracking-[0.3em] text-sm font-medium mb-6 animate-fade-in">
            Welcome to Paradise
          </p>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-primary-foreground mb-6 leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
            ProDiving
            <span className="block text-3xl md:text-4xl lg:text-5xl font-light mt-2 text-primary-foreground/90">
              Asia
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/85 max-w-2xl mx-auto mb-8 font-light animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Your Gateway to Underwater Adventures & Tropical Relaxation
          </p>

          {/* Feature badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Shield className="w-4 h-4 text-primary-foreground" />
              <span className="text-primary-foreground text-sm font-medium">Insurance Included</span>
            </div>
            <div className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Star className="w-4 h-4 text-primary-foreground" />
              <span className="text-primary-foreground text-sm font-medium">Professional Instructors</span>
            </div>
            <div className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Users className="w-4 h-4 text-primary-foreground" />
              <span className="text-primary-foreground text-sm font-medium">Daily Tours Available</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button
              size="lg"
              className="bg-primary-foreground text-ocean-mid hover:bg-primary-foreground/90 font-heading font-semibold px-8 py-6 text-lg shadow-ocean"
              asChild
            >
              <a href="#rooms">View Accommodation</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 font-heading font-semibold px-8 py-6 text-lg bg-transparent"
              asChild
            >
              <a href="#tours">Explore Tours</a>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-primary-foreground/60" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
