import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import { company, footer } from '../../data/site-content';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <Container className="py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white font-bold">
                S
              </div>
              <span className="text-lg font-bold text-white">
                {company.shortName}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              {footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footer.quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>{footer.contact.address}</li>
              <li>
                <a href={`tel:${footer.contact.phone}`} className="hover:text-white transition-colors">
                  {footer.contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${footer.contact.email}`} className="hover:text-white transition-colors">
                  {footer.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          {footer.copyright}
        </div>
      </Container>
    </footer>
  );
}
