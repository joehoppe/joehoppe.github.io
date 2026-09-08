export interface SocialLink {
  label: string;
  url: string;
  badgeUrl: string;
  /**
   * 'writing' marks the platforms the entries in writing.ts are published on, so the
   * bio can group them with the Stack Overflow flair instead of the profile badges.
   */
  group: 'profile' | 'writing';
}

export const socialLinks: SocialLink[] = [
  {
    label: 'LinkedIn',
    group: 'profile',
    url: 'https://www.linkedin.com/in/josephhoppe',
    badgeUrl: 'https://img.shields.io/badge/LinkedIn-blue?logo=linkedin',
  },
  {
    label: 'GitHub',
    group: 'profile',
    url: 'https://github.com/joehoppe',
    badgeUrl: 'https://img.shields.io/badge/GitHub-black?logo=github',
  },
  {
    label: 'LeetCode',
    group: 'profile',
    url: 'https://leetcode.com/u/jhoppe/',
    badgeUrl: 'https://img.shields.io/badge/LeetCode-orange?logo=leetcode',
  },
  {
    label: 'PluralSight',
    group: 'profile',
    url: 'https://app.pluralsight.com/profile/joseph-hoppe-23',
    badgeUrl: 'https://img.shields.io/badge/PluralSight-red?logo=pluralsight',
  },
  {
    label: 'Medium',
    group: 'writing',
    url: 'https://medium.com/@JosephHoppe',
    badgeUrl: 'https://img.shields.io/badge/Medium-black?logo=medium',
  },
  {
    label: 'DEV Blog',
    group: 'writing',
    url: 'https://dev.to/joehoppe',
    badgeUrl: 'https://img.shields.io/badge/DEV.to-black?logo=dev.to',
  },
];

export const stackOverflowFlair = {
  profileUrl: 'https://stackoverflow.com/users/846844/hoppe',
  flairImageUrl: 'https://stackoverflow.com/users/flair/846844.png',
  alt: 'profile for Joe Hoppe at Stack Overflow',
};
