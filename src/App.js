import './App.css';
import Home from './pages/home'
import About from './pages/about'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Merch from './pages/merch'
import Concerts from './pages/concerts';
import FAQ from './pages/faq';
import Supporters from './pages/supporters';
import Cafe from './pages/cafe'
import Gallery from './pages/gallery';
import Contact from './pages/contact';
import Accommodation from './pages/acommodation';
import Error from './pages/Error';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Navigate replace to="/Home" />} />
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/FAQ" element={<FAQ />} />
        <Route exact path='/Supporters' element={<Supporters />} />
        <Route exact path='/Gallery' element={<Gallery />} />
        {/* <Route exact path='/Cafe' element={<Cafe />} /> */}
        <Route exact path="/Merch" element={<Merch />} />
        <Route exact path="/Concerts" element={<Concerts/>} />
        <Route exact path="/Accommodations" element={<Accommodation />} />
        <Route exact path="/404" element={<Error />} />
        <Route exact path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
