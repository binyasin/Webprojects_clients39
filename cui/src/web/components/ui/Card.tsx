import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div
      className={`rounded-2xl bg-white p-6 shadow-sm border border-gray-100 ${
        hover ? 'transition-shadow duration-200 hover:shadow-md' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
