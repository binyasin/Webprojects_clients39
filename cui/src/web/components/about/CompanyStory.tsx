import React from 'react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import { aboutPage } from '../../data/site-content';

export default function CompanyStory() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading title={aboutPage.story.title} centered={false} />
        <div className="mx-auto max-w-3xl space-y-5">
          {aboutPage.story.paragraphs.map((text, i) => (
            <p key={i} className="text-gray-600 leading-relaxed">
              {text}
            </p>
          ))}
        </div>
      </Container>
    </section>
  );
}
