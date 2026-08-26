import { writingEntries, writingYearOrder } from '../../content/writing';
import styles from './Writing.module.css';

export function Writing() {
  return (
    <section id="writing" className={styles.writing}>
      <h2>Writing</h2>
      {writingYearOrder.map((year) => {
        const entries = writingEntries.filter((entry) => entry.year === year);
        if (entries.length === 0) return null;
        return (
          <div key={year} className={styles.yearGroup}>
            <h3>{year}</h3>
            <ul>
              {entries.map((entry) => (
                <li key={entry.url}>
                  <a href={entry.url}>{entry.title}</a> — {entry.source}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </section>
  );
}
