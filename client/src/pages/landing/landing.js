import React, { Component } from 'react';
import './Landing.css';
import FormContainer from '../../containers/Form/FormContainer.jsx';
// import UserAuthentication from '../userauthentication/recaptcha.js';
import Carousel from '../../components/carousel/carousel.js';

export default class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <FormContainer />
        {/* <UserAuthentication /> */}
        <Carousel />
      </div>
    );
  }
}
