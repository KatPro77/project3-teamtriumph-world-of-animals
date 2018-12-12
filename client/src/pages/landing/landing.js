import React, { Component } from 'react';
import './landing.css';
import FormContainer from '../../containers/FormContainer.jsx';
// import UserAuthentication from '../userauthentication/recaptcha.js';
import Carousel from '../../components/carousel/carousel.js';

export default class Landing extends Component {
 render() {
   return (
     <div>
       <FormContainer />
       {/* <UserAuthentication /> */}
       <Carousel />
     </div>
   );
 }
}

