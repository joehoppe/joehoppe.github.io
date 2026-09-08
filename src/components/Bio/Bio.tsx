import { socialLinks, stackOverflowFlair } from '../../content/links';
import { ExternalLink } from '../ExternalLink/ExternalLink';
import styles from './Bio.module.css';

const profileLinks = socialLinks.filter((link) => link.group === 'profile');
const writingLinks = socialLinks.filter((link) => link.group === 'writing');

export function Bio() {
  return (
    <section id="bio" className={styles.bio}>
      <h1>Joseph Hoppe</h1>
      <p className={styles.subhead}>Senior Backend Engineer</p>
      <p className={styles.locator}>Ramsey, NJ</p>
      <p className={styles.tagline}>
        15+ years building event-driven, serverless backends on AWS — Python, TypeScript, and
        Node.js. Lately that includes production LLM integration: Claude API, LangChain, and
        agentic developer workflows.
      </p>
      <p className={styles.orientation}>
        A short personal hub: open-source projects, writing on AI and AWS, certifications, and
        links to my profiles.
      </p>
      <ul className={styles.badgeList}>
        {profileLinks.map((link) => (
          <li key={link.label}>
            <ExternalLink href={link.url}>
              <img src={link.badgeUrl} alt={link.label} />
            </ExternalLink>
          </li>
        ))}
      </ul>
      <div className={styles.writingRow}>
        <ul className={styles.badgeList}>
          {writingLinks.map((link) => (
            <li key={link.label}>
              <ExternalLink href={link.url}>
                <img src={link.badgeUrl} alt={link.label} />
              </ExternalLink>
            </li>
          ))}
        </ul>
        <ExternalLink href={stackOverflowFlair.profileUrl} className={styles.stackOverflowBadge}>
          <img
            src={stackOverflowFlair.flairImageUrl}
            width={208}
            height={58}
            alt={stackOverflowFlair.alt}
          />
        </ExternalLink>
      </div>
    </section>
  );
}
