import React, { PropTypes } from 'react';
import {Link} from 'react-router';

class LeftNav extends React.Component {
  render () {
    return(
      <div className='left-nav'>
        <h3>Mr丶Song</h3>
        <Link activeStyle={{color:'teal'}} onlyActiveOnIndex={true} to ='/'><span className="glyphicon glyphicon-home"></span>HOME</Link>
        <Link activeStyle={{color:'teal'}} to ='/work'><span className="glyphicon glyphicon-file"></span>WORK</Link>
        <Link activeStyle={{color:'teal'}} to ='/about'><span className="glyphicon glyphicon-heart"></span>ABOUT</Link>
        <Link activeStyle={{color:'teal'}} to ='/blog'><span className="glyphicon glyphicon-user"></span>BLOG</Link>
      </div>
    )

  }
}

export default LeftNav;
