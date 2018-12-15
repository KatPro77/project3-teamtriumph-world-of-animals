import React, { Component } from 'react';
import './Landing.css';
import FormContainer from '../../containers/FormContainer.jsx';
// import UserAuthentication from '../userauthentication/recaptcha.js';
import Carousel from '../../components/carousel/carousel.js';

export default class Landing extends Component {
<<<<<<< HEAD
 render() {
   return (
     <div className="landing">
       <FormContainer />
       {/* <UserAuthentication /> */}
       <Carousel />
     </div>
   );
 }
=======
  render() {
    return (
      <div>
        <FormContainer />
        {/* <UserAuthentication /> */}
        <Carousel />
      </div>
    );
  }
>>>>>>> a9f169972dc8e6f1cea8fb5b935c5f7a87f8ac7a
}
