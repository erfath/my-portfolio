import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Footer from './Pages/Footer/Footer';
import Blogs from './Pages/Blogs/Blogs';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import NotFound from './Pages/NotFound/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GetInTouch from './Pages/GetInTouch/GetInTouch';

function App() {
  return (
    <div className="bg-neutral">
      <Navbar>
        <Routes>
          <Route path='home' element={<Home></Home>}></Route>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='contact' element={<GetInTouch></GetInTouch>}></Route>
          <Route path="blogs" element={<Blogs></Blogs>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
        <Footer></Footer>
      </Navbar>
      <ToastContainer />
    </div>
  );
}

export default App;
