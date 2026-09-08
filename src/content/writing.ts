export interface WritingEntry {
  group: string;
  /** Omitted where the original publication year was not recorded. */
  year?: string;
  title: string;
  url: string;
  source: string;
  /** One-line takeaway. Omitted for archived entries, which render as bare links. */
  takeaway?: string;
}

export const writingGroupOrder = [
  'AI & LLMs',
  'AWS & distributed systems',
  'TypeScript',
  'Developer workflow',
  'Career & learning',
  'Older highlights',
];

/** Rendered inside a collapsed <details> block rather than expanded on load. */
export const collapsedGroup = 'Older highlights';

export const writingEntries: WritingEntry[] = [
  {
    group: 'AI & LLMs',
    year: '2026',
    title: 'How will AI affect the cost of software development in 2026?',
    url: 'https://dev.to/joehoppe/how-will-ai-affect-the-cost-of-software-development-in-2026-a22',
    source: 'dev.to article',
    takeaway: 'What faster code generation actually does to the cost of building software.',
  },
  {
    group: 'AI & LLMs',
    year: '2025',
    title: 'Building a Universal Language Translator with Python and LangChain',
    url: 'https://dev.to/joehoppe/building-a-universal-language-translator-with-python-and-langchain-212h',
    source: 'dev.to article',
    takeaway: 'Wiring Python and LangChain into a working translation pipeline.',
  },
  {
    group: 'AI & LLMs',
    year: '2025',
    title: 'Neural Networks: Developing a Really Simple Neuron in TypeScript',
    url: 'https://dev.to/joehoppe/neural-networks-developing-a-really-simple-neuron-in-typescript-4fc1',
    source: 'dev.to article',
    takeaway: 'Building a single neuron by hand to show what the math underneath is doing.',
  },
  {
    group: 'AWS & distributed systems',
    year: '2024',
    title: 'AWS — Properly delete messages between Lambdas and SQS Queues',
    url: 'https://dev.to/joehoppe/aws-properly-delete-messages-between-lambdas-and-sqs-queues-41md',
    source: 'dev.to article',
    takeaway: 'Getting message deletion right so work is not silently retried.',
  },
  {
    group: 'AWS & distributed systems',
    year: '2025',
    title: 'Fixing VPN and VPC Connectivity Issues with T-Mobile Home Internet',
    url: 'https://dev.to/joehoppe/fixing-vpn-and-vpc-connectivity-issues-with-t-mobile-home-internet-4gn1',
    source: 'dev.to article',
    takeaway: 'Restoring VPN and VPC access after switching to T-Mobile Home Internet.',
  },
  {
    group: 'TypeScript',
    year: '2023',
    title: 'State of Linting in TypeScript: August 2023',
    url: 'https://medium.com/@JosephHoppe/state-of-linting-in-typescript-august-2023-551a99e0b3b3',
    source: 'Medium article',
    takeaway: 'A survey of the TypeScript linting landscape and what it cost to keep current.',
  },
  {
    group: 'Developer workflow',
    year: '2023',
    title:
      'The free tier of GitHub Codespaces permanently changed my workflows as a developer',
    url: 'https://medium.com/@JosephHoppe/how-the-free-tier-of-github-codespaces-permanently-changed-my-workflows-as-a-developer-b85d61af983b',
    source: 'Medium article',
    takeaway: 'How a free cloud dev environment displaced a local setup.',
  },
  {
    group: 'Developer workflow',
    year: '2023',
    title:
      'I put together a developer interview prep spreadsheet (public) for practicing common questions and exercises',
    url: 'https://docs.google.com/spreadsheets/d/1DBYbO0fe2HqBWXLBd-lXhVBXevqaq20M3NavlhX0rbI/edit?usp=sharing',
    source: 'Spreadsheet',
    takeaway: 'A public bank of common interview questions and exercises.',
  },
  {
    group: 'Career & learning',
    year: '2026',
    title:
      "When you're scheduled to go on your first international business trip to India on February 29, 2020",
    url: 'https://dev.to/joehoppe/when-youre-scheduled-to-go-on-your-first-international-business-trip-to-india-on-february-29-4i7j',
    source: 'dev.to article',
    takeaway: 'A first international business trip, and the timing that upended it.',
  },
  {
    group: 'Career & learning',
    year: '2019–2022',
    title: 'PluralSight activity (2019–2022)',
    url: '/PluralSight%20profile%202022.pdf',
    source: 'PDF',
    takeaway: 'A record of the courses and assessments completed over those years.',
  },
  {
    group: 'Older highlights',
    year: '2023',
    title: 'Overcoming Keyboard Wrist Pain',
    url: 'https://medium.com/@JosephHoppe/overcoming-keyboard-wrist-pain-9b9cfa3ffbdf',
    source: 'Medium article',
  },
  {
    group: 'Older highlights',
    title: 'Removing unnecessary using statements from a large solution',
    url: 'https://medium.com/@JosephHoppe/removing-unnecessary-using-statements-from-a-large-solution-is-a-quick-and-easy-way-to-improve-the-cb672702f0e6',
    source: 'Medium article',
  },
  {
    group: 'Older highlights',
    title: '.Net developer revisits Java after a decade',
    url: 'https://medium.com/@JosephHoppe/net-developer-revisits-java-after-a-decade-592e79547d34',
    source: 'Medium article',
  },
];
