import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { careerPage } from '../../data/site-content';

export default function ApplicationCTA() {
  const { applicationCta } = careerPage;

  return (
    <section className="bg-brand-900 py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            {applicationCta.title}
          </h2>
          <p className="mt-4 text-lg text-brand-100">
            {applicationCta.description}
          </p>
          <div className="mt-8">
            <Button
              href={`mailto:${applicationCta.email}?subject=General Application`}
              variant="secondary"
            >
              {applicationCta.buttonLabel}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
