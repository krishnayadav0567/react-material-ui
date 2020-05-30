import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 20,
    marginBottom: 500,
    
    marginLeft: 470,
    marginRight: 670,
    
  },
  bullet: {
    display: 'inline',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 12,
  },
  pos: {
    marginBottom: 0,
    
    
  },
});


export default function Week() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
   
    

    <Card className={classes.root}>
      <CardContent>
      <Button align="right"  type="submit" size="small" variant="contained" color="primary" >
             Week
       </Button>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         
        </Typography>
        <Typography variant="h7" component="h2">
        Activity
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
