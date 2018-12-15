import React, { Component } from 'react';
// import API from'../utils/API'
import './Animals.css'
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
  // state = {
  //   search: "",
  //   animal: [],
  //   results: [],
  //   error: ""
  // };

  // componentDidMount() {
  //   API.getAnimals()
  //     .then(res => this.setState({ animals: res.data.message }))
  //     .catch(err => console.log(err));
  // }

  // handleInputChange = event => {
  //   this.setState({ search: event.target.value });
  // };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   API.getAnimals(this.state.search)
  //     .then(res => {
  //       if (res.data.status === "error") {
  //         throw new Error(res.data.message);
  //       }
  //       this.setState({ results: res.data.message, error: "" });
  //     })
  //     .catch(err => this.setState({ error: err.message }));
  // };

  render() {
  
    
    return (


      <div className='animal-search'>
       <TextField
          id="outlined-search"
          label="Search for an Animal..."
          type="search"
          margin="normal"
          variant="outlined"
          // handleFormSubmit={this.handleFormSubmit}
          // handleInputChange={this.handleInputChange}
          // animals={this.state.animals}
        />
        
        <div className='card-container'>
       <MediaCard 
  
       />
       </div>
      </div>
    );
  }
}

  
    
export default withStyles(styles)(Animals)


