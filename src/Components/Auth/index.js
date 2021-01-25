import React from 'react';
import Signin from './Signin';
import SignUp from './Signup';
import './style.css'
import {Route} from 'react-router-dom';
class Auth extends React.Component{
  render(){
   return(
     <div>
       {/* <Signin /> */}
       <Route path='/signin' component={Signin} />
       <Route path='/signup' component={SignUp} />
       {/* <SignUp /> */}
       </div>
   )
  }
}
export default Auth