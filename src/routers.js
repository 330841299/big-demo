import React from 'react';
import {Router,Route,IndexRoute,hashHistory} from 'react-router';
import App from './App';
import Home from './Home/home';
import Work from './Work/work';
import About from './About/about';
import Blog from './Blog/blog';

class Routers extends React.Component {
  render () {
    return(
        <Router history ={hashHistory}>
          <Route path ='/' component={App}>
            <IndexRoute component={Home}/>
            <Route path ='/work' component={Work}/>
            <Route path ='/about' component={About}/>
            <Route path ='/blog' component={Blog}/>
          </Route>
        </Router>
    )

  }
}

export default Routers;
