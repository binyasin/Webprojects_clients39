import React from 'react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { careerPage } from '../../data/site-content';

export default function OpenPositions() {
  return (
    <section className="bg-gray-50 py-20">
      <Container>
        <SectionHeading
          title="Open Positions"
          subtitle="Find your next opportunity with us"
        />
        <div className="space-y-4">
          {careerPage.positions.map((position) => (
            <Card key={position.title} className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  {position.title}
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  {position.description}
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="inline-block rounded-full bg-brand-50 px-3 py-0.5 text-xs font-medium text-brand-700">
                    {position.department}
                  </span>
                  <span className="inline-block rounded-full bg-gray-100 px-3 py-0.5 text-xs font-medium text-gray-600">
                    {position.location}
                  </span>
                  <span className="inline-block rounded-full bg-gray-100 px-3 py-0.5 text-xs font-medium text-gray-600">
                    {position.type}
                  </span>
                </div>
              </div>
              <Button
                href={`mailto:${careerPage.applicationCta.email}?subject=Application: ${position.title}`}
                className="shrink-0"
              >
                Apply Now
              </Button>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
