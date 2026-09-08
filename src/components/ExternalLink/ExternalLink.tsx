import type { ReactNode } from 'react';

interface ExternalLinkProps {
  href: string;
  className?: string;
  children: ReactNode;
}

/**
 * Every link that leaves the site. Opens in a new tab so the portfolio stays put
 * behind it; the plain <a> is reserved for the in-page nav anchors.
 */
export function ExternalLink({ href, className, children }: ExternalLinkProps) {
  return (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
