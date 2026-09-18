import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Projects } from './Projects';

describe('Projects', () => {
  it('renders the section heading', () => {
    render(<Projects />);
    expect(screen.getByRole('heading', { name: 'Projects' })).toBeInTheDocument();
  });

  it('renders a card per project with a repo link', () => {
    render(<Projects />);
    expect(
      screen.getByRole('heading', { name: 'Usage Dashboard for Claude' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'joehoppe/usage-dashboard-for-claude' })
    ).toHaveAttribute('href', 'https://github.com/joehoppe/usage-dashboard-for-claude');
    expect(
      screen.getByRole('link', { name: 'joehoppe/simple-deep-neural-network' })
    ).toHaveAttribute('href', 'https://github.com/joehoppe/simple-deep-neural-network');
  });

  it('describes what each project does', () => {
    render(<Projects />);
    expect(screen.getByText(/monitors claude code usage quota in real time/i)).toBeInTheDocument();
  });

  it('opens every link in a new tab', () => {
    const { container } = render(<Projects />);
    const links = Array.from(container.querySelectorAll('a'));
    expect(links.length).toBeGreaterThan(0);
    links.forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener');
    });
  });
});
