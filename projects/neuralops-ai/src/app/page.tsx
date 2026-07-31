import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { TrustedCompaniesSection } from "@/components/trusted-companies-section";
import { FeaturesSection } from "@/components/features-section";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <TrustedCompaniesSection />
        <FeaturesSection />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}