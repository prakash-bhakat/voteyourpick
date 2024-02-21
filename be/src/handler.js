// src/lambda.js
const express = require('express');
const app = express();
const dynamodb = require('./dynamodb');
const { v4: uuidv4 } = require('uuid');

// Define routes
app.post('/createEvent', async (req, res) => {
  try {
    const { eventName, date, eventDescription, foodList} = req.body;
    const eventId = uuidv4();
    const eventResult = await dynamodb.createEvent({eventId, eventName, date, eventDescription});
    if (eventResult.success)
    {
      const foodResult = await dynamodb.createFood(foodList);
      if(foodResult.success)
      {
        return eventResult;
      }
    }else {
      return eventResult;
    }
  } catch (error) {
    console.error('Error creating item:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// app.get('/items/:id', async (req, res) => {
//   try {
//     const itemId = req.params.id;
//     const getItemResult = await dynamodb.getItem(itemId);
//     res.json(getItemResult);
//   } catch (error) {
//     console.error('Error getting item:', error);
//     res.status(500).json({ error: 'An error occurred' });
//   }
// });

// app.put('/items/:id', async (req, res) => {
//   try {
//     const itemId = req.params.id;
//     const { name } = req.body;
//     const updateResult = await dynamodb.updateItem(itemId, { name });
//     res.json(updateResult);
//   } catch (error) {
//     console.error('Error updating item:', error);
//     res.status(500).json({ error: 'An error occurred' });
//   }
// });

// app.delete('/items/:id', async (req, res) => {
//   try {
//     const itemId = req.params.id;
//     const deleteResult = await dynamodb.deleteItem(itemId);
//     res.json(deleteResult);
//   } catch (error) {
//     console.error('Error deleting item:', error);
//     res.status(500).json({ error: 'An error occurred' });
//   }
// });

// Lambda handler function
exports.handler = app;
