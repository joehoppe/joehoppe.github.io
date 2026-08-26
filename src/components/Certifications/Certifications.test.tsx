import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Certifications } from './Certifications';

describe('Certifications', () => {
  it('renders the section heading', () => {
    render(<Certifications />);
    expect(
      screen.getByRole('heading', { name: 'Certifications and PluralSight Skills Assessments' })
    ).toBeInTheDocument();
  });

  it('renders each badge image with alt text matching its title, linking to its credential', () => {
    render(<Certifications />);
    const badge = screen.getByAltText('Microsoft AZ-900');
    expect(badge.closest('a')).toHaveAttribute(
      'href',
      'https://www.credly.com/badges/02a09a00-d05a-4722-8e4a-1c17f270747f'
    );
  });
});
