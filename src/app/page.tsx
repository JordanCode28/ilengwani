import { Navbar } from "@/components/Layout/Navbar";
import { Hero } from "@/components/features/landing/Hero";
import { NonMedicalNotice } from "@/components/features/landing/NonMedicalNotice";
import { FeatureCards } from "@/components/features/landing/FeatureCards";
import { Footer } from "@/components/Layout/Footer";
import { PresentationSections } from "@/components/features/landing/PresentationSections";
import { FinalCta } from "@/components/features/landing/FinalCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <NonMedicalNotice/>
        <FeatureCards/>
        <PresentationSections/>
        <FinalCta/>
      </main>
      <Footer/>
    </>
  );
}



