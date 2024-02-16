import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';

import Home from './pages/Home/Home';

import './App.css'
import AboutUs from './pages/About/AboutUs';
import ContactUs from './pages/Contact/ContactUs';
import ServiceDetails from './pages/ServiceDetails/ServiceDetails';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<AboutUs/>}></Route>
        <Route path='/contact' element={<ContactUs/>}></Route>
        <Route path='/services/:id' element={<ServiceDetails/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
