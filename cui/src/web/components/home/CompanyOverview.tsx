import React from 'react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import { companyOverview } from '../../data/site-content';

export default function CompanyOverview() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading title={companyOverview.title} subtitle={companyOverview.description} />

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {companyOverview.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-extrabold text-brand-600 sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm font-medium text-gray-500">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
