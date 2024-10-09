import './App.css';
import About from './component/about/About';
import Contact from './component/contact/Contact';
import Footer from './component/footer/Footer';
import Header from './component/header/Header';
import Home from './component/home/Home';
import Qualification from './component/qualification/Qualification';
import ScrollUp from './component/scrollup/ScrollUp';
import Services from './component/services/Services';
import Skills from './component/skills/Skills';
import Work from './component/work/Work';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       
       <Header />
       <main className='main'>
       <Home />
       <About />
       <Skills />
       <Services />
       <Qualification/>
       <Work/>
       <Contact/>
       </main>
       <Footer/>
       <ScrollUp/>
       
      </header>
    </div>
  );
}

export default App;
