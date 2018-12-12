import React, { Component } from 'react';
import './playfish.css';



export default class PlayFish extends Component {
  render() {
    return (
      <div className="container">

        <div className="row">
          <div id="instructions" className="col-sm-12 text-center sDown">
            <br />
            <br />
            <br />
            <p>Click the Fish to add numbers until you match the given value</p>

          </div>
        </div>


        <div className="row" id="targetNumber">
          <h3 className="text-center" id="random">Number to Match:</h3>
          <h1 className="numberBox text-center" id="randomNumber">0</h1>
        </div>



        <div id="skullRow" className="row">
          <button id="red" className="col-md-2 col-md-offset-2 text-center skull sDown"><img src="../../../public/static/media/playfish/3-clown-orange.jpg" className="img-responsive icons" alt="Red Fish" />

            <button id="blue" className="col-sm-2 text-center skull sDown"><img src="../../../public/static/media/playfish/2-clown-blue.jpg" className="img-responsive icons" className="img-responsive icons" alt="Blue Fish" />

              <button id="yellow" className="col-sm-2 text-center skull sDown"><img src="../../../public/static/media/playfish/1-clown-yellow.jpg" className="img-responsive icons" alt="Yellow Fish" />

                <button id="green" className="col-sm-2 text-center skull sDown"><img src="../../../public/static/media/playfish/4-clown-green.jpg" className="img-responsive icons" alt="Green Fish" />		
      </div>



                <div className="row" id="totalPoints">
                  <h3 className="text-center" id="score">Your Total Score:</h3>
                  <h1 className="numberBox text-center" id="totalNumber">0</h1>
                </div>



                <br />
                <br />
                <br />

                <div className="card">
                  <div className="card-body">
                    Wins: <span id="wins">0</span>
                  </div>
                </div>

                <br />



                  <div className="card">
                    <div className="card-body">
                      Losses: <span id="loss">0</span>
                    </div>
                  </div>


                      
</div>
              );
            }
          }
