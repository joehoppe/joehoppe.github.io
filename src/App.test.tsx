import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders every major section heading', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { level: 1, name: 'Joseph Hoppe' })
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Projects' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Writing' })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Certifications and PluralSight Skills Assessments' })
    ).toBeInTheDocument();
  });

  it('orders sections About, Projects, Writing, Certifications', () => {
    const { container } = render(<App />);
    const ids = Array.from(container.querySelectorAll('main section')).map(
      (section) => section.id
    );
    expect(ids).toEqual(['bio', 'projects', 'writing', 'certifications']);
  });

  it('renders the nav jump links', () => {
    render(<App />);
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '#bio');
  });
});
