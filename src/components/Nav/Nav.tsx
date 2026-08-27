import styles from './Nav.module.css';

const sections = [
  { id: 'bio', label: 'About' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'writing', label: 'Writing' },
];

export function Nav() {
  return (
    <nav className={styles.nav} aria-label="Section navigation">
      <ul className={styles.list}>
        {sections.map((section) => (
          <li key={section.id}>
            <a href={`#${section.id}`}>{section.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
