import React, { Component } from 'react'
import './Cams.css'
import Navbar from '../../components/Navbar'
import SimpleModalWrapped from '../../components/Modal'
import ButtonBases from '../../components/ComplexButton'
import Animals from './AnimalInfo'

  


class Cams extends Component {
  
handleOpen = () => {
  this.setState({ open: true });
      };
handleClose = () => {
this.setState({ open: false });
      };

  render() {
    return (
      <div>
        {/* <ButtonBases onClick={this.handleOpen}/> */}
        <SimpleModalWrapped  />
     </div>
    );
  }
}

export default Cams;