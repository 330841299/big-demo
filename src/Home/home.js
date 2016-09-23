import React  from 'react'

class Home extends React.Component {
  render () {
    return(
      <div className="home-container">
        <div className="home-cover">
          <div className="home-item">
            <h2 >HI, I'M <span style={{color:'#00bcd4'}}>Mr'Song</span></h2>
            <p>WEB DEVELOPER</p>
            <button className='home-btn'>HIRE ME</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
