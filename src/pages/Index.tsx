import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DivingCoursesSection from "@/components/DivingCoursesSection";
import InstructorsSection from "@/components/InstructorsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <DivingCoursesSection />
      <InstructorsSection />
      <ContactSection />
      <Footer />
      <LiveChat />
    </div>
  );
};

export default Index;
