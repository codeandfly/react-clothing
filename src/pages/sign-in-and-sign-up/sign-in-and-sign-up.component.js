// import React, { Component } from 'react'
import React from 'react'
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import { SignInAndSignUpContainer } from './sign-in-and-sign-up.styles';

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
    <SignInAndSignUpContainer>
      <SignIn/>
      <SignUp/>
    </SignInAndSignUpContainer>
  )
}

export default SignInandSignUpPage;