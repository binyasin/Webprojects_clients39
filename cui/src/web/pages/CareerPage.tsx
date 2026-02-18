import React from 'react';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import WhyWorkWithUs from '../components/career/WhyWorkWithUs';
import OpenPositions from '../components/career/OpenPositions';
import ApplicationCTA from '../components/career/ApplicationCTA';
import { careerPage } from '../data/site-content';

export default function CareerPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-brand-900 to-brand-700 py-16 sm:py-20">
        <Container>
          <SectionHeading
            title={careerPage.hero.title}
            subtitle={careerPage.hero.subtitle}
            light
          />
        </Container>
      </section>

      <WhyWorkWithUs />
      <OpenPositions />
      <ApplicationCTA />
    </>
  );
}
