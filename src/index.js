import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import {createBrowserHistory} from 'history';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Home from './components/Home';
import Profile from './components/Profile';
import Bookclub from './components/Bookclub';

const routes = [
  {
    path: '/home',
    component: Home,
    name: 'Home'
  },
  {
    path: '/user/:id',
    component: Profile,
    name: 'Profile'
  },
  {
    path: '/bookclub/:id',
    component: Bookclub,
    name: 'Bookclub'
  },
  {
    path: '/',
    component: App,
    name: 'App'
  }
]

const root = document.getElementById("root");
const hist = createBrowserHistory();

ReactDOM.render(<Router history={hist}>
  <Switch>
    {
      routes.map((route) => {
        return(<Route path={route.path} component={route.component} key={route.name}></Route>)
      })
    }
  </Switch>
  </Router>, root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
