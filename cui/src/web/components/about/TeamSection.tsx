import React from 'react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import { aboutPage } from '../../data/site-content';

export default function TeamSection() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          title="Our Leadership"
          subtitle="Meet the team driving our vision forward"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {aboutPage.team.map((member) => (
            <Card key={member.name} className="text-center">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-brand-100 text-brand-700 text-2xl font-bold">
                {member.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}
              </div>
              <h4 className="text-lg font-semibold text-gray-900">
                {member.name}
              </h4>
              <p className="text-sm font-medium text-brand-600 mb-2">
                {member.role}
              </p>
              <p className="text-sm text-gray-500">{member.bio}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
