// dynamodb.js
const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

const TABLE_NAME = 'MyTableName'; // Replace with your actual table name

// Create Event record
async function createEvent(eventParam) {
  const params = {
    TableName: "Events",
    eventId: eventParam.eventId,
    eventName: eventParam.eventName,
    date: eventParam.date,
    eventDescription: eventParam.eventDescription
  };
  try {
    await dynamodb.put(params).promise();
    return { success: true };
  } catch (error) {
    console.error('Error creating item:', error);
    return { success: false, error };
  }
}

// Create Food Record
async function createFood(foodParam, eventId) {
  try {
    const promises = foodParam.map((food) => {
      const foodId = uuidv4();
      const params = {
        TableName: 'Foods',
        Item: { ...food, foodId, eventId},
      };
      return dynamodb.put(params).promise();
    });
    await Promise.all(promises);
    return { success: true };
  } catch (error) {
    console.error('Error creating Foods:', error);
    return { success: false, error };
  } 
}

// Create Vote Record
async function createVote(voteParam) {
  const params = {
    TableName: "Votes",
    voteId: voteParam.voteId,
    eventId: voteParam.eventId,
    foodId: voteParam.voteId,
    voteCount: voteCount,
  };
  try {
    await dynamodb.put(params).promise();
    return { success: true };
  } catch (error) {
    console.error('Error creating vote:', error);
    return { success: false, error };
  } 
}

// Read operation
// async function getItem(itemId) {
//   const params = {
//     TableName: TABLE_NAME,
//     Key: { id: itemId }
//   };

//   try {
//     const { Item } = await dynamodb.get(params).promise();
//     return { success: true, item: Item };
//   } catch (error) {
//     console.error('Error getting item:', error);
//     return { success: false, error };
//   }
// }

// Update operation
// async function updateItem(itemId, updatedAttributes) {
//   const params = {
//     TableName: TABLE_NAME,
//     Key: { id: itemId },
//     UpdateExpression: 'SET #attrName = :attrValue',
//     ExpressionAttributeNames: { '#attrName': updatedAttributes.name }, // Update with your attribute name
//     ExpressionAttributeValues: { ':attrValue': updatedAttributes.value } // Update with your attribute value
//   };

//   try {
//     await dynamodb.update(params).promise();
//     return { success: true };
//   } catch (error) {
//     console.error('Error updating item:', error);
//     return { success: false, error };
//   }
// }

// Delete operation
// async function deleteItem(itemId) {
//   const params = {
//     TableName: TABLE_NAME,
//     Key: { id: itemId }
//   };

//   try {
//     await dynamodb.delete(params).promise();
//     return { success: true };
//   } catch (error) {
//     console.error('Error deleting item:', error);
//     return { success: false, error };
//   }
// }

module.exports = {
  createEvent,
  createFood,
  createVote,
  getItem,
  updateItem,
  deleteItem
};
