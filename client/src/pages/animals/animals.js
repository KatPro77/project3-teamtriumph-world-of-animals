import React, { Component } from 'react';
<<<<<<< HEAD
import './Animals.css'
import { withStyles } from '@material-ui/core/styles';
import searchresults from '../../components/searchresults/searchresults';
import searchbar from '../../components/searchbar/searchbar'

import TextField from '@material-ui/core/TextField';
import MediaCard from '../../components/searchresults/searchresults.js'
import {API} from'../utils/API'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});


class Animals extends Component {
  state = {
    search: "",
    animal: [],
    results: [],
    error: ""
  };

  componentDidMount() {
    API.getAnimals()
      .then(res => this.setState({ animals: res.data.message }))
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getAnimals(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };
  render() {
    return (
        <div>
          <searchbar
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            animals={this.state.animals}
          />
          <searchresults results={this.state.results} />
=======
<<<<<<< HEAD
import './animals.css'
import { withStyles } from '@material-ui/core/styles';
// import SearchCard from '../../components/searchbar/searchbar.js'
import TextField from '@material-ui/core/TextField';
import MediaCard from '../../components/searchresults/searchresults.js'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%',
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});



class Animals extends Component {
=======
import './Animals.css';
import SearchCard from '../../components/searchbar/searchbar.js';
import MediaCard from '../../components/searchresults/searchresults.js';
>>>>>>> 2da16cc80d6936ce6723b89719c021f8f2feae03

  render() {
  
    
    return (


      <div>
<<<<<<< HEAD
       <TextField
          id="outlined-search"
          label="Search for an Animal..."
          type="search"
          margin="normal"
          variant="outlined"
        />
       <MediaCard />
=======
        <SearchCard />
        <div className="card-container">
          <MediaCard />
        </div>
>>>>>>> 2da16cc80d6936ce6723b89719c021f8f2feae03
>>>>>>> 7318f68a346a8bc0bfb3fcd8296c567ac77c2c6b
      </div>
    );
  }
}
<<<<<<< HEAD
  
    
export default withStyles(styles)(Animals)
=======
<<<<<<< HEAD

export default withStyles(styles)(Animals)
=======
>>>>>>> 2da16cc80d6936ce6723b89719c021f8f2feae03
>>>>>>> 7318f68a346a8bc0bfb3fcd8296c567ac77c2c6b
