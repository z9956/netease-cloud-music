import React, { Component } from 'react';
import { HashRouter, Router, Route, Switch, Link } from 'react-router-dom';


import './style.scss';
import a from '@/static/images/galsang.png';

class PageA extends Component<any, any> {
  render() {
    return (
        <div>pagea</div>
    )
  }
}

class PageB extends Component<any, any> {
  render() {
    return (
        <div>pageb</div>
    )
  }
}

export default class Home extends Component<any, any> {
  render() {
    const { history } = this.props;
    return (
        <div className='list'>
          测试123
          <img width='40' height='40' src={ a } alt=""/>
          <Router history={ history }>
            <ul>
              <li>
                <Link to={ '/a' }>a</Link>
              </li>
              <li>
                <Link to={ '/b' }>b</Link>
              </li>
            </ul>
          </Router>


          <HashRouter>
            <Switch>
              <Route path={ '/a' } component={ PageA }></Route>
              <Route path={ '/b' } component={ PageB }></Route>
              {/*<Redirect to={'/'}/>*/ }
            </Switch>
          </HashRouter>
        </div>
    )
        ;
  }
}
