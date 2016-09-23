import React, { PropTypes } from 'react'

class NavHeader extends React.Component {
  handleClick(){
   this.context.router.goBack();
 }
  constructor(){
   super();
   title:'Home'
 }
 componentWillReceiveProps(){
   this.setState({
     title: this.context.router.isActive('/',true) ? 'Home' :
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
        <div className='nav-header'>
          <p onClick ={this.handleClick.bind(this)}><span className="glyphicon glyphicon-arrow-left"></span>Back</p>
          <h3>{this.state.title}</h3>
          <span className="glyphicon glyphicon-tasks"></span>


        </div>
    )

  }
}
NavHeader.contextTypes = {
  router: React.PropTypes.object.isRequired
}


export default NavHeader;
