import { describe, it, expect } from 'vitest';
import { collapsedGroup, writingEntries, writingGroupOrder } from './writing';

describe('writing data', () => {
  it('has 13 entries total', () => {
    expect(writingEntries).toHaveLength(13);
  });

  it('assigns every entry to a group in writingGroupOrder', () => {
    writingEntries.forEach((entry) => {
      expect(writingGroupOrder).toContain(entry.group);
    });
  });

  it('covers every group in writingGroupOrder', () => {
    const groups = new Set(writingEntries.map((entry) => entry.group));
    writingGroupOrder.forEach((group) => {
      expect(groups.has(group)).toBe(true);
    });
  });

  it('gives every non-archived entry a takeaway', () => {
    writingEntries
      .filter((entry) => entry.group !== collapsedGroup)
      .forEach((entry) => {
        expect(entry.takeaway).toBeTruthy();
      });
  });

  it('keeps only the archived pieces in the collapsed group', () => {
    const archived = writingEntries
      .filter((entry) => entry.group === collapsedGroup)
      .map((entry) => entry.title);
    expect(archived).toEqual([
      'Overcoming Keyboard Wrist Pain',
      'Removing unnecessary using statements from a large solution',
      '.Net developer revisits Java after a decade',
    ]);
  });

  it('does not list the retired blog-platform article', () => {
    expect(writingEntries.some((entry) => entry.url.includes('dont-code-a-new-website'))).toBe(
      false
    );
  });

  it('leads Writing with the AI cost article', () => {
    const firstGroup = writingGroupOrder[0];
    const first = writingEntries.find((entry) => entry.group === firstGroup);
    expect(first?.title).toBe('How will AI affect the cost of software development in 2026?');
  });
});
