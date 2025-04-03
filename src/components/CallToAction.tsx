
import React from 'react';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Do you have an idea for another offering?</h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          If you'd like to suggest a new feature or service for the Filecoin network, we'd love to hear from you. Your feedback helps us improve!
        </p>
        <Button className="gradient-button">Talk to Fidl</Button>
      </div>
    </section>
  );
};

export default CallToAction;
