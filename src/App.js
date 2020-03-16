import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';

import {Switch,Route} from 'react-router-dom';
import Home from './components/pages/Home';
import News from './components/pages/News';
import Contacts from './components/pages/Contacts';
import Details from './components/pages/Details';
import NotFoundPage from './components/pages/NotFoundPage';

function App() {
  return (
    <div className="App">
     <Navbar/>
   <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/news" component={News}/>
      <Route path="/contacts" component={Contacts}/>
      <Route path="/details" component={Details}/>
      <Route component={NotFoundPage}/>
   </Switch>
    <Footer/>
    </div>
  );
}

export default App;
