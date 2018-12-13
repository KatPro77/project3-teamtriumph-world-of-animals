import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

const styles = {
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

function SearchCard(props) {
  const { classes } = props;


  return (
    <Card className={classes.card}>
      <CardContent>
      
        <InputBase
          placeholder="Search for an Animal..."
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
        />
      </CardContent>
      <CardActions>
        <Button>
         <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
        
        </Button>
      </CardActions>
    </Card>
  );
}

SearchCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SearchCard);