import { Wind } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
const rooms = [{
  id: 1,
  name: "Standard Room",
  description: "Comfortable and cozy room perfect for budget-conscious travelers",
  price: "800",
  features: ["Fan Cooling", "Private Bathroom", "Free WiFi", "Daily Cleaning"],
  badge: null,
  image: 1
}, {
  id: 2,
  name: "Deluxe Room",
  description: "Spacious room with modern amenities and garden view",
  price: "1,200",
  features: ["Fan Cooling", "Private Bathroom", "Free WiFi", "Mini Fridge", "Balcony"],
  badge: "Popular",
  image: 2
}, {
  id: 3,
  name: "Superior Room",
  description: "Premium comfort with enhanced furnishings and extra space",
  price: "1,800",
  features: ["Fan Cooling", "Private Bathroom", "Free WiFi", "Mini Fridge", "Balcony", "TV"],
  badge: null,
  image: 3
}, {
  id: 4,
  name: "Luxury Suite",
  description: "Top-tier luxury with stunning views and premium amenities",
  price: "2,800",
  features: ["A/C Available", "Private Bathroom", "Free WiFi", "Mini Bar", "Ocean View", "King Bed"],
  badge: "Best Value",
  image: 4
}];
const roomImages: Record<number, string> = {
  1: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=500&fit=crop",
  // Standard room
  2: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=400&h=500&fit=crop",
  // Deluxe room
  3: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=500&fit=crop",
  // Superior room
  4: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=500&fit=crop" // Luxury suite
};
const RoomsSection = () => {
  return <section id="rooms" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary uppercase tracking-[0.2em] text-sm font-medium mb-4">
            Accommodation
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Choose Your
            <span className="text-gradient-ocean"> Paradise</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From budget-friendly standard rooms to luxurious suites, we have the perfect stay for you.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 bg-accent/10 text-accent-foreground px-4 py-2 rounded-full">
            <Wind className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-secondary-foreground bg-muted">A/C Available: +300 THB/night</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rooms.map((room, index) => <Card key={room.id} className="group overflow-hidden border-0 shadow-card hover:shadow-ocean transition-all duration-300 animate-fade-in" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <CardHeader className="p-0 relative">
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={roomImages[room.id]} alt={room.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                {room.badge && <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground font-semibold">
                    {room.badge}
                  </Badge>}
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="text-xl font-heading font-bold text-foreground mb-2">
                  {room.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {room.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {room.features.slice(0, 4).map(feature => <span key={feature} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-md">
                      {feature}
                    </span>)}
                </div>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0 flex items-center justify-between">
                <div>
                  <span className="text-2xl font-heading font-bold text-primary">฿{room.price}</span>
                  <span className="text-muted-foreground text-sm">/night</span>
                </div>
                <Button size="sm" className="bg-primary hover:bg-primary/90" asChild>
                  <a href="mailto:bas@prodiving.asia?subject=Room Booking: {{room.name}}">
                    Book Now
                  </a>
                </Button>
              </CardFooter>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default RoomsSection;