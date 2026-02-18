import React from 'react';
import Card from '../ui/Card';
import { contactPage } from '../../data/site-content';

export default function ContactInfo() {
  const { info } = contactPage;

  const items = [
    { label: 'Address', value: info.address },
    { label: 'Phone', value: info.phone, href: `tel:${info.phone}` },
    { label: 'Email', value: info.email, href: `mailto:${info.email}` },
    { label: 'Business Hours', value: info.hours },
  ];

  return (
    <Card hover={false}>
      <h3 className="text-xl font-bold text-gray-900 mb-6">Get In Touch</h3>
      <ul className="space-y-5">
        {items.map((item) => (
          <li key={item.label}>
            <span className="block text-xs font-semibold uppercase tracking-wider text-brand-600 mb-1">
              {item.label}
            </span>
            {item.href ? (
              <a
                href={item.href}
                className="text-gray-700 hover:text-brand-600 transition-colors"
              >
                {item.value}
              </a>
            ) : (
              <span className="text-gray-700">{item.value}</span>
            )}
          </li>
        ))}
      </ul>
    </Card>
  );
}
