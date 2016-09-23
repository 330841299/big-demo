import React, { PropTypes } from 'react';
import {Link} from 'react-router';

class LeftNav extends React.Component {
  constructor(){
   super();
   title:'Home'
 }
 componentWillReceiveProps(){
   this.setState({
     title:  this.context.router.isActive('/',true) ? 'Home' :
             this.context.router.isActive('/blog') ? 'Blog' :
             this.context.router.isActive('/work') ? 'Work' :
             this.context.router.isActive('/about') ? 'About' : 'Item'
    })
 }
 componentWillMount(){
   this.setState({
     title: this.context.router.isActive('/',true) ? 'Home' :
             this.context.router.isActive('/blog') ? 'Blog' :
             this.context.router.isActive('/work') ? 'Work' :
             this.context.router.isActive('/about') ? 'About' : 'Item'
    })
 }
  render () {
    return(
      <div className='left-nav'>
        <h3>{this.state.title}</h3>
        <Link activeStyle={{color:'teal'}} onlyActiveOnIndex={true} to ='/'><span className="glyphicon glyphicon-home"></span>HOME</Link>
        <Link activeStyle={{color:'teal'}} to ='/work'><span className="glyphicon glyphicon-file"></span>WORK</Link>
        <Link activeStyle={{color:'teal'}} to ='/about'><span className="glyphicon glyphicon-heart"></span>ABOUT</Link>
        <Link activeStyle={{color:'teal'}} to ='/blog'><span className="glyphicon glyphicon-user"></span>BLOG</Link>
      </div>
    )

  }
}
LeftNav.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default LeftNav;
