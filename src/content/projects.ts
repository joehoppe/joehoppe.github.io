export interface Project {
  name: string;
  summary: string;
  stack: string;
  repoUrl: string;
  repoLabel: string;
}

export const projects: Project[] = [
  {
    name: 'Usage Dashboard for Claude',
    summary:
      'Monitors Claude Code usage quota in real time from the desktop, so you can see where you stand against your limits without leaving your machine. Built in Python and packaged cross-platform for macOS and Windows, with background polling, TOML-based configuration, and an on-demand refresh that queries the Claude API directly.',
    stack: 'Python · Claude API · macOS/Windows packaging',
    repoUrl: 'https://github.com/joehoppe/usage-dashboard-for-claude',
    repoLabel: 'joehoppe/usage-dashboard-for-claude',
  },
  {
    name: 'Deep Neural Network Library (DNN)',
    summary:
      'A compact deep neural network built from scratch in TypeScript — no ML framework underneath — so every part of the network is readable on its own. It composes an orchestrator, an input layer, multiple hidden layers, and three activation functions.',
    stack: 'TypeScript',
    repoUrl: 'https://github.com/joehoppe/simple-deep-neural-network',
    repoLabel: 'joehoppe/simple-deep-neural-network',
  },
];
