import React, { PropTypes } from 'react'

class NavHeader extends React.Component {
  render () {
    return(
        <div className='nav-header'>
          <p><span className="glyphicon glyphicon-arrow-left"></span>Back</p>
          <h3>Mr丶Song</h3>
          <span className="glyphicon glyphicon-tasks"></span>


        </div>
    )

  }
}

export default NavHeader;
