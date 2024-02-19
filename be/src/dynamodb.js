// dynamodb.js
const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

const TABLE_NAME = 'MyTableName'; // Replace with your actual table name

// Create operation
async function createItem(item) {
  const params = {
    TableName: TABLE_NAME,
    Item: item
  };

  try {
    await dynamodb.put(params).promise();
    return { success: true };
  } catch (error) {
    console.error('Error creating item:', error);
    return { success: false, error };
  }
}

// Read operation
async function getItem(itemId) {
  const params = {
    TableName: TABLE_NAME,
    Key: { id: itemId }
  };

  try {
    const { Item } = await dynamodb.get(params).promise();
    return { success: true, item: Item };
  } catch (error) {
    console.error('Error getting item:', error);
    return { success: false, error };
  }
}

// Update operation
async function updateItem(itemId, updatedAttributes) {
  const params = {
    TableName: TABLE_NAME,
    Key: { id: itemId },
    UpdateExpression: 'SET #attrName = :attrValue',
    ExpressionAttributeNames: { '#attrName': updatedAttributes.name }, // Update with your attribute name
    ExpressionAttributeValues: { ':attrValue': updatedAttributes.value } // Update with your attribute value
  };

  try {
    await dynamodb.update(params).promise();
    return { success: true };
  } catch (error) {
    console.error('Error updating item:', error);
    return { success: false, error };
  }
}

// Delete operation
async function deleteItem(itemId) {
  const params = {
    TableName: TABLE_NAME,
    Key: { id: itemId }
  };

  try {
    await dynamodb.delete(params).promise();
    return { success: true };
  } catch (error) {
    console.error('Error deleting item:', error);
    return { success: false, error };
  }
}

module.exports = {
  createItem,
  getItem,
  updateItem,
  deleteItem
};
