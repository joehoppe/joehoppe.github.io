import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Bio } from './Bio';

describe('Bio', () => {
  it('renders his name as the page heading', () => {
    render(<Bio />);
    expect(
      screen.getByRole('heading', { level: 1, name: 'Joseph Hoppe' })
    ).toBeInTheDocument();
  });

  it('renders the subhead and locator line', () => {
    render(<Bio />);
    expect(screen.getByText('Senior Backend Engineer')).toBeInTheDocument();
    expect(screen.getByText('Ramsey, NJ')).toBeInTheDocument();
  });

  it('orients the visitor to what the page holds', () => {
    render(<Bio />);
    expect(
      screen.getByText(/A short personal hub: open-source projects, writing on AI and AWS/)
    ).toBeInTheDocument();
  });

  it('does not advertise job-seeking status', () => {
    const { container } = render(<Bio />);
    expect(container.textContent).not.toMatch(/open to\b/i);
    expect(container.textContent).not.toMatch(/seeking|available for hire/i);
  });

  it('does not expose an email address', () => {
    const { container } = render(<Bio />);
    expect(container.querySelector('a[href^="mailto:"]')).toBeNull();
    expect(container.textContent).not.toMatch(/@\w+\.(com|net|org)/);
  });

  it('renders the positioning tagline', () => {
    render(<Bio />);
    expect(
      screen.getByText(/15\+ years building backend systems, most recently event-driven/)
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

  it('shares a row between the writing platforms and the StackOverflow flair', () => {
    render(<Bio />);
    const row = screen
      .getByRole('link', { name: 'profile for Joe Hoppe at Stack Overflow' })
      .closest('div');
    expect(row).not.toBeNull();
    expect(row).toContainElement(screen.getByRole('link', { name: 'Medium' }));
    expect(row).toContainElement(screen.getByRole('link', { name: 'DEV Blog' }));
    expect(row).not.toContainElement(screen.getByRole('link', { name: 'LinkedIn' }));
    expect(row).not.toContainElement(screen.getByRole('link', { name: 'PluralSight' }));
  });

  it('links the StackOverflow flair without a section-style label', () => {
    const { container } = render(<Bio />);
    expect(
      screen.getByRole('link', { name: 'profile for Joe Hoppe at Stack Overflow' })
    ).toHaveAttribute('href', 'https://stackoverflow.com/users/846844/hoppe');
    expect(container.textContent).not.toMatch(/StackOverflow:/);
  });

  it('opens every link in a new tab', () => {
    const { container } = render(<Bio />);
    const links = Array.from(container.querySelectorAll('a'));
    expect(links.length).toBeGreaterThan(0);
    links.forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });
});
