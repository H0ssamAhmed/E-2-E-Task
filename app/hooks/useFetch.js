import React, { useEffect, useState } from 'react'

const useFetch = () => {
    const apiUrl = "http://localhost:8000/data/"
    const [fetchedData, setFetcedhData] = useState(null)

    const handleAddToCart = (itemId) => {
        const updatedData = fetchedData.map(item => {
            if (item.id == itemId) {
                // Update the isAddedToCart property only for the matching item
                return { ...item, isAddedToCart: true };
            } else {
                return item;
            }
        });

        // Find the modified item
        const modifiedItem = updatedData.find(item => item.id == itemId);
        setFetcedhData(updatedData)
        console.log(modifiedItem);

        fetch(`http://localhost:8000/data/${itemId}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(modifiedItem),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                // Update your state or handle the updated data as needed
            })
            .catch(error => {
                console.error('Error updating data:', error);
            });
    }
    const handllRemoveFromCart = (itemId) => {
        const updatedData = fetchedData.map(item => {
            if (item.id == itemId) {
                // Update the isAddedToCart property only for the matching item
                return { ...item, isAddedToCart: false };
            } else {
                return item;
            }
        });

        // Find the modified item
        const modifiedItem = updatedData.find(item => item.id == itemId);
        setFetcedhData(updatedData)
        console.log(modifiedItem);

        fetch(`http://localhost:8000/data/${itemId}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(modifiedItem),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                // Update your state or handle the updated data as needed
            })
            .catch(error => {
                console.error('Error updating data:', error);
            });
    }

    useEffect(() => {
        fetch(apiUrl).then((res) => {
            if (!res.ok) {
                throw Error('Failed to fetch data')
            }
            return res.json()
        })
            .then((data) => setFetcedhData(data))
    }, [apiUrl])

    return { fetchedData, handleAddToCart, handllRemoveFromCart }
}

export default useFetch