/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MarqueeTicker } from './components/MarqueeTicker';
import { ServicesSection } from './components/ServicesSection';
import { GallerySection } from './components/GallerySection';
import { InstagramSection } from './components/InstagramSection';
import { QuickBookingSimulator } from './components/QuickBookingSimulator';
import { AboutSection } from './components/AboutSection';
import { LocationSchedule } from './components/LocationSchedule';
import { TestimonialsFaq } from './components/TestimonialsFaq';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans selection:bg-amber-500 selection:text-black">
      {/* Header with status, new phone (11) 96823-2262 and Instagram link */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section with radical styling and main CTAs */}
        <Hero />

        {/* Animated Colorful Marquee Strip */}
        <MarqueeTicker />

        {/* Services & Haircuts Menu (No prices, colorful cards & WhatsApp) */}
        <ServicesSection />

        {/* Dynamic Slides / Carousel of Cuts & Styles */}
        <GallerySection />

        {/* Instagram Showcase: Feed dos Cortes @nessbarbearia */}
        <InstagramSection />

        {/* Interactive WhatsApp Booking Flow */}
        <QuickBookingSimulator />

        {/* 17+ Years History & Specialization */}
        <AboutSection />

        {/* Location, Map & Operating Hours */}
        <LocationSchedule />

        {/* Client Reviews & Frequently Asked Questions */}
        <TestimonialsFaq />
      </main>

      {/* Footer */}
      <Footer />

      {/* Ultra-realistic Floating WhatsApp Button & Interactive Chat */}
      <FloatingWhatsApp />
    </div>
  );
}
