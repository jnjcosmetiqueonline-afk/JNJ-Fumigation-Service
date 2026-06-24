import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { Trust } from "@/components/sections/trust";
import { Services } from "@/components/sections/services";
import { Gallery } from "@/components/sections/gallery";
import { Process } from "@/components/sections/process";
import { WhyChoose } from "@/components/sections/why-choose";
import { Stats } from "@/components/sections/stats";
import { Testimonials } from "@/components/sections/testimonials";
import { ServiceAreas } from "@/components/sections/service-areas";
import { Faq } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";
import { FloatingActions } from "@/components/floating-actions";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Trust />
        <Services />
        <Gallery />
        <Process />
        <WhyChoose />
        <Stats />
        <Testimonials />
        <ServiceAreas />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
