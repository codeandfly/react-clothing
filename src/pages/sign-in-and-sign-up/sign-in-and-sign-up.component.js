// import React, { Component } from 'react'
import React from 'react'
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './sign-in-and-sign-up.styles.scss';

// class SignInandSignUpPage extends Component {
//   render() {
//     return (
//       <div>
        
//       </div>
//     )
//   }
// }

const SignInandSignUpPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn/>
      <SignUp/>
    </div>
  )
}

export default SignInandSignUpPage;