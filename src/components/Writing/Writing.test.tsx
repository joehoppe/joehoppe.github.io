import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Writing } from './Writing';

describe('Writing', () => {
  it('renders a heading for each year group', () => {
    render(<Writing />);
    expect(screen.getByRole('heading', { name: '2026' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: '2025' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: '2024' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: '2023' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Older highlights' })).toBeInTheDocument();
  });

  it('renders an entry with a working link', () => {
    render(<Writing />);
    expect(
      screen.getByRole('link', { name: "Don't code a new website for your blog" })
    ).toHaveAttribute('href', 'https://dev.to/joehoppe/dont-code-a-new-website-for-your-blog-3epb');
  });
});
