import logo from './logo.svg';
import './App.css';

import Home from './pages/Home';
import Error from './pages/Error';
import SingleRoom from './pages/SingleRoom';
import Rooms from './pages/Rooms';

import Navbar from './components/Navbar';

import {Route, Router, Routes} from 'react-router-dom'



function App() {
  return (
    <>
    <Navbar />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="home" element={<Home />} />
    <Route path="/rooms" element={<Rooms />} />
    <Route exact path="/rooms/:slug" element={<SingleRoom />} />
    <Route path="*" element={<Error />} />
    </Routes>
    </>
  );
}

export default App;
