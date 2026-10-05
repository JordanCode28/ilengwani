import Image from "next/image";
import { Navbar } from "@/components/Layout/Navbar";
import { Hero } from "@/components/features/landing/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {/* sections suivantes à venir */}
      </main>
    </>
  );
}



