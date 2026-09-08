import {
  collapsedGroup,
  writingEntries,
  writingGroupOrder,
  type WritingEntry,
} from '../../content/writing';
import { ExternalLink } from '../ExternalLink/ExternalLink';
import styles from './Writing.module.css';

function EntryList({ entries }: { entries: WritingEntry[] }) {
  return (
    <ul className={styles.entryList}>
      {entries.map((entry) => (
        <li key={entry.url} className={styles.entry}>
          <ExternalLink href={entry.url}>{entry.title}</ExternalLink>
          <span className={styles.meta}>
            {' '}
            — {entry.source}
            {entry.year ? `, ${entry.year}` : ''}
          </span>
          {entry.takeaway && <p className={styles.takeaway}>{entry.takeaway}</p>}
        </li>
      ))}
    </ul>
  );
}

export function Writing() {
  return (
    <section id="writing" className={styles.writing}>
      <h2>Writing</h2>
      {writingGroupOrder.map((group) => {
        const entries = writingEntries.filter((entry) => entry.group === group);
        if (entries.length === 0) return null;

        if (group === collapsedGroup) {
          return (
            <details key={group} className={styles.archive}>
              <summary className={styles.archiveSummary}>
                {group} ({entries.length})
              </summary>
              <EntryList entries={entries} />
            </details>
          );
        }

        return (
          <div key={group} className={styles.group}>
            <h3>{group}</h3>
            <EntryList entries={entries} />
          </div>
        );
      })}
    </section>
  );
}
