import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Writing } from './Writing';

describe('Writing', () => {
  it('renders a heading for each theme group', () => {
    render(<Writing />);
    expect(screen.getByRole('heading', { name: 'AI & LLMs' })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'AWS & distributed systems' })
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'TypeScript' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Developer workflow' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Career & learning' })).toBeInTheDocument();
  });

  it('renders an entry with a working link and its takeaway', () => {
    render(<Writing />);
    expect(
      screen.getByRole('link', {
        name: 'AWS — Properly delete messages between Lambdas and SQS Queues',
      })
    ).toHaveAttribute(
      'href',
      'https://dev.to/joehoppe/aws-properly-delete-messages-between-lambdas-and-sqs-queues-41md'
    );
    expect(
      screen.getByText('Getting message deletion right so work is not silently retried.')
    ).toBeInTheDocument();
  });

  it('shows the promoted entries outside the collapsed group', () => {
    const { container } = render(<Writing />);
    const archived = container.querySelector('details')?.textContent ?? '';
    expect(archived).not.toContain('business trip to India');
    expect(archived).not.toContain('T-Mobile Home Internet');
    expect(archived).not.toContain('PluralSight activity');
    expect(screen.getByText(/PluralSight activity/)).toBeInTheDocument();
  });

  it('collapses the older highlights behind a details toggle', () => {
    const { container } = render(<Writing />);
    const details = container.querySelector('details');
    expect(details).not.toBeNull();
    expect(details).not.toHaveAttribute('open');
    expect(details?.querySelector('summary')?.textContent).toContain('Older highlights');
  });

  it('opens every entry link in a new tab', () => {
    const { container } = render(<Writing />);
    const links = Array.from(container.querySelectorAll('a'));
    expect(links.length).toBeGreaterThan(0);
    links.forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener');
    });
  });
});
