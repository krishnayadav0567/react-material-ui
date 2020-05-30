import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { grey } from '@material-ui/core/colors';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles({
  root: {
    minWidth: 20,
    
    buttoncolor: green,
    marginLeft: 240,
    marginRight: 900,
    marginBottom: -110,
  },
  
  marg: {
    backgroundColor: grey,

  },
  bullet: {
    display: 'inline',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 20,
  },
  pos: {
    marginBottom: 10,
    
    
  },
});

export default function Today() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
   
    

    <Card className={classes.root}>
      <CardContent>
      <Button align="right"  type="submit" size="small" variant="contained" color="primary" >
             Today
       </Button>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         
        </Typography>
        <Typography variant="h7" component="h2">
          Vistors
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        
        
      </CardActions>
    </Card>
  );
}