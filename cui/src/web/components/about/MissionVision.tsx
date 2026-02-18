import React from 'react';
import Container from '../ui/Container';
import Card from '../ui/Card';
import { aboutPage } from '../../data/site-content';

export default function MissionVision() {
  return (
    <section className="bg-gray-50 py-20">
      <Container>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <Card hover={false} className="border-l-4 border-l-brand-600">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {aboutPage.mission.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {aboutPage.mission.text}
            </p>
          </Card>
          <Card hover={false} className="border-l-4 border-l-brand-600">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {aboutPage.vision.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {aboutPage.vision.text}
            </p>
          </Card>
        </div>

        {/* Values */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {aboutPage.values.map((value) => (
            <Card key={value.title}>
              <h4 className="text-lg font-semibold text-brand-700 mb-2">
                {value.title}
              </h4>
              <p className="text-sm text-gray-600">{value.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
