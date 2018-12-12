import React, { Component } from 'react'
import './Cams.css'
import SimpleModalWrapped from '../../components/Modal'
import ButtonBases from '../../components/ComplexButton'


  
// const gorillaCam = [
//     {
//       alt:'gorilla cam',
//       src: "https://www.youtube.com/embed/pHtOPHLhQME",
//       title: 'Gorilla Cam',
//       width: '33%',
//     }
//   ]; 

//   const bearCam = [
//     {
//       alt:'gorilla cam',
//       src: "https://www.youtube.com/embed/pHtOPHLhQME",
//       title: 'Gorilla Cam',
//       width: '33%',
//     },
//   ]; 

//   const pandaCam = [
//     {
//       alt:'gorilla cam',
//       src: "https://www.youtube.com/embed/pHtOPHLhQME",
//       title: 'Gorilla Cam',
//       width: '33%',
//     },
//   ]; 

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
        <ButtonBases onClick={this.handleOpen}/>
        <SimpleModalWrapped  />
     </div>
    );
  }
}

export default Cams;