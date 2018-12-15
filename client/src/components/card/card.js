import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import './card.css'

const styles = {
  card: {
    width: 1000,

  },
  media: {
    height: 600,
  },
};

function MediaCard(props) {
  const { classes } = props;
  return (
    <div className= 'cardStyle'>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="http://www.sciencemag.org/sites/default/files/styles/article_main_large/public/images/cc_iStock_18996432_LARGE_16x9.jpg"
          title="Contemplative Reptile"
          />
        <CardContent>
         
        </CardContent>
      </CardActionArea>
      <CardActions>
    
        <Button size="small" color="primary">
          Play Game!
        </Button>
      </CardActions>
    </Card>
    </div>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);
