import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Products = ({ searchQuery }) => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const fetchProductsData = async () => {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProductsData(res.data);
    };

    fetchProductsData();
  }, []);

    const filteredProducts = productsData.filter((product) =>
    product.title.toLowerCase().includes(searchQuery)
  );

  return (
    <div className='flex flex-wrap p-10 pl-20 gap-2'>
      {
        filteredProducts.length === 0 ? (
            <h1 className='text-6xl font-semibold text-center text-red-600 underline'>No product found by this title, try something else.</h1>
        ) : (
          
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className='h-[420px] w-[300px] mt-4 border-gray-400 border-[1px] shadow-2xl'
            >
              <img className='h-[250px] p-6 m-auto' src={product.image} alt={product.title} />
              <h3 className='text-xl pl-2'>{product.title}</h3>
              <h4 className='text-2xl pl-2 pt-2'>$ {product.price}</h4>
            </div>
          )))
      }
    </div>
  );
};

export default Products;
