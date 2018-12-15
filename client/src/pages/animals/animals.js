import React, { Component } from 'react';
import './animals.css';
import SearchCard from '../../components/searchbar/searchbar.js';
import MediaCard from '../../components/searchresults/searchresults.js';

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
