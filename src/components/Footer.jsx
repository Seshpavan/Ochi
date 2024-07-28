import React from 'react';
import { Link } from 'react-router-dom';
function App() {
  return (
    <div>
      <footer className="bg-gray-200 py-12 pl-10 md:pl-20">
        <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-start gap-4">
            <Link to="/" className="flex items-center gap-2" >
              <span className="font-semibold text-lg">ochi.</span>
            </Link>
            <p className="text-muted-foreground max-w-[70vw] md:max-w-[25ch]">
              ochi is a leading presentations agency that creates stunning visuals for businesses of all sizes.
            </p>
          </div>
          <div className="grid gap-2">
            <h4 className="font-semibold">Pages</h4>
            <Link to="#" className="hover:underline underline-offset-4 text-sm" >
              Home
            </Link>
            <Link to="#" className="hover:underline underline-offset-4 text-sm" >
              Services
            </Link>
            <Link to="#" className="hover:underline underline-offset-4 text-sm" >
              About
            </Link>
            <Link to="#" className="hover:underline underline-offset-4 text-sm" >
              Contact
            </Link>
          </div>
          <div className="grid gap-2">
            <h4 className="font-semibold">Services</h4>
            <Link to="#" className="hover:underline underline-offset-4 text-sm" >
              Presentations
            </Link>
            <Link to="#" className="hover:underline underline-offset-4 text-sm" >
              Branding
            </Link>
            <Link to="#" className="hover:underline underline-offset-4 text-sm" >
              Design
            </Link>
            <Link to="#" className="hover:underline underline-offset-4 text-sm" >
              Consulting
            </Link>
          </div>
          <div className="grid gap-2">
            <h4 className="font-semibold">Contact</h4>
            <p className="text-sm">123 Main St, Anytown USA</p>
            <p className="text-sm">hello@ochi.design</p>
            <p className="text-sm">(555) 555-5555</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;