
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import IncentivizingApproach from '@/components/IncentivizingApproach';
import FilecoinPlus from '@/components/FilecoinPlus';
import DataCapProjects from '@/components/DataCapProjects';
import CallToAction from '@/components/CallToAction';
import Tools from '@/components/Tools';
import Services from '@/components/Services';
import StartJourney from '@/components/StartJourney';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <IncentivizingApproach />
        <FilecoinPlus />
        <DataCapProjects />
        <CallToAction />
        <Tools />
        <Services />
        <StartJourney />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
