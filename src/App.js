import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from './Pages/Portfolio';
import AboutMe from './Pages/AboutMe';
import Skills from './Pages/Skills';
import ContactMe from './Pages/ContactMe';
import Landing from './Pages/Landing';

function App() {
  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path ="/" element={<Landing/>}></Route>
    <Route path ='/aboutme' element={<AboutMe/>}></Route>
    <Route path ="/portfolio" element={<Portfolio/>}></Route>
    <Route path ="/skills" element ={<Skills/>}></Route>
    <Route path ="/contactme" element={<ContactMe/>}></Route>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
