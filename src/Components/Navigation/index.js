import React from 'react';
import {Link} from 'react-router-dom';
import './style.css'
class Navigation extends React.Component{
render(){
  return(
    <div className="Navi">
     <ul>
      <Link to='/'> <li>HOME</li></Link>
      <Link to='/todolist'> <li>TODOLIST</li> </Link>
      <Link to='/signin'> <li>SIGNIN</li> </Link>
       </ul>
      </div>
  )
}
}
export default Navigation