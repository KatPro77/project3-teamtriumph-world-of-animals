import React, { Component } from 'react'
import './Cams.css'
import ButtonBases from '../../components/ComplexButton/ComplexButton.js'
// import Animals from './AnimalInfo'

const Animals = [
 {
     id: 1,
     name: 'Gorilla',
     url: 'https://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/mammals/m/mountain-gorilla_thumb.ngsversion.1538530889286.adapt.1900.1.jpg',
     width: '50%'
   },
 {
     id: 2,
     name: 'Grizzly-Bear',
     url: 'https://usatbnqt.files.wordpress.com/2018/08/grizzly-bear.jpg',
     width: '50%'
   }
 ];

class Cams extends Component {

  
 s
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