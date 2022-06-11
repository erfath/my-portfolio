import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Footer from './Pages/Footer/Footer';
import Blogs from './Pages/Blogs/Blogs';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <div className="bg-neutral">
      <Navbar>
        <Routes>
          <Route path='home' element={<Home></Home>}></Route>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='about' element={<About></About>}></Route>
          <Route path='contact' element={<Contact></Contact>}></Route>
          <Route path="blogs" element={<Blogs></Blogs>}></Route>
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
