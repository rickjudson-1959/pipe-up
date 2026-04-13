import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import ProblemBand from '@/components/ProblemBand';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import Audience from '@/components/Audience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProblemBand />
        <HowItWorks />
        <Features />
        <Audience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
