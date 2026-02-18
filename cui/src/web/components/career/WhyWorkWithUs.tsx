import React from 'react';
import Container from '../ui/Container';
import Card from '../ui/Card';
import SectionHeading from '../ui/SectionHeading';
import { careerPage } from '../../data/site-content';

export default function WhyWorkWithUs() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading title={careerPage.whyWork.title} />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {careerPage.whyWork.benefits.map((benefit) => (
            <Card key={benefit.title}>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
