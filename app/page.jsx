import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import ProblemBand from '@/components/ProblemBand';
import Modules from '@/components/Modules';
import HowItWorks from '@/components/HowItWorks';
import ContractTypes from '@/components/ContractTypes';
import AISection from '@/components/AISection';
import Roles from '@/components/Roles';
import FieldTools from '@/components/FieldTools';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProblemBand />
        <Modules />
        <HowItWorks />
        <ContractTypes />
        <AISection />
        <Roles />
        <FieldTools />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
