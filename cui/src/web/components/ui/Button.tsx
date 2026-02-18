import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  to?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
}

const variants = {
  primary:
    'bg-brand-600 text-white hover:bg-brand-700 shadow-lg shadow-brand-600/25',
  secondary:
    'bg-white text-brand-700 hover:bg-brand-50 shadow-lg',
  outline:
    'border-2 border-brand-600 text-brand-600 hover:bg-brand-50',
};

export default function Button({
  children,
  variant = 'primary',
  href,
  to,
  onClick,
  type = 'button',
  className = '',
}: ButtonProps) {
  const base = `inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold transition-all duration-200 ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={base}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={base}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={base}>
      {children}
    </button>
  );
}
