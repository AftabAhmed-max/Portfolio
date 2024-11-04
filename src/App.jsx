import './app.scss'
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Parallax from './Components/Parallax/Parallax';

const App = () => {
  return <div>
    <section id='home'>
      <Navbar />
      <Hero />
    </section>
    <section id='services'>
      <Parallax type="services"/>
    </section>
    <section>Services</section>
    <section id='portfolio'>
      <Parallax type="portfolio"/>
    </section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id='contact'>Contact</section>
  </div>;
};

export default App;
