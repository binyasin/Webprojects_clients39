import React from 'react';
import HeroSection from '../components/home/HeroSection';
import CompanyOverview from '../components/home/CompanyOverview';
import ServicesHighlights from '../components/home/ServicesHighlights';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CompanyOverview />
      <ServicesHighlights />
    </>
  );
}
