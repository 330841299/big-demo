import React, { PropTypes } from 'react';
import {Link} from 'react-router';

class NavFooter extends React.Component {
  render () {
    return(
      <div className='nav-footer'>
        <Link activeStyle={{color:'teal'}} onlyActiveOnIndex={true} to ='/'><span className="glyphicon glyphicon-home"></span><br/>HOME</Link>
        <Link activeStyle={{color:'teal'}} to ='/work'><span className="glyphicon glyphicon-file"></span><br/>WORK</Link>
        <Link activeStyle={{color:'teal'}} to ='/about'><span className="glyphicon glyphicon-heart"></span><br/>ABOUT</Link>
        <Link activeStyle={{color:'teal'}} to ='/blog'><span className="glyphicon glyphicon-user"></span><br/>BLOG</Link>
      </div>
    )

  }
}

export default NavFooter;
