import { describe, it, expect } from 'vitest';
import { projects } from './projects';

describe('projects data', () => {
  it('has both resume-featured projects', () => {
    expect(projects.map((project) => project.name)).toEqual([
      'Usage Dashboard for Claude',
      'Deep Neural Network Library (DNN)',
    ]);
  });

  it('points every project at a GitHub repo', () => {
    projects.forEach((project) => {
      expect(project.repoUrl).toMatch(/^https:\/\/github\.com\/joehoppe\//);
    });
  });

  it('gives every project a summary and a stack line', () => {
    projects.forEach((project) => {
      expect(project.summary.length).toBeGreaterThan(0);
      expect(project.stack.length).toBeGreaterThan(0);
    });
  });
});
