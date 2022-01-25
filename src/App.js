import logo from './logo.svg';
import './App.css';

import Home from './pages/Home';
import Error from './pages/Error';
import SingleRoom from './pages/SingleRoom';
import Rooms from './pages/Rooms';

import Navbar from './components/Navbar';

import {Route, Router, Routes, Switch} from 'react-router-dom'



function App() {
  return (
    <>
    <Navbar />
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/rooms/" component={Rooms} />
    <Route exact path="/rooms/:slug" component={SingleRoom} />
    <Route component={Error} />
    </Switch>
    </>
  );
}

export default App;
