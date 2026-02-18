import React from 'react';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';
import MapPlaceholder from '../components/contact/MapPlaceholder';
import { contactPage } from '../data/site-content';

export default function ContactPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-brand-900 to-brand-700 py-16 sm:py-20">
        <Container>
          <SectionHeading
            title={contactPage.hero.title}
            subtitle={contactPage.hero.subtitle}
            light
          />
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="space-y-8">
              <ContactInfo />
              <MapPlaceholder />
            </div>
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
