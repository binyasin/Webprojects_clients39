import React from 'react';
import Container from '../ui/Container';
import Card from '../ui/Card';
import SectionHeading from '../ui/SectionHeading';
import { services } from '../../data/site-content';

export default function ServicesHighlights() {
  return (
    <section className="bg-gray-50 py-20">
      <Container>
        <SectionHeading
          title="Our Services"
          subtitle="Comprehensive outsourcing solutions tailored to your business needs"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card key={service.title}>
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
