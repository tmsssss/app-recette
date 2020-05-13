import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Connexion from './components/Connexion';
import NotFound from './components/NotFound';


const Root = (params) => (
  <Router>
    <Switch>
      <Route exact path='/'>
        <Connexion/>
      </Route>
      <Route path='/pseudo/:pseudo'>
        <App/>
      </Route>
      <Route>
        <NotFound/>
      </Route>
    </Switch>
  </Router>
  
)


ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
