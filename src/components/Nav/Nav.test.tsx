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
  });
});
