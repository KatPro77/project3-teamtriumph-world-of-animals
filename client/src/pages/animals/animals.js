import React, { Component } from 'react';
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
      </div>
    );
  }
}
<<<<<<< HEAD

export default withStyles(styles)(Animals)
=======
>>>>>>> 2da16cc80d6936ce6723b89719c021f8f2feae03
