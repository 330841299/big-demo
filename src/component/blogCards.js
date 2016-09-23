import React, { PropTypes } from 'react';
import { Link } from 'react-router';
class BlogCards extends React.Component {
  render () {
    let styles={
      root:{
        boxShadow: '0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24)',
        width:'96%',
        borderRadius:'5px',
        margin:'0 auto',
        marginBottom:'20px',
      },
      index:{
          backgroundColor:'#00bcd4',
          height:'70px',
          textAlign:'center',
          borderRadius: '10px 10px 0 0',
          paddingTop:'10px'
        },
        num:{
          lineHeight:'50px',
          width:'60px',
          height:'50px',
          borderRadius:'50%',
          border: '2px solid #fff',
          display:'block',
          fontSize:'20px',
          margin:'0px auto',
          color:'#fff',
          fontWeight: '600'
        },
        content:{
          padding:'20px',
        },
        title:{
            fontSize:'18px',
            marginBottom:'20px'
        },
        desc:{
            fontSize:'16px',
            marginBottom:'20px'

        },
        btn:{
            display:'block',
            borderRadius:'6px',
            border: '2px solid #00BCD4',
            width:'70px',
            height:'30px',
            textAlign:'center',
            lineHeight: '30px',
            }
    }
        let add = `item/${this.props.url}`
    return(
      <div style={styles.root}>
        <div style={styles.index}><span style={styles.num}>{this.props.index}</span></div>
        <div style={styles.content}>
          <p style={styles.title}>{this.props.title}</p>
          <p style={styles.desc}>{this.props.desc}</p>
          <Link to={add} style={styles.btn}>阅读更多</Link>
        </div>
      </div>
    )
  }
}
BlogCards.defaultProps={
  index:1,
  title:'这是标题',
  desc:'这是介绍'
}
BlogCards
export default BlogCards;
