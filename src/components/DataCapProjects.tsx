
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DataCapProjects = () => {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto">
        <h2 className="section-heading">Have A Project That Needs DataCap?</h2>
        <p className="section-subheading">
          Fidl can help you find the right path to secure DataCap for your storage needs.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="feature-card">
            <h3 className="font-bold text-lg">Open Data Pathway</h3>
            <p className="text-sm text-muted-foreground mb-4">
              The Open Data Program provides DataCap for publicly available, retrievable data that benefits the public. This pathway is ideal for academic institutions, research organizations, public archives, and more. Data must remain freely accessible and provide value to the community.
            </p>
            <Button variant="link" className="card-link p-0">
              Apply for the Open Data Program <ArrowRight size={16} />
            </Button>
          </div>
          
          <div className="feature-card">
            <h3 className="font-bold text-lg">Enterprise Partner Deal Railway</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Our Enterprise Partner Deal Railway helps large storage users seamlessly implement Filecoin storage. We handle the complex aspects of network integration, allowing you to focus on your business while accessing decentralized storage benefits.
            </p>
            <Button variant="link" className="card-link p-0">
              Contact Fidl Enterprise <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataCapProjects;
