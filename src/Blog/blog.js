import React  from 'react';
import BlogCards from '../component/blogCards'

let data=[
  {index:1,title:'真正的高手是怎样练成的',desc:'不断的撸啊撸撸啊撸',url:'a'},
  {index:2,title:'真正的高手是怎样练成的',desc:'不断的撸啊撸撸啊撸',url:'b'},
  {index:3,title:'真正的高手是怎样练成的',desc:'不断的撸啊撸撸啊撸',url:'c'},
  {index:4,title:'真正的高手是怎样练成的',desc:'不断的撸啊撸撸啊撸',url:'d'}
]
class Blog extends React.Component {
  render () {
    return(
      <div style={{width:'100%',marginTop:'20px'}}>
        {data.map((item,i)=><BlogCards {...item} key={i}/>)}

      </div>
    )
  }
}

export default Blog;
