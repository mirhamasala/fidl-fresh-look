
import React from 'react';
import { Button } from '@/components/ui/button';

const StartJourney = () => {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Start Your Journey</h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          Ready to begin? Apply for DataCap now and start leveraging the power of decentralized storage on the Filecoin network.
        </p>
        <Button className="gradient-button">Apply for DataCap</Button>
      </div>
    </section>
  );
};

export default StartJourney;
