import React, { Component } from 'react';
import './Games.css';
import ButtonBases from "../../components/ComplexButton/ComplexButton"



const gameImages = [
    {
      url: '/static/images/grid-list/breakfast.jpg',
      title: 'Breakfast',
      width: '40%',
    },
    {
      url: '/static/images/grid-list/burgers.jpg',
      title: 'Burgers',
      width: '30%',
    },
    {
      url: '/static/images/grid-list/camera.jpg',
      title: 'Camera',
      width: '30%',
    },
  ];


class Games extends Component {

state = {
  gameImages
}
  render() {
    return (
      <div>
        {this.state.gameImages.map(image=> (
        <ButtonBases 
          image={image.url}
          title={image.title}
          width={image.width}
        />
        ))}
      </div>
    )
  }
}

export default Games;