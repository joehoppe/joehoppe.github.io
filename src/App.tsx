import { Nav } from './components/Nav/Nav';
import { Bio } from './components/Bio/Bio';
import { Projects } from './components/Projects/Projects';
import { Writing } from './components/Writing/Writing';
import { Certifications } from './components/Certifications/Certifications';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Bio />
        <Projects />
        <Writing />
        <Certifications />
      </main>
    </>
  );
}
