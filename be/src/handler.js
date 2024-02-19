// src/lambda.js
const express = require('express');
const app = express();
const dynamodb = require('./dynamodb');

// Define routes
app.post('/items', async (req, res) => {
  try {
    const { id, name } = req.body;
    const createResult = await dynamodb.createItem({ id, name });
    res.json(createResult);
  } catch (error) {
    console.error('Error creating item:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.get('/items/:id', async (req, res) => {
  try {
    const itemId = req.params.id;
    const getItemResult = await dynamodb.getItem(itemId);
    res.json(getItemResult);
  } catch (error) {
    console.error('Error getting item:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.put('/items/:id', async (req, res) => {
  try {
    const itemId = req.params.id;
    const { name } = req.body;
    const updateResult = await dynamodb.updateItem(itemId, { name });
    res.json(updateResult);
  } catch (error) {
    console.error('Error updating item:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.delete('/items/:id', async (req, res) => {
  try {
    const itemId = req.params.id;
    const deleteResult = await dynamodb.deleteItem(itemId);
    res.json(deleteResult);
  } catch (error) {
    console.error('Error deleting item:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Lambda handler function
exports.handler = app;
