import Image from "next/image";
import { Navbar } from "@/components/Layout/Navbar";
import { Hero } from "@/components/features/landing/Hero";
import { NonMedicalNotice } from "@/components/features/landing/NonMedicalNotice";
import { FeatureCards } from "@/components/features/landing/FeatureCards";
import { Footer } from "@/components/Layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <NonMedicalNotice/>
        <FeatureCards/>
      </main>
      <Footer/>
    </>
  );
}



