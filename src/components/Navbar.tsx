
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="py-4 px-6 md:px-12 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img src="/lovable-uploads/02695f96-7dca-4fa9-b71a-74a9f0c4b38b.png" alt="Fidl Logo" className="w-8 h-8" />
        <span className="font-bold text-lg">Fidl Network</span>
      </div>
      
      <div className="hidden md:flex items-center gap-6">
        <Link to="/" className="text-sm text-foreground hover:text-fidl-purple transition-colors">Home</Link>
        <Link to="/about" className="text-sm text-foreground hover:text-fidl-purple transition-colors">About the Filecoin Network</Link>
        <Link to="/ecosystem" className="text-sm text-foreground hover:text-fidl-purple transition-colors">Ecosystem</Link>
      </div>
      
      <Button className="gradient-button">Apply for DataCap</Button>
    </nav>
  );
};

export default Navbar;
