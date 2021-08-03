import './App.css';
import React from 'react'
import {BrowserRouter as Router, Route, Switch, useParams} from 'react-router-dom'
import { Provider } from 'react-redux'
import store  from './redux/store';
import Home from './components/Home/Home'
import Welcome from './components/Welcome/Welcome';
import CountryDetail from './components/CountryDetail/CountryDetail';


const App = () => {

  return (
    <React.Fragment>
      <Provider store={store}>
        <Router>
          <Route exact path="/" component={Welcome}/>
            <Switch>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/country/:id" component={CountryDetail}/>
            </Switch>
          </Router>
        </Provider>
    </React.Fragment>
  )
}

export default App;

