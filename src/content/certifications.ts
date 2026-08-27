export interface Certification {
  date: string;
  title: string;
  badgeImage: string; // path under public/
  imageWidth: number; // max-width in px; image scales responsively below it
  link: string;
}

export const certifications: Certification[] = [
  {
    date: 'Apr 2025',
    title: 'JavaScript Skills Assessment',
    badgeImage: '/PluralSightJS2025.png',
    imageWidth: 300,
    link: 'https://app.pluralsight.com/profile/joseph-hoppe-23',
  },
  {
    date: 'Jan 2025',
    title: 'ES6/2015 JavaScript Self Assessment',
    badgeImage: '/PluralSightJS2015.png',
    imageWidth: 300,
    link: 'https://app.pluralsight.com/profile/joseph-hoppe-23',
  },
  {
    date: 'Nov 2021',
    title: 'Microsoft AZ-900',
    badgeImage: '/AZ-900.png',
    imageWidth: 150,
    link: 'https://www.credly.com/badges/02a09a00-d05a-4722-8e4a-1c17f270747f',
  },
];
