import { describe, it, expect } from 'vitest';
import { socialLinks, stackOverflowFlair } from './links';

describe('links data', () => {
  it('has all six social badges', () => {
    expect(socialLinks).toHaveLength(6);
    expect(socialLinks.map((l) => l.label)).toEqual([
      'LinkedIn',
      'GitHub',
      'LeetCode',
      'PluralSight',
      'Medium',
      'DEV Blog',
    ]);
  });

  it('groups the publishing platforms apart from the profile links', () => {
    expect(socialLinks.filter((l) => l.group === 'profile').map((l) => l.label)).toEqual([
      'LinkedIn',
      'GitHub',
      'LeetCode',
      'PluralSight',
    ]);
    expect(socialLinks.filter((l) => l.group === 'writing').map((l) => l.label)).toEqual([
      'Medium',
      'DEV Blog',
    ]);
  });

  it('has a StackOverflow flair pointing at the right profile', () => {
    expect(stackOverflowFlair.profileUrl).toBe('https://stackoverflow.com/users/846844/hoppe');
  });
});
