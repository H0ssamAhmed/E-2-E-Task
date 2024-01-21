import React, { useState, useEffect } from "react";

const ProductList = (itemId) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products data when the component mounts
    fetch("http://localhost:8000/data")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const toggleCartStatus = (itemId, isAddedToCart) => {
    const apiUrl = `http://localhost:8000/data/${itemId}`;

    fetch(apiUrl, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isAddedToCart }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((updatedProduct) => {
        // Update the products state with the updated product
        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product.id === updatedProduct.id ? updatedProduct : product
          )
        );
        console.log("isAddedToCart updated successfully:", updatedProduct);
      })
      .catch((error) => {
        console.error("Error updating isAddedToCart:", error);
      });
  };
};

export default ProductList;
