import { Button } from "@/components/ui/button";
import { AnimatedMenuIcon } from "@/components/AnimatedMenuIcon";
import logo from "@/assets/logo32x32.png";
import bolt from "@/assets/bolt128w.png";
import React, { useEffect, useRef, useState } from 'react';

import sanea from '@/assets/sanean_imperium.png';
import khanate from '@/assets/tsagaan_khanate.png';
import yalra from '@/assets/yalra.png';
import kraftia from '@/assets/kraftia.png';
import ritannia from '@/assets/ritannian_republic.png';
import britannica from '@/assets/britannica.png';
import osark from '@/assets/osark.png';
import aglium from '@/assets/aglium_theocracy.png';
import hollenberg from '@/assets/hollenberg.png';

import DiplomacyMap from "../components/InteractiveMap";

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
    { title: "Infrastructure", href: "/thundra.gov/infrastructure" },
    { title: "Defense", href: "/thundra.gov/defense" },
  ];

  return (
    <div className="bg-gray-50 text-gray-900">

      {/* Sticky Header */}
      <div className="sticky top-0 bg-gray-50 z-1">

        {/* Top Banner */}
        <div className="w-full max-w-screen-lg mx-auto px-4 text-xs text-gray-800 py-0.25 flex items-center space-x-2">
          <img src={logo} alt="Thundra logo" className="w-3 h-3" />
          <span className="font-medium">An official website of the Thundran government</span>
        </div>

        {/* Top Header */}
        <header className="bg-[#002654] text-white shadow">
          <div className="w-full max-w-screen-lg mx-auto flex justify-between items-center">
            <h1 ref={headerRef} className="py-6 pl-6 text-3xl font-serif">The Ministry of Foreign Affairs</h1>
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
                    🛈 Thundra is currently at war with the following nations/organizations:
                </span>

                <div className="relative overflow-hidden flex-1">
                    <div className="marquee whitespace-nowrap">
                    <span className="inline-block mx-[12.5px]">
                        the North Sanean Federation, the 'Great' Scaldarren Sultanate, Tazkuytai, the Osark Sovereignty, Vukodlak, Britannica, the Revolutionist Republic of Barbacena, and the Malkavian Union
                    </span>
                    <span className="inline-block mx-[12.5px]">
                        the North Sanean Federation, the 'Great' Scaldarren Sultanate, Tazkuytai, the Osark Sovereignty, Vukodlak, Britannica, the Revolutionist Republic of Barbacena, and the Malkavian Union
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
            <li><a href="#notices" className="hover:underline">Active Notices</a></li>
            <li><a href="#map" className="hover:underline">Interactive Map</a></li>
            <li><a href="#pacts" className="hover:underline">List of Defense Pacts</a></li>
            <li><a href="#naps" className="hover:underline">List of NAPs</a></li>
            </ul>
        </nav>

        {/* 1. ACTIVE NOTICES */}
        <section id="notices" className="space-y-5 scroll-mt-36 w-full max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 font-serif">Active Notices</h2>
          <ul className="list-disc list-inside">
            <li><b>July 18:</b> After rejecting the Treaty of Eiluran, the Coalition has proposed the <a href="https://docs.google.com/document/d/1FWa9OwQK5BgXYlP7I5vUQoupXS7cpgB63_awA9f8wMs" target="_blank" className="text-blue-700 underline">Treaty of Arwyn</a>. All Thundrans are encouraged to read it ahead of negotiations later this week.</li>
            <li className="py-3"><b>July 8:</b> A kill-on-sight order has been issued for known Coalition terrorists, traitors, and terrorist sympathizers. Priority targets include: Wasappi, Gruke, Osh, and <s>JelloJeremiah</s>.</li>
            <li><b>July 4:</b> Due to assault on civilians and noncompliance with lawful orders, a kill-on-sight order has been issued for SirFaultier inside Thundran territory.</li>
          </ul>
        </section>

        {/* 2. INTERACTIVE MAP */}
        <section id="map" className="space-y-5 scroll-mt-36 w-full max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 font-serif">Interactive Map</h2>
          <div className="flex justify-center">
            <div className="rounded-md shadow p-2 border border-gray-300 w-[896px]">
              <DiplomacyMap />
            </div>
          </div>
        </section>

        {/* 3. DEFENSE PACTS */}
        <section id="pacts" className="scroll-mt-36">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 font-serif">Defense Pacts</h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700">
            <div>
                <h3 className="font-semibold text-lg">
                    The Ephesus Pact <img src={sanea} className="h-4 inline align-middle ml-1 outline-1 outline-gray-500" alt="Sanéan flag"/>
                </h3>
                <p className="mb-1">Mutual defense and economic cooperation pact between Thundra and the Sanéan Imperium.</p>
                <a href="https://docs.google.com/document/d/114OHLw5YOjd5UjrZiK3EvgHKU1I2d3uxXmgamwRrcXY" className="text-blue-700 underline text-sm">Text of the Agreement</a>
            </div>
            <div>
                <h3 className="font-semibold text-lg">
                    The International Organisation for Mutual Aid and Development (Eubis Pact) <img src={sanea} className="h-4 inline align-middle ml-1 outline-1 outline-gray-500" alt="Sanéan flag"/><img src={khanate} className="h-4 inline align-middle ml-1 outline-1 outline-gray-500" alt="Tsagaan flag"/>
                </h3>
                <p className="mb-1">A trilateral mutual defense and economic development pact between Thndra, the Sanéan Imperium, and the Tsagaan Khanate.</p>
                <a href="https://docs.google.com/document/d/10qUD8XRcYR7UXAh35IQUZc2X50ruDdYI3fF9Mj-HIZs" className="text-blue-700 underline text-sm">Text of the Agreement</a>
            </div>
            <div>
                <h3 className="font-semibold text-lg">
                    The Viconi Agreement <img src={ritannia} className="h-4 inline align-middle ml-1 outline-1 outline-gray-500" alt="Ritannian Empire flag"/>
                </h3>
                <p className="mb-1">Mutual defense pact between Thundra and the Fourth Republic of Ritannia.</p>
                <a href="https://docs.google.com/document/d/1qc8E0HQigmZDBxMmwHJxh7yH1zNvyaSuPYZp8VPJiJU" className="text-blue-700 underline text-sm">Text of the Agreement</a>
            </div>
            </div>
        </section>

        {/* 4. NON-AGGRESSION PACTS */}
        <section id="naps" className="scroll-mt-36">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 font-serif">Non-Aggression Pacts</h2>
            <p className="pb-3">In addition to non-aggression terms in all mutual defense treaties, the Fourth Republic of Thundra has entered into non-aggression pacts with the follwoing nations:</p>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700">
            <div>
                <h3 className="font-semibold text-lg">
                    Kraftia <img src={kraftia} className="h-4 inline align-middle ml-1 outline-1 outline-gray-500" alt="Kraftia flag"/>
                </h3>
                <p className="text-gray-500 text-sm">Expiry: August 23</p>
                <a href="https://docs.google.com/document/d/16XaKPH1T5YcgkLL2snWnUxxRXompjVDpnzMpW6hoZYA/edit?tab=t.0" className="text-blue-700 underline text-sm">East Fortica Infrastructure Agreement</a>
            </div>
            <div>
                <h3 className="font-semibold text-lg">
                    Commonwealth of Yalra <img src={yalra} className="h-4 inline align-middle ml-1 outline-1 outline-gray-500" alt="Yalra flag"/>
                </h3>
                <p className="text-gray-500 text-sm">Expiry: August 25</p>
                <a href="https://docs.google.com/document/d/1aZfoenUqGTyl7XMnW_OSe7EU3nuUCc6EuCzid2eWh3o/" className="text-blue-700 underline text-sm">West Fortica Infrastructure Agreement</a>
            </div>
            <div>
                <h3 className="font-semibold text-lg">
                    Britannica <img src={britannica} className="h-4 inline align-middle ml-1 outline-1 outline-gray-500" alt="Britannica flag"/>
                </h3>
                <p className="text-gray-500 text-sm">Expiry: August 30</p>
                <a href="https://docs.google.com/document/d/1mvM1Si3x-VFDWjqGTUCvyfrO8MZUmI9vX15LBfotnLc" className="text-blue-700 underline text-sm">Thundra–Britannica Non-Aggression Pact</a>
            </div>
            <div>
                <h3 className="font-semibold text-lg">
                    Osark Sovereignty <img src={osark} className="h-4 inline align-middle ml-1 outline-1 outline-gray-500" alt="Osark flag"/>
                </h3>
                <p className="text-gray-500 text-sm">Expiry: August 31</p>
                <a href="https://docs.google.com/document/d/1_aLMHAy39Ut9Hp8oIVkZH7rzxCwlSk_Y3Gf3Uu1d6o8" className="text-blue-700 underline text-sm">Thundra–Osark Non-Aggression Pact</a>
            </div>
            <div>
                <h3 className="font-semibold text-lg">
                    Aglium Theocracy <img src={aglium} className="h-4 inline align-middle ml-1 outline-1 outline-gray-500" alt="Aglium Theocracy flag"/>
                </h3>
                <p className="text-gray-500 text-sm">Expiry: October 15</p>
                <a href="https://docs.google.com/document/d/15TrAolXgagI8YITSZE5UOCAPiABD6stR_tAu53CWwuI" className="text-blue-700 underline text-sm">North Fortica Infrastructure Agreement</a>
            </div>
            <div>
                <h3 className="font-semibold text-lg">
                    Hollenberg <img src={hollenberg} className="h-4 inline align-middle ml-1 outline-1 outline-gray-500" alt="Hollenberg flag"/>
                </h3>
                <p className="text-gray-500 text-sm">Expiry: October 17</p>
                <a href="https://docs.google.com/document/d/1w1-wNidz7RrwCdziImTq0AEcHWv-avetWl1qlhbaoXk" className="text-blue-700 underline text-sm">Second Treaty of Schönquelle</a>
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