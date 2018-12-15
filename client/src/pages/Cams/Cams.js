import React, { Component } from 'react'
import './Cams.css'
import MediaCard from '../../components/mediacard/mediacard.js';
import Grid from '@material-ui/core/Grid';


const Animals = [
  {
    id: 1,
    title: 'Gorilla',
    h2: 'Gorilla',
    image: 'https://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/mammals/m/mountain-gorilla_thumb.ngsversion.1538530889286.adapt.1900.1.jpg',
    width: '60%',
    src: "https://www.youtube.com/embed/pHtOPHLhQME"
  },
  {
    id: 2,
    title: 'Grizzly-Bear',
    h2: 'Grizzly',
    image: 'https://usatbnqt.files.wordpress.com/2018/08/grizzly-bear.jpg',
    width: '60%'
  },

  {
    id: 3,
    title: 'Panda',
    h2: 'Panda',
    image: 'https://www.natgeokids.com/wp-content/uploads/2014/04/panda-facts-6-1.jpg',
    width: '60%'
  },

  {
    id: 4,
    title: 'Elephant',
    h2: 'Elephant',
    image: 'https://d3i6fh83elv35t.cloudfront.net/newshour/app/uploads/2015/05/542106059-1024x683.jpg',
    width: '60%'
  },
  {
    id: 5,
    title: 'Penguin',
    h2: 'Penguin',
    image: 'https://animals.sandiegozoo.org/themes/animals/images/live-cams-penguin.jpg',
    width: '60%'
  },
  {
    id: 6,
    title: 'Koala',
    h2: 'Koala',
    image: 'https://animals.sandiegozoo.org/themes/animals/images/live-cams-koala.jpg',
    width: '60%'
  },
  {
  id: 7,
  title: 'Condor',
  h2: 'Condor',
  image: 'https://animals.sandiegozoo.org/themes/animals/images/live-cams-condor.jpg',
  width: '60%'
},
{
id: 8,
title: 'Polar Bear',
h2: 'Polar Bear',
image: 'https://animals.sandiegozoo.org/themes/animals/images/live-cams-polar.jpg',
width: '60%'
}
];

class Cams extends Component {

  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    

    return (
      <div className = "Cams">
      <Grid
      container
      item ='auto'
      justify='center'
      >
        {Animals.map(Animal => (
        <MediaCard
          id={Animal.id}
          key={Animal.id}
          h2={Animal.h2}
          title={Animal.title}
          image={Animal.image}
          width={Animal.width}>
        </MediaCard>
        ))}
       </Grid> 
      </div>
    );
  }
}

export default Cams;