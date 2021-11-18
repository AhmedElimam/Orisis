import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/HomPage/Home';
import Footer from './components/pages/Footer/Footer';
import Services from './components/pages/Services/Services'

function App() {
  return (
    <Router>
     <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
                <Route path='/' exact component={Services} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
