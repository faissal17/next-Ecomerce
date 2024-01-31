'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { GetAllProducts, DeleteProduct } from '../Api/productApi';
import { Product } from '../models/productModel';
import Swal from 'sweetalert2';

const Card = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GetAllProducts();
        console.log('API Response:', response);

        if (Array.isArray(response)) {
          setProducts(response);
          console.log('Product data:', response);
        } else {
          console.error('Invalid data format. Expected an array.');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (productId: any) => {
    try {
      const deleteResponse = await DeleteProduct(productId);
      console.log(deleteResponse);

      if (deleteResponse) {
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== productId.id),
        );
        Swal.fire('Deleted!', 'Product has been deleted.', 'success');
        console.log('Product deleted');
      } else {
        Swal.fire('Error', 'Failed to delete the Product.', 'error');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 mx-4 sm:mx-8 lg:mx-12 xl:mx-16 mt-10">
      {products.map((product, index) => (
        <div
          key={index}
          className="max-w-sm rounded overflow-hidden shadow-lg transition-colors duration-200 hover:bg-gray-100"
        >
          <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80">
            <Image
              className="object-cover w-full h-full"
              src={product.Image}
              alt=""
              layout="fill"
            />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 truncate">
              {product.name}
            </div>
            <p className="text-gray-700 text-base h-20 truncate">
              {product.description}
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            {product.category && (
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {product.category.name}
              </span>
            )}
          </div>
          <div className="px-6 py-4 flex justify-between">
            <p className="text-blue-800 text-lg font-semibold">
              Price: ${product.price}
            </p>
            <button
              className="ml-2 text-red-600 hover:text-red-900 font-bold"
              onClick={() => handleDelete(product.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
