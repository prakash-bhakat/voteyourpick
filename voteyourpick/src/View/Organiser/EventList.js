import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText, Paper, Typography } from '@material-ui/core';
import AppBar from '../Component/AppBar';
import { Button } from '@material-ui/core';
import { useNavigate } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(2),
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)', // Adding shadow border
    marginBottom: theme.spacing(1),
  },
}));

const EventList = () => {
  const navigate = useNavigate()
  const classes = useStyles();
  const handleClick = () => {
    navigate('/create');
  };
  // Sample food data
  const foods = [
    { name: 'Pizza', isVegetarian: false },
    { name: 'Salad', isVegetarian: true },
    { name: 'Burger', isVegetarian: false },
    { name: 'Pasta', isVegetarian: true },
  ];

  return (
    <>
    <AppBar />
    <div className=" mx-auto w-4/5">
      <List>
        {foods.map((food, index) => (
          <Paper key={index} elevation={5}> {/* Using Paper component for elevation effect */}
            <ListItem className={classes.listItem}>
              <ListItemText>
                <Typography variant='h5'>{food.name}</Typography>
                <Typography color='blue'>17-Dec-2024</Typography>
              </ListItemText>
              <ListItemText style={{"textAlign":'right'}} >
                {
                  food.isVegetarian ?
                  <Typography>On Pogress</Typography>:
                  <Typography>Closed</Typography>
                }
              </ListItemText>
            </ListItem>
          </Paper>
        ))}
      </List>
    <Button variant="contained" color="primary" onClick={handleClick}>
      Create
    </Button>
    </div>

    </>
  );
};

export default EventList;