import './app.scss'
import Navbar from './Components/Navbar/Navbar';
import Test from './Test';

const App = () => {
  return <div>
    <section id='Home'>
      <Navbar />
    </section>
    <section id='Services'>Parallax</section>
    <section>Services</section>
    <section>Parallax</section>
    <section id='Portfolio'>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id='Contact'>Contact</section>
  </div>;
};

export default App;
