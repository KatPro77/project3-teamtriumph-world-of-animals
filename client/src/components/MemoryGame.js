import React, { Component } from 'react';
import './MemoryGame.css';
import {Animated} from "react-animated-css";

class MemoryGame extends React.Component {
  constructor(props) {
   super(props);
    this.ImagePieces = ['camel', 'camel', 'deer', 'deer', 'frog', 'frog',
    'horse', 'horse', 'squirel', 'squirel', 'wolf', 'wolf'];
    this.tempCheckArr = [];
    this.state = {
      showImg: Array(this.ImagePieces.length).fill('hidden'),
      divClick: true,
      compareImgArr: [],
      counter: 0
    }   
    this.checkMatch = this.checkMatch.bind(this);
  }


  //Begining of shuffle 
  componentWillMount() { 
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
    shuffleArray(this.ImagePieces);
  }

  checkMatch(key, e) {
    this.tempCheckArr.push(key.toString());

    const imgSrc = e.target.firstChild.src;
    const compareImgArr = [...this.state.compareImgArr];
    compareImgArr.push(imgSrc);

    const arr = this.state.showImg
    arr[key] = 'visible';

   
    this.setState({
      showImg: arr,
      compareImgArr: compareImgArr,
      counter: this.state.counter + 1
    });
    //Check if user selected two images 
    if (this.state.counter % 2) {
      this.setState({
        divClick: false
      });
      if (compareImgArr[0] === compareImgArr[1]) {
        this.tempCheckArr = [];
        this.setState({
          compareImgArr: [],
          divClick: true
        });
      } else {
        //reverse if the pictures dont match
        var tempArr = this.state.showImg
        var firstElement = parseInt(this.tempCheckArr[0]);
        var secondElement = parseInt(this.tempCheckArr[1]);
        setTimeout(()=>{
          //Flip the image after 1 sec 
          tempArr[firstElement] = 'hidden';
          tempArr[secondElement] = 'hidden';
          this.tempCheckArr = [];
          this.setState({
            showImg: tempArr,
            compareImgArr: [],
            divClick: true
          })
        }, 1000)

      }
    }
  }

  render() {
    return(
        // render the main HTML for the display of tiles
      <div >
       <Animated animationIn="zoomInUp" animationOut="zoomInUp" isVisible={true}>

        <div className="mui-panel wrapper col-md-10">

          {this.ImagePieces.map((text, i) => {
            return (
              //Dynamically get the picature and assign a key and then return the i (position in the array)
              <div key={i} className="modal mui-panel" onClick={this.state.divClick ? (e) => this.checkMatch(i, e) : undefined}>
                  <img style={{visibility: this.state.showImg[i]}} src={'./'+text+'.jpg'}
                  srcSet={'./IMG_'+text+'.jpg 1000w'} key={i} alt="Game Element"/>
              </div>

            )
          })}
           <div className='col-md-2'>
           <a href="games"><input type="button"className="Mybutton" value="Play Again"></input></a>
      </div>
        </div>
        </Animated>

      </div>
     


    )
  }
}


export default MemoryGame;