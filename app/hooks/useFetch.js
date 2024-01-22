import React, { useEffect, useState } from 'react'

const useFetch = () => {
    const apiUrl = "http://localhost:8000/data/"
    const [fetchedData, setFetcedhData] = useState(null)

    const handleAddRemove = (itemId) => {
        const updatedData = fetchedData.map(item => {
            if (item.id == itemId) {
                const revers = item.isAddedToCart
                return { ...item, isAddedToCart: !revers };
            } else {
                return item;
            }
        });

        // Find the modified item
        const modifiedItem = updatedData.find(item => item.id == itemId);
        setFetcedhData(updatedData)
        fetch(`http://localhost:8000/data/${itemId}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(modifiedItem),
        })
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

    return { fetchedData, handleAddRemove }
}

export default useFetch