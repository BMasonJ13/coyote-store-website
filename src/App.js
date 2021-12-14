import './App.css';
import Home from './pages/home'
import About from './pages/about'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Merch from './pages/merch'
import Concerts from './pages/concerts';
import FAQ from './pages/faq';
import Supporters from './pages/supporters';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/FAQ" element={<FAQ />} />
        <Route exact path='/Supporters' element={<Supporters />} />
        <Route exact path="/Merch" element={<Merch />} />
        <Route exact path="/Concerts" element={<Concerts/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
