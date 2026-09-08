import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Nav } from './Nav';

describe('Nav', () => {
  it('renders a jump link for each section', () => {
    render(<Nav />);
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '#bio');
    expect(screen.getByRole('link', { name: 'Certifications' })).toHaveAttribute(
      'href',
      '#certifications'
    );
    expect(screen.getByRole('link', { name: 'Writing' })).toHaveAttribute('href', '#writing');
    expect(screen.getByRole('link', { name: 'Projects' })).toHaveAttribute('href', '#projects');
  });

  it('orders the jump links to match the page', () => {
    render(<Nav />);
    const labels = screen.getAllByRole('link').map((link) => link.textContent);
    expect(labels).toEqual(['About', 'Projects', 'Writing', 'Certifications']);
  });
});
