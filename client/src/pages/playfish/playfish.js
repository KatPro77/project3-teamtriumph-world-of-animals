import React, { Component } from 'react';
import './playfish.css';



export default class PlayFish extends Component {
  render() {
    return (
      <div className="container" id="playfish">

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
          <button id="red" className="col-md-2 col-md-offset-2 text-center skull sDown"/><img src="components/playfish/images/3-clown-orange.jpg" className="img-responsive icons" alt="Red Fish" />

            <button id="blue" className="col-sm-2 text-center skull sDown"/><img src="components/playfish/images/2-clown-blue.jpg" className="img-responsive icons" className="img-responsive icons" alt="Blue Fish" />

              <button id="yellow" className="col-sm-2 text-center skull sDown"/><img src="components/playfish/images/1-clown-yellow.jpg" className="img-responsive icons" alt="Yellow Fish" />

                <button id="green" className="col-sm-2 text-center skull sDown"/><img src="components/playfish/images/4-clown-green.jpg" className="img-responsive icons" alt="Green Fish" />		
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

$(document).ready(function () {
    

    // create variables 
    var playerScore = 0;
    var wins = 0;
    var loss = 0;
    $("#wins").text(wins);
    $("#loss").text(loss);


    // create the random number to match, 19 - 120
    var random = Math.floor(Math.random() * 102) + 19;
    $("#randomNumber").text(random);

    // console.log("#random" + random);

    // random numbers for each skull (1-12) 
    var red = Math.floor(Math.random()*12) + 1;
    var blue = Math.floor(Math.random()*12) + 1;
    var yellow = Math.floor(Math.random()*12) + 1;
    var green = Math.floor(Math.random()*12) + 1;
 
    // console.log(red);
    // console.log(blue);
    // console.log(yellow);
    // console.log(green);



    //Start the game
    function gameStart() {
        random = Math.floor(Math.random() * 102) + 19;
        $("#randomNumber").text(random);
        red = Math.floor(Math.random()*12) + 1;
        blue = Math.floor(Math.random()*12) + 1;
        yellow = Math.floor(Math.random()*12) + 1;
        green = Math.floor(Math.random()*12) + 1;
        playerScore = 0;
        $("#totalNumber").text(playerScore);
    
    }

     // Display wins
    function gameWin(){
        alert("YOU WIN!");
        wins++; 
        $("#wins").text(wins);
        gameStart();
    }
    // Display losses
    function gameOver(){
        alert ("GAME OVER! Try again!");
        loss++;
        $("#loss").text(loss);
        gameStart();
    }

   
    // Skull buttons
    $("#red").on ("click", function(){
        playerScore = playerScore + red;
        // console.log("New playerTotal= " + playerTotal);
        $("#totalNumber").text(playerScore); 
              //Win & lose conditions
            if (playerScore == random){
              gameWin();
            }
            else if (playerScore > random){
              gameOver();
            }   
      })

      $("#blue").on ("click", function(){
        playerScore = playerScore + blue;
        // console.log("New playerTotal= " + playerTotal);
        $("#totalNumber").text(playerScore); 
              //Win & lose conditions
            if (playerScore == random){
              gameWin();
            }
            else if (playerScore > random){
              gameOver();
            }   
      })

      $("#yellow").on ("click", function(){
        playerScore = playerScore + yellow;
        // console.log("New playerTotal= " + playerTotal);
        $("#totalNumber").text(playerScore); 
              //Win & lose conditions
            if (playerScore == random){
              gameWin();
            }
            else if (playerScore > random){
              gameOver();
            }   
      })

      $("#green").on ("click", function(){
        playerScore = playerScore + green;
        // console.log("New playerTotal= " + playerTotal);
        $("#totalNumber").text(playerScore); 
              //Win & lose conditions
            if (playerScore == random){
              gameWin();
            }
            else if (playerScore > random){
              gameOver();
            }   
      })

      gameStart();

   

                      
</div>
              );
            }
          }
