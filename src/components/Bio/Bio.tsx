import { socialLinks, stackOverflowFlair } from '../../content/links';
import styles from './Bio.module.css';

export function Bio() {
  return (
    <section id="bio" className={styles.bio}>
      <h1>Backend Developer</h1>
      <p className={styles.tagline}>
        Short personal hub: blog posts, skills badges, and links to my profiles.
      </p>
      <ul className={styles.badgeList}>
        {socialLinks.map((link) => (
          <li key={link.label}>
            <a href={link.url}>
              <img src={link.badgeUrl} alt={link.label} />
            </a>
          </li>
        ))}
      </ul>
      <div className={styles.stackOverflow}>
        <p className={styles.stackOverflowLabel}>
          <strong>StackOverflow:</strong>
        </p>
        <a href={stackOverflowFlair.profileUrl} className={styles.stackOverflowBadge}>
          <img
            src={stackOverflowFlair.flairImageUrl}
            width={208}
            height={58}
            alt={stackOverflowFlair.alt}
          />
        </a>
      </div>
      <p className={styles.activity}>
        <em>Check out my latest skills assessments, certifications, and writing below!</em>
      </p>
    </section>
  );
}
