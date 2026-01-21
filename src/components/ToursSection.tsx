import { Ship, Bike, Umbrella, Fish, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const tours = [
  {
    icon: Ship,
    title: "Island Hopping",
    description: "Explore stunning nearby islands with crystal clear waters and pristine beaches",
    duration: "Full Day",
    includes: ["Boat transfer", "Snorkeling gear", "Lunch", "Insurance"],
  },
  {
    icon: Fish,
    title: "Fishing Trips",
    description: "Experience traditional Thai fishing or sport fishing in the Gulf of Thailand",
    duration: "Half/Full Day",
    includes: ["Equipment", "Bait", "Refreshments", "Insurance"],
  },
  {
    icon: Umbrella,
    title: "Beach Tours",
    description: "Visit the most beautiful hidden beaches and secret coves around the island",
    duration: "Half Day",
    includes: ["Transport", "Beach chairs", "Snacks", "Insurance"],
  },
  {
    icon: Bike,
    title: "Bike Rental",
    description: "Explore the island at your own pace with our quality motorbikes and bicycles",
    duration: "Daily",
    includes: ["Helmet", "Map", "24/7 Support", "Insurance"],
  },
];

const ToursSection = () => {
  return (
    <section id="tours" className="py-24 gradient-ocean-soft">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary uppercase tracking-[0.2em] text-sm font-medium mb-4">
            Adventures Await
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Daily
            <span className="text-gradient-ocean"> Tours & Activities</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From fishing expeditions to beach hopping, we've got your adventure covered.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 bg-tropical/10 px-6 py-3 rounded-full">
            <Shield className="w-5 h-5 text-tropical" />
            <span className="text-foreground font-semibold">All Tours Include Insurance</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tours.map((tour, index) => (
            <Card
              key={tour.title}
              className="border-0 shadow-card hover:shadow-ocean transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="w-14 h-14 rounded-2xl gradient-ocean flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <tour.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground">
                  {tour.title}
                </h3>
                <div className="flex items-center gap-1 text-muted-foreground text-sm">
                  <Clock className="w-4 h-4" />
                  {tour.duration}
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm mb-4">
                  {tour.description}
                </p>
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-foreground uppercase tracking-wide">
                    Includes:
                  </p>
                  <ul className="space-y-1">
                    {tour.includes.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button
                  className="w-full mt-6 bg-primary hover:bg-primary/90"
                  asChild
                >
                  <a href={`mailto:bas@divepro.asia?subject=Tour Inquiry: ${tour.title}`}>
                    Book This Tour
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToursSection;
