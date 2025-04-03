
import React from 'react';
import FeatureCard from './FeatureCard';
import { Database, LineChart, Briefcase } from 'lucide-react';

const IncentivizingApproach = () => {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto">
        <h2 className="section-heading">Our Approach to Incentivizing the<br />Filecoin Ecosystem</h2>
        <p className="section-subheading">
          We optimize Filecoin ecosystem incentives by building tools that align Storage Client and Storage Provider interests to help create a more robust decentralized storage network.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard 
            icon={<Database size={20} />}
            title="DataCap Allocation"
            description="We connect trusted notaries with clients seeking DataCap, making reliable storage accessible to more users while ensuring proper verification."
            linkText="View our offerings"
            linkUrl="/datacap"
          />
          <FeatureCard 
            icon={<LineChart size={20} />}
            color="text-fidl-light-blue"
            title="Real-time Insights"
            description="Get accurate, real-time data about the Filecoin network performance, storage capacity, and pricing to make informed decisions."
            linkText="Visit our Filecoin Explorer Dashboard"
            linkUrl="/insights"
          />
          <FeatureCard 
            icon={<Briefcase size={20} />}
            title="Enterprise API Tools"
            description="Our enterprise-grade APIs simplify Filecoin integration into your business workflow with reliable data access and robust filtering options."
            linkText="Explore Tools"
            linkUrl="/tools"
          />
        </div>
      </div>
    </section>
  );
};

export default IncentivizingApproach;
