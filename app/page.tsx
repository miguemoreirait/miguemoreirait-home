import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { AboutMe } from "@/components/AboutMe";
import { Skills } from "@/components/Skills";
import { Services } from "@/components/Services";
import { Work } from "@/components/Work";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen text-ink">
      <Nav />
      <Hero />
      <AboutMe />
      <Skills />
      <Services />
      <Contact />
      <Work />
      <Faq />
      <Footer />
    </div>
  );
}
