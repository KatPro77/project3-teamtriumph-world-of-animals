//susan added some code here just to be able to test the navbar link to this page; the javascript below may need to be updated -- LEAH & JORDAN Pls let's chat about this page/habitats page. 
import React, { Component } from 'react';
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

  render() {
  
    
    return (
     
      <div>
       <TextField
          id="outlined-search"
          label="Search for an Animal..."
          type="search"
          margin="normal"
          variant="outlined"
        />
       <MediaCard />
      </div>

    );
  }
}

export default withStyles(styles)(Animals)