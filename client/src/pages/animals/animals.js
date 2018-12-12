//susan added some code here just to be able to test the navbar link to this page; the javascript below may need to be updated -- LEAH & JORDAN Pls let's chat about this page/habitats page. 
import React, { Component } from 'react';
import './animals.css';
<<<<<<< HEAD
import Navbar from '../../components/Navbar'
import SearchCard from '../../components/searchbar/searchbar.js'
import MediaCard from '../../components/searchresults/searchresults.js'
=======
import Searchbar from '../../components/searchbar/searchbar.js'
import Searchresults from '../../components/searchresults/searchresults.js'
>>>>>>> 8616eba1a24b998a7c80a7add2dab9519ea0eba6


export default class Animals extends Component {
  render() {
    return (
     
      <div>
<<<<<<< HEAD
        <Navbar />
        <SearchCard />
        <MediaCard />
=======
         <h1>Hello from Animals Page </h1>
        <Searchbar />
        <Searchresults />
>>>>>>> 8616eba1a24b998a7c80a7add2dab9519ea0eba6
      </div>

    );
  }
}

<<<<<<< HEAD
// $("#find-animal").on("click", (load()) {
//   event.preventDefault()
// }
=======
// // $("#find-animal").on("click", (load()) {
// //   event.preventDefault()
// // });
>>>>>>> 8616eba1a24b998a7c80a7add2dab9519ea0eba6

// const animal = $("#animal-input").val();
// const queryURL = "https://www.pixabay.com/api/animals?q=" + type +
//   "&apikey=10803476-df1ba506200da6c7fb26617df";

// $.ajax({
//   url:
//     "https://www.pixabay.com/api/animals?q=" + type +
//     "&apikey=10803476-df1ba506200da6c7fb26617df",

//   method: "GET"
// }).then(function (response) {
//   $("display").empty();

//   for (var i = 0; i <
//     response.Search.length; i++) {

//    const animal = $("").text(response.Search[i].Animal);
//    const myNewImage = $("img srce='../assets/animalpics/.. " + response);

//     $("display").append(animal);
//     $("display").append(myNewImage);

//     $.ajax({
//       type: "POST",
//       url: "https://www.pixabay.com/api/animals?q=" + type +
//         "&apikey=10803476-df1ba506200da6c7fb26617df",
//       data: data,
//       success: success,
//       dataType: dataType
//     })}});