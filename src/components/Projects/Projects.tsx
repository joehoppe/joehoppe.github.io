import { projects } from '../../content/projects';
import styles from './Projects.module.css';

export function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <h2>Projects</h2>
      <ul className={styles.list}>
        {projects.map((project) => (
          <li key={project.repoUrl} className={styles.card}>
            <h3 className={styles.name}>
              <a href={project.repoUrl}>{project.name}</a>
            </h3>
            <p className={styles.summary}>{project.summary}</p>
            <p className={styles.stack}>{project.stack}</p>
            <p className={styles.repo}>
              <a href={project.repoUrl}>{project.repoLabel}</a>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
