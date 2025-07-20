import { Button } from "@/components/ui/button";
import { AnimatedMenuIcon } from "@/components/AnimatedMenuIcon";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo32x32.png";
import bolt from "@/assets/bolt128w.png";
import thundrail from "@/assets/thundrail.svg";
import React, { useEffect, useRef, useState } from 'react';

import economic_development from '@/assets/economic_development.png';
import resource_abundance from '@/assets/resource_abundance.png';
import public_transit from '@/assets/public_transit.png';

import yalra from '@/assets/yalra.png';
import kraftia from '@/assets/kraftia.png';
import ritannia from '@/assets/ritannian_republic.png';
import aglium from '@/assets/aglium_theocracy.png';

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
    { title: "Office of the Thundrarch", href: "/thundra.gov/thundrarch" },
    { title: "Defense", href: "/thundra.gov/defense" },
    { title: "Diplomacy", href: "/thundra.gov/diplomacy" },
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
            <h1 ref={headerRef} className="py-6 pl-6 text-3xl font-serif">The Ministry of Development</h1>
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

        {/* Announcement Banner */}
        <div className="bg-[#D94141]">
            <div className="w-full max-w-screen-lg mx-auto px-4 text-xs text-gray-50 py-0.25 flex items-center space-x-2">
                <span className="font-medium whitespace-nowrap">
                    🛈 The following Thundrail lines are blocked to disrupt enemy logistics:
                </span>

                <div className="relative overflow-hidden flex-1">
                    <div className="marquee whitespace-nowrap">
                    <span className="inline-block mx-[12.5px]">
                        Donr's Gift–Crannog, Port Zodran–Viconi, Port Zodran–Arboria, Port Zodran–Eiluran, Eiluran–Cauldra, and Cauldra–Spawn
                    </span>
                    <span className="inline-block mx-[12.5px]">
                        Donr's Gift–Crannog, Port Zodran–Viconi, Port Zodran–Arboria, Port Zodran–Eiluran, Eiluran–Cauldra, and Cauldra–Spawn
                    </span>
                    </div>
                </div>
            </div>
        </div>

      </div>

      {/* Main Content */}
      <main className="px-6 py-0 max-w-6xl mx-auto space-y-10">

        {/* 0. Section Nav */}
        <nav className="py-2 mb-6 flex justify-center">
            <ul className="flex space-x-6 text-sm font-semibold text-gray-700">
            <li><a href="#mission" className="hover:underline">Our Mission</a></li>
            <li><a href="#map" className="hover:underline">Thundrail Map</a></li>
            <li><a href="#news" className="hover:underline">News</a></li>
            <li><a href="#partnerships" className="hover:underline">International Partnerships</a></li>
            </ul>
        </nav>

        {/* 1. OUR MISSION */}
        <section id="mission" className="space-y-5 scroll-mt-36">
            <h2 className="text-3xl font-bold text-gray-800 font-serif">Our Mission</h2>
            <blockquote className="border-l-4 border-blue-700 pl-4 text-lg italic text-gray-700">
                “To build national unity by bringing economic development, resource abundance, and public transit to the farthest reaches of the Republic.”
            </blockquote>

            {/* Mission Breakdown Cards */}
            <div className="space-y-12">

                {/* Item 1 - Left Image */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <img src={economic_development} alt="Westguard Quarry" className="w-full md:w-1/2 rounded shadow" />
                    <div className="md:w-1/2 text-gray-700">
                    <h3 className="text-xl font-semibold mb-2">Economic Development</h3>
                    <p>Lorem ipsum dolor sit amet</p>
                    </div>
                </div>

                {/* Item 2 - Right Image */}
                <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-6">
                    <img src={resource_abundance} alt="Nexa Industrial Complex" className="w-full md:w-1/2 rounded shadow" />
                    <div className="md:w-1/2 text-gray-700">
                    <h3 className="text-xl font-semibold mb-2">Resource Abundance</h3>
                    <p>Lorem ipsum dolor sit amet</p>
                    </div>
                </div>

                {/* Item 3 - Left Image */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <img src={public_transit} alt="Port Zodran to Yalra Rail Line" className="w-full md:w-1/2 rounded shadow" />
                    <div className="md:w-1/2 text-gray-700">
                    <h3 className="text-xl font-semibold mb-2">Public Transit</h3>
                    <p>From frozen tundras to swmpy coast, Thundrail ensures that no citizen is left isolated. To further this mission, we are undergoing a complete rail overhaul to dramatically increase the speed, simplicity, and access to Thundrail.</p>
                    <br></br>
                    <p>Beyond domestic expansion, we are integrating our infrastructure with nearby and friendly nations to grow Thundra's influence, reputation, economy, and activity.</p>
                    </div>
                </div>
                
            </div>
        </section>

        {/* 2. THUNDRAIL MAP */}
        <section id="map" className="scroll-mt-36">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 font-serif">Thundrail Map</h2>
            <div className="overflow-x-auto w-full flex justify-center">
                <img src={thundrail} alt="Thundrail Map" className="w-9/10 rounded shadow" />
            </div>
            <p className="flex justify-center italic text-gray-600 text-sm">Last updated 18 July 2025.</p>
        </section>

        {/* 3. NEWS */}
        <section id="news" className="scroll-mt-36">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 font-serif">News</h2>
            <p className="text-gray-600">Coming soon: national infrastructure updates, project launches, and more.</p>
        </section>

        {/* 4. INTERNATIONAL PARTNERSHIPS */}
        <section id="partnerships" className="scroll-mt-36">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 font-serif">International Partnerships</h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700">
            <div>
                <h3 className="font-semibold text-lg">
                    Commonwealth of Yalra <img src={yalra} className="h-4 inline align-middle ml-1 outline-1 outline-gray-500" alt="Yalra flag"/>
                </h3>
                <p className="mb-1">Collaborative project to construct and maintain an underwater rail line connecting Port Zodran and Saxanšèh, the longest active rail line in the world.</p>
                <a href="https://docs.google.com/document/d/1aZfoenUqGTyl7XMnW_OSe7EU3nuUCc6EuCzid2eWh3o/" className="text-blue-700 underline text-sm">West Fortica Infrastructure Agreement</a>
            </div>
            <div>
                <h3 className="font-semibold text-lg">
                    Kraftia <img src={kraftia} className="h-4 inline align-middle ml-1 outline-1 outline-gray-500" alt="Kraftia flag"/>
                </h3>
                <p className="mb-1">Split efforts to construct the underground "Fossil Line" connecting Crannog City and Kraftia City.</p>
                <a href="https://docs.google.com/document/d/16XaKPH1T5YcgkLL2snWnUxxRXompjVDpnzMpW6hoZYA/edit?tab=t.0" className="text-blue-700 underline text-sm">East Fortica Infrastructure Agreement</a>
            </div>
            <div>
                <h3 className="font-semibold text-lg">
                    Fourth Republic of Ritannia <img src={ritannia} className="h-4 inline align-middle ml-1 outline-1 outline-gray-500" alt="Ritannian Empire flag"/>
                </h3>
                <p className="mb-1">Resource sharing from certain farms in critical industries. Also, maintenance and planned upgrades of the Port Zodran–Viconi line.</p>
                <a className="text-gray-500 text-sm">No Formal Agreement</a>
            </div>
            <div>
                <h3 className="font-semibold text-lg">
                    Aglium Theocracy <img src={aglium} className="h-4 inline align-middle ml-1 outline-1 outline-gray-500" alt="Aglium Theocracy flag"/>
                </h3>
                <p className="mb-1">Joint work constructing a rail line to connect Aglium and Tortuga, integrating the young nation with the international rail grid for the first time.</p>
                <a href="https://docs.google.com/document/d/15TrAolXgagI8YITSZE5UOCAPiABD6stR_tAu53CWwuI" className="text-blue-700 underline text-sm">North Fortica Infrastructure Agreement</a>
            </div>
            </div>
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