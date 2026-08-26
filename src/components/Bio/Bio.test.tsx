import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Bio } from './Bio';

describe('Bio', () => {
  it('renders the page heading', () => {
    render(<Bio />);
    expect(
      screen.getByRole('heading', { level: 1, name: 'Backend Developer' })
    ).toBeInTheDocument();
  });

  it('renders each social link with its correct URL', () => {
    render(<Bio />);
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/josephhoppe'
    );
    expect(screen.getByRole('link', { name: 'LeetCode' })).toHaveAttribute(
      'href',
      'https://leetcode.com/u/jhoppe/'
    );
  });

  it('renders the StackOverflow flair with correct alt text', () => {
    render(<Bio />);
    expect(screen.getByAltText('profile for Joe Hoppe at Stack Overflow')).toBeInTheDocument();
  });
});
