import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders every major section heading', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { level: 1, name: 'Backend Developer' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Certifications and PluralSight Skills Assessments' })
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Writing' })).toBeInTheDocument();
  });

  it('renders the nav jump links', () => {
    render(<App />);
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '#bio');
  });
});
