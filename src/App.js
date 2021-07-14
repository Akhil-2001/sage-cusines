import './App.css';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import React, { useState, useEffect } from 'react'; 
import Navbar from "./components/Navbar"
import Home from "./pages/home"
import Browse from "./pages/browse" 
import Footer from './components/Footer'
import AppetizerPage from './pages/appetizers'
import DessertsPage from './pages/desserts'
import MainCoursePage from './pages/maincourse'
import Details from './pages/details'
import Locate from "./pages/locate"
import AboutPage from "./pages/about"

function App() {
  
  return ( 
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/browse' component={Browse} />
          <Route path='/appetizers' component={AppetizerPage}/>
          <Route path='/desserts' component={DessertsPage}/>
          <Route path='/maincourse' component={MainCoursePage}/>
          <Route path='/details' component={Details}/>
          <Route path='/locate' component={Locate}/>
          <Route path='/help' component={AboutPage}/>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}
export default App;
