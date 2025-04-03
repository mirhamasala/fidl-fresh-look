
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Incentivizing a Better <br />
          <span className="text-fidl-light-blue">Filecoin Network</span>
        </h1>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          We help storage clients and Storage Providers meet their goals by solving problems in the Filecoin ecosystem, all while contributing to a better future.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="gradient-button">Apply for DataCap</Button>
          <Button variant="outline" className="outline-button">Learn more</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
