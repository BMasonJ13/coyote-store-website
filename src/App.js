import './App.css';
import Home from './pages/home'
import About from './pages/about'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Concerts from './pages/concerts';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Concerts" element={<Concerts/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
