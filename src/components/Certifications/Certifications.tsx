import { certifications } from '../../content/certifications';
import styles from './Certifications.module.css';

export function Certifications() {
  return (
    <section id="certifications" className={styles.certifications}>
      <h2>Certifications and PluralSight Skills Assessments</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Certification/Assessment</th>
            <th>Badge/Result</th>
          </tr>
        </thead>
        <tbody>
          {certifications.map((cert) => (
            <tr key={cert.title}>
              <td>{cert.date}</td>
              <td>{cert.title}</td>
              <td className={styles.badgeCell}>
                <a href={cert.link}>
                  <img
                    src={cert.badgeImage}
                    alt={cert.title}
                    style={{ maxWidth: cert.imageWidth }}
                    className={styles.badge}
                  />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
