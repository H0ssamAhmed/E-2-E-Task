import React, { useState } from 'react';

const UpdateButton = () => {
  const [data, setData] = useState({
    "data": [
      {
        "id": 1,
        "name": "Laptop",
        "description": "High-performance laptop with the latest specifications",
        "price": 999,
        "isAddedToCart": false
      },
      {
        "id": 2,
        "name": "Smartphone",
        "description": "Flagship smartphone with advanced camera features",
        "price": 799,
        "isAddedToCart": false
      }
    ]
  });

  const handleUpdateClick = () => {
    // Assuming you want to update the isAddedToCart property for the item with id 1
    const itemIdToUpdate = 1;

    // Find the item in the data array based on the ID
    const updatedData = data.data.map(item =>
      item.id === itemIdToUpdate ? { ...item, isAddedToCart: false } : item
    );

    // Update the state with the modified data
    setData({ ...data, data: updatedData });

    // Make the fetch request to update the data on the server
    const apiUrl = `https://example.com/api/items/${itemIdToUpdate}`;

    fetch(apiUrl, {
      method: 'PUT', // or 'PATCH' depending on your API
      headers: {
        'Content-Type': 'application/json',
        // You might need to include other headers, like authentication headers
      },
      body: JSON.stringify(updatedData.find(item => item.id === itemIdToUpdate)),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(updatedData => {
        // Handle the updated data as needed
        console.log('Data updated successfully:', updatedData);
      })
      .catch(error => {
        console.error('Error updating data:', error);
      });
  };

  return (
    <div>
      <button onClick={handleUpdateClick}>Update isAddedToCart</button>
    </div>
  );
};

export default UpdateButton;
