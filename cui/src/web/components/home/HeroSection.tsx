import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { heroSection } from '../../data/site-content';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 py-24 sm:py-32">
      {/* Decorative circles */}
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand-600/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-brand-400/10 blur-3xl" />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {heroSection.headline}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-brand-100 sm:text-xl">
            {heroSection.subheadline}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button to="/contact" variant="secondary">
              {heroSection.primaryCta}
            </Button>
            <Button to="/about" variant="outline" className="border-white text-white hover:bg-white/10">
              {heroSection.secondaryCta}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
