import { projects } from '../../content/projects';
import { ExternalLink } from '../ExternalLink/ExternalLink';
import styles from './Projects.module.css';

export function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <h2>Projects</h2>
      <ul className={styles.list}>
        {projects.map((project) => (
          <li key={project.repoUrl} className={styles.card}>
            <h3 className={styles.name}>
              <ExternalLink href={project.repoUrl}>{project.name}</ExternalLink>
            </h3>
            <p className={styles.summary}>{project.summary}</p>
            <p className={styles.stack}>{project.stack}</p>
            <p className={styles.repo}>
              <ExternalLink href={project.repoUrl}>{project.repoLabel}</ExternalLink>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
