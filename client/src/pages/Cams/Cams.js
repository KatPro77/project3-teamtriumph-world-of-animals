import React, { Component } from 'react'
import './Cams.css'
import ButtonBases from '../../components/ComplexButton/ComplexButton.js'
import SimpleModalWrapped from '../../components/Modal/Modal.js'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';

const Animals = [
 {
     id: 1,
     name: 'Gorilla',
     url: 'https://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/mammals/m/mountain-gorilla_thumb.ngsversion.1538530889286.adapt.1900.1.jpg',
     width: '50%',
     src: "https://www.youtube.com/embed/pHtOPHLhQME"
   },
 {
     id: 2,
     name: 'Grizzly-Bear',
     url: 'https://usatbnqt.files.wordpress.com/2018/08/grizzly-bear.jpg',
     width: '50%'
   }
 ];

class Cams extends Component {


// handleBtnClick = event => {
  
//     const btntype = event.target.attributes.getNamedItem(Animals.id);

  render() {
    return (
      <div>
        {Animals.map(Animal => (
        <ButtonBases
          id={Animal.id}
          key={Animal.id}
          name={Animal.name}
          url={Animal.url}
          width={Animal.width}
        />
        ))}
      </div>
    );
  }
}

export default Cams;