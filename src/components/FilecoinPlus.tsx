
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const FilecoinPlus = () => {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto">
        <h2 className="section-heading">Understanding Filecoin Plus</h2>
        <p className="section-subheading">
          A way for Storage Clients, Notaries, and Storage Providers to work together to create trusted relationships.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <div className="rounded-lg overflow-hidden h-full">
            <img 
              src="/lovable-uploads/02695f96-7dca-4fa9-b71a-74a9f0c4b38b.png" 
              alt="Filecoin Library" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex flex-col gap-8">
            <div className="feature-card">
              <h3 className="font-bold text-lg text-fidl-light-blue">Filecoin Plus (Fil+)</h3>
              <p className="text-sm text-muted-foreground">
                Filecoin Plus is a program that helps clients store real data on the Filecoin network by incentivizing storage providers to take their data through DataCap allocation.
              </p>
              <Button variant="link" className="card-link p-0">
                Learn more <ArrowRight size={16} />
              </Button>
            </div>
            
            <div className="feature-card">
              <h3 className="font-bold text-lg">DataCap</h3>
              <p className="text-sm text-muted-foreground">
                DataCap represents a Storage Client's allowance for storing data at a subsidized rate. When a Client uses DataCap to pay for storage, the Storage Provider receives a 10x increase in block rewards for that storage. DataCap is allocated by Notaries, trusted community members who verify Clients' data needs.
              </p>
              <Button variant="link" className="card-link p-0">
                Learn more <ArrowRight size={16} />
              </Button>
            </div>
            
            <div className="feature-card">
              <h3 className="font-bold text-lg">Notaries</h3>
              <p className="text-sm text-muted-foreground">
                Notaries are trusted community members who verify Storage Clients' data needs and grant DataCap. They review applications to ensure the data is legitimate and benefits the network. Notaries have allocations they can give to clients who meet their criteria.
              </p>
              <Button variant="link" className="card-link p-0">
                Learn more <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilecoinPlus;
