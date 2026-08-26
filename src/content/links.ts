export interface SocialLink {
  label: string;
  url: string;
  badgeUrl: string;
}

export const socialLinks: SocialLink[] = [
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/josephhoppe',
    badgeUrl: 'https://img.shields.io/badge/LinkedIn-blue?logo=linkedin',
  },
  {
    label: 'GitHub',
    url: 'https://github.com/joehoppe',
    badgeUrl: 'https://img.shields.io/badge/GitHub-black?logo=github',
  },
  {
    label: 'LeetCode',
    url: 'https://leetcode.com/u/jhoppe/',
    badgeUrl: 'https://img.shields.io/badge/LeetCode-orange?logo=leetcode',
  },
  {
    label: 'PluralSight',
    url: 'https://app.pluralsight.com/profile/joseph-hoppe-23',
    badgeUrl: 'https://img.shields.io/badge/PluralSight-red?logo=pluralsight',
  },
  {
    label: 'Medium',
    url: 'https://medium.com/@JosephHoppe',
    badgeUrl: 'https://img.shields.io/badge/Medium-black?logo=medium',
  },
  {
    label: 'DEV Blog',
    url: 'https://dev.to/joehoppe',
    badgeUrl: 'https://img.shields.io/badge/DEV.to-black?logo=dev.to',
  },
];

export const stackOverflowFlair = {
  profileUrl: 'https://stackoverflow.com/users/846844/hoppe',
  flairImageUrl: 'https://stackoverflow.com/users/flair/846844.png',
  alt: 'profile for Joe Hoppe at Stack Overflow',
};
