
import React from 'react';
import ToolCard from './ToolCard';
import { FileText, BarChart3, FileX } from 'lucide-react';

const Tools = () => {
  return (
    <section className="py-16 px-6 bg-fidl-card-bg">
      <div className="container mx-auto">
        <h2 className="section-heading">Tools</h2>
        <p className="section-subheading">
          We've built tools to help you interact with the Filecoin network.
        </p>
        
        <div className="flex flex-wrap justify-center gap-12 md:gap-24">
          <ToolCard 
            icon={<FileText size={24} />}
            title="Allocation Directory" 
          />
          <ToolCard 
            icon={<BarChart3 size={24} />}
            title="DataCap Stats Dashboard" 
          />
          <ToolCard 
            icon={<FileX size={24} />}
            title="DataCap Removal Tool" 
          />
        </div>
        
        <div className="flex justify-center mt-12 gap-10">
          <a href="#" className="text-fidl-purple hover:underline flex items-center gap-1 text-sm">
            Check our GitHub
          </a>
          <a href="#" className="text-fidl-purple hover:underline flex items-center gap-1 text-sm">
            Visit SPs
          </a>
        </div>
      </div>
    </section>
  );
};

export default Tools;
