import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ExternalLink } from './ExternalLink';

describe('ExternalLink', () => {
  it('renders an anchor to the given href', () => {
    render(<ExternalLink href="https://example.com">Example</ExternalLink>);
    expect(screen.getByRole('link', { name: 'Example' })).toHaveAttribute(
      'href',
      'https://example.com'
    );
  });

  it('opens in a new tab', () => {
    render(<ExternalLink href="https://example.com">Example</ExternalLink>);
    expect(screen.getByRole('link', { name: 'Example' })).toHaveAttribute('target', '_blank');
  });

  it('protects the opener from the new tab', () => {
    render(<ExternalLink href="https://example.com">Example</ExternalLink>);
    expect(screen.getByRole('link', { name: 'Example' })).toHaveAttribute('rel', 'noopener');
  });

  it('passes className through so callers keep their own styling', () => {
    render(
      <ExternalLink href="https://example.com" className="badge">
        Example
      </ExternalLink>
    );
    expect(screen.getByRole('link', { name: 'Example' })).toHaveClass('badge');
  });
});
