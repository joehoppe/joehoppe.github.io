import { describe, it, expect } from 'vitest';
import { certifications } from './certifications';

describe('certifications data', () => {
  it('has an entry for each current certification', () => {
    expect(certifications).toHaveLength(3);
    expect(certifications.map((c) => c.title)).toEqual([
      'JavaScript Skills Assessment',
      'ES6/2015 JavaScript Self Assessment',
      'Microsoft AZ-900',
    ]);
  });
});
