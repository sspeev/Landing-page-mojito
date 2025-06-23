import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import Navbar from '../src/components/Navbar.jsx';
import Hero from '../src/components/Hero.jsx';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
    </main>
  )
}

export default App;