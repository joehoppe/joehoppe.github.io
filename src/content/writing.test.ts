import { describe, it, expect } from 'vitest';
import { writingEntries, writingYearOrder } from './writing';

describe('writing data', () => {
  it('has 14 entries total', () => {
    expect(writingEntries).toHaveLength(14);
  });

  it('covers every year in writingYearOrder', () => {
    const years = new Set(writingEntries.map((entry) => entry.year));
    writingYearOrder.forEach((year) => {
      expect(years.has(year)).toBe(true);
    });
  });
});
