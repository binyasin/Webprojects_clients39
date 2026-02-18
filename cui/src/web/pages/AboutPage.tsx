import React from 'react';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import CompanyStory from '../components/about/CompanyStory';
import MissionVision from '../components/about/MissionVision';
import TeamSection from '../components/about/TeamSection';
import { aboutPage } from '../data/site-content';

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-brand-900 to-brand-700 py-16 sm:py-20">
        <Container>
          <SectionHeading
            title={aboutPage.hero.title}
            subtitle={aboutPage.hero.subtitle}
            light
          />
        </Container>
      </section>

      <CompanyStory />
      <MissionVision />
      <TeamSection />
    </>
  );
}
