import React, { useEffect, useState } from 'react'

const useFetch = () => {
    const apiUrl = "http://localhost:8000/data/"
    const [fetchedData, setFetcedhData] = useState(null)

    const handleAddToCart = (id) => {
        let updatedData = fetchedData.map((item) => {
            if (item.id === id) {
                return { ...item, isAddedToCart: true };
            } else {

                return item;
            }
        });
        setFetcedhData(updatedData);
        fetch(apiUrl + id, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedData),
        })
    }
    const handllRemoveFromCart = (id) => {
        let updatedData = fetchedData.map((item) => {
            if (item.id === id) {

                return { ...item, isAddedToCart: false };
            } else {

                return item;
            }
        });
        setFetcedhData(updatedData);
        fetch(apiUrl + id, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedData),
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

    return { fetchedData, handleAddToCart, handllRemoveFromCart }
}

export default useFetch