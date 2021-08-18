import './App.css';
import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { Provider } from 'react-redux'
import store  from './redux/store';
import Home from './components/Home/Home'
import Welcome from './components/Welcome/Welcome';
import CountryDetail from './components/CountryDetail/CountryDetail';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About'
import AddActivities from './components/AddActivities/AddActivities';
import Footer from './components/Footer/Footer';

const App = () => {

  return (
    <React.Fragment>
      <Provider store={store}>
        <BrowserRouter>
          <Route path='/:s'component={Navbar}/>
          <Route exact path="/country/:id" component={CountryDetail}/>
          <Route exact path="/add-activities" component={AddActivities}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/home" component={Home}/>
          <div class="footerS">
            <Footer/>
          </div>
          <Route exact path="/" component={Welcome}/>
        </BrowserRouter>
        </Provider>
    </React.Fragment>
  )
}

export default App;

