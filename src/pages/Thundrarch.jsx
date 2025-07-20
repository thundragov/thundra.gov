import { Button } from "@/components/ui/button";
import { AnimatedMenuIcon } from "@/components/AnimatedMenuIcon";
import { Menu, X } from "lucide-react";
const logo = new URL(`${import.meta.env.BASE_URL}assets/logo32x32.png`, import.meta.url).href;
const bolt = new URL(`${import.meta.env.BASE_URL}assets/bolt128w.png`, import.meta.url).href;
import React, { useEffect, useRef, useState } from 'react';

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const headerRef = useRef(null);
  const boltRef = useRef(null);

  const [headerHeight, setHeaderHeight] = useState(0);
  const [boltMidX, setBoltMidX] = useState(0);

  useEffect(() => {
    function updateMeasurements() {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }

      if (boltRef.current) {
        const rect = boltRef.current.getBoundingClientRect();
        setBoltMidX(rect.left + rect.width * 0.4);
      }
    }

    updateMeasurements();
    setTimeout(() => {
      updateMeasurements();
      window.addEventListener('resize', updateMeasurements);
    }, 1);
    return () => window.removeEventListener('resize', updateMeasurements);
  }, []);

  const navItems = [
    { title: "Home", href: "/thundra.gov/" },
    { title: "Infrastructure", href: "/thundra.gov/#/infrastructure" },
    { title: "Defense", href: "/thundra.gov/#/defense" },
    { title: "Diplomacy", href: "/thundra.gov/#/diplomacy" },
  ];

  return (
    <div className="bg-gray-50 text-gray-900">

      {/* Sticky Header */}
      <div className="sticky top-0 bg-gray-50">

        {/* Top Banner */}
        <div className="w-full max-w-screen-lg mx-auto px-4 text-xs text-gray-800 py-0.25 flex items-center space-x-2">
          <img src={logo} alt="Thundra logo" className="w-3 h-3" />
          <span className="font-medium">An official website of the Thundran government</span>
        </div>

        {/* Top Header */}
        <header className="bg-[#002654] text-white shadow">
          <div className="w-full max-w-screen-lg mx-auto flex justify-between items-center">
            <h1 ref={headerRef} className="py-6 pl-6 text-3xl font-serif">The Office of the Thundrarch</h1>
            <div className="flex gap-4 pr-4">
              <div
                className="h-full absolute right-0 bg-white"
                style={{
                  left: boltMidX,
                  height: headerHeight,
                  zIndex: 0,
                  pointerEvents: 'none'
                }}
              />
              <img 
                src={bolt} 
                ref={boltRef} 
                alt="Thundra lightning bolt" 
                className="h-fit max-h-full object-contain" 
                style={{ height: headerHeight, zIndex: 1 }}
              />
            <Button
              variant="transparent"
              size="md"
              rounded={false}
              onClick={() => setMenuOpen(!menuOpen)}
              className="py-4 px-4 text-white my-auto"
            >
              <AnimatedMenuIcon open={menuOpen} />
            </Button>
            </div>
          </div>
        </header>

        {/* Navigation Dropdown (Below Header) */}
        {menuOpen && (
          <nav className="bg-[#204169] text-white shadow">
            <div className="w-full max-w-screen-lg mx-auto grid grid-cols-2 sm:grid-cols-4">
              {navItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="block bg-[#204169] p-1 text-center hover:bg-[#405C7F] transition"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </nav>
        )}

      </div>

      {/* Main Content */}
      <main className="px-6 py-8 max-w-4xl mx-auto">
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Welcome to the Third Republic of Thundra</h2>
          <p>
            The Third Republic of Thundra is...
          </p>
          <p>blah</p><p>blah</p><p>blah</p><p>blah</p><p>blah</p><p>blah</p><p>blah</p><p>blah</p><p>blah</p><p>blah</p>
          <p>blah</p><p>blah</p><p>blah</p><p>blah</p><p>blah</p><p>blah</p><p>blah</p><p>blah</p><p>blah</p><p>blah</p>
        </section>

        <section className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Latest Announcements</h3>
          <ul className="list-disc list-inside">
            <li>???</li>
            <li>???</li>
            <li>???</li>
          </ul>
        </section>

      </main>

      {/* bottom Panel */}
      <footer className="bg-[#204169] text-sm text-gray-300 p-4 pb-6 mt-10">
        <div className="w-full max-w-screen-lg mx-auto py-4 text-base py-0.25 flex items-center space-x-2">
          <span className="font-bold">Explore the Government:</span>
        </div>
        <div className="max-w-screen-lg mx-auto flex flex-wrap justify-between underline">
          <a href="/thundra.gov/" className="mb-2">
            Home
          </a>
          <a href="/thundra.gov/thundrarch" className="mb-2">
            Office of the Thundrarch
          </a>
          <a href="/thundra.gov/infrastructure" className="mb-2">
            Infrastructure
          </a>
          <a href="/thundra.gov/defense" className="mb-2">
            Defense
          </a>
          <a href="/thundra.gov/diplomacy" className="mb-2">
            Diplomacy
          </a>
          <a href="https://discord.gg/Jwqvk2GnNs" className="mb-2">
            Contact Us
          </a>
        </div>
      </footer>

    </div>
  );
}