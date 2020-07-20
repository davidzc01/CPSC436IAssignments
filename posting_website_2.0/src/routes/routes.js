import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react';
import HomePage from '../components/HomePage/HomePage';
import AboutPage from '../components/AboutPage/AboutPage';
import Header from '../components/Header/Header'

class Routes extends React.Component {
  render() {
    return <Router>
      <div style = {{display: 'flex'}}>
        <Header/>
        <Switch>
            <Route exact key='home' path='/' component={HomePage}/>
            <Route exact key='about' path='/about' component={AboutPage}/>
            <Route exact key='notFound' path='*'>
                {<div>'OOPS! The Page Not Found :('</div>}
            </Route>
        </Switch>
      </div>
    </Router>;
  }
}

export default Routes;
