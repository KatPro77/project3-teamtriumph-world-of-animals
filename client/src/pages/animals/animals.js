//susan added some code here just to be able to test the navbar link to this page; the javascript below may need to be updated -- LEAH & JORDAN Pls let's chat about this page/habitats page. 
import React, { Component } from 'react';
import './animals.css';
import SearchCard from '../../components/searchbar/searchbar.js'
import MediaCard from '../../components/searchresults/searchresults.js'


export default class Animals extends Component {
  render() {
    return (


      <div>
        <SearchCard />
        <div className="card-container">
          <MediaCard />
        </div>
      </div>

    );
  }
}

