
import React from 'react';
import FeatureCard from './FeatureCard';
import { FileText, Users, BarChart3, LineChart, Clock } from 'lucide-react';

const Services = () => {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto">
        <h2 className="section-heading">Our Services</h2>
        <p className="section-subheading">
          We offer a range of services to help you succeed in the Filecoin ecosystem.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard 
            icon={<FileText size={20} />}
            title="Fidl Plus Notary Allocation"
            description="Our team of experts helps allocate DataCap to verified clients, ensuring your data storage needs are met efficiently and securely on the Filecoin network."
            linkText="Learn More"
            linkUrl="/allocation"
          />
          <FeatureCard 
            icon={<Users size={20} />}
            color="text-fidl-light-blue"
            title="Application Support"
            description="We provide comprehensive support for your Filecoin applications, helping you resolve issues quickly and optimize your Filecoin integration."
            linkText="Get Help"
            linkUrl="/support"
          />
          <FeatureCard 
            icon={<BarChart3 size={20} />}
            title="Custom API Solutions"
            description="Get tailored API solutions that integrate seamlessly with your existing systems, allowing you to leverage the full power of Filecoin with minimal friction."
            linkText="Find More"
            linkUrl="/api"
          />
          <FeatureCard 
            icon={<Clock size={20} />}
            color="text-fidl-light-blue"
            title="Quick Service Testing"
            description="Test your Filecoin services quickly and efficiently with our comprehensive testing suite, ensuring they meet your standards before deployment."
            linkText="Check"
            linkUrl="/testing"
          />
          <FeatureCard 
            icon={<LineChart size={20} />}
            title="Labeled Trading Solutions"
            description="Access our specialized trading solutions designed specifically for the Filecoin ecosystem, optimized for performance and reliability."
            linkText="Trade Resource"
            linkUrl="/trading"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
