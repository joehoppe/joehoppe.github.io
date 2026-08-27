import { Nav } from './components/Nav/Nav';
import { Bio } from './components/Bio/Bio';
import { Certifications } from './components/Certifications/Certifications';
import { Writing } from './components/Writing/Writing';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Bio />
        <Certifications />
        <Writing />
      </main>
    </>
  );
}
