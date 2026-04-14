import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import FounderAuthority from '@/components/FounderAuthority';
import ProblemBand from '@/components/ProblemBand';
import Modules from '@/components/Modules';
import HowItWorks from '@/components/HowItWorks';
import ContractTypes from '@/components/ContractTypes';
import FinancialOversight from '@/components/FinancialOversight';
import AISection from '@/components/AISection';
import SecurityStandards from '@/components/SecurityStandards';
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
        <FounderAuthority />
        <ProblemBand />
        <Modules />
        <HowItWorks />
        <ContractTypes />
        <FinancialOversight />
        <AISection />
        <SecurityStandards />
        <Roles />
        <FieldTools />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
