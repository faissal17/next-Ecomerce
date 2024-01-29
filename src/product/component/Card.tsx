'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { GetAllProducts } from '../Api/productApi';
import { Product } from '../models/productModel';

const Card = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    GetAllProducts()
      .then((response) => {
        console.log('API Response:', response);

        if (Array.isArray(response)) {
          setProducts(response);
          console.log('Product data:', response);
        } else {
          console.error('Invalid data format. Expected an array.');
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="flex justify-center items-center sm:mx-4 md:mx-8 lg:mx-12 xl:mx-16 mt-10">
      <div className="max-w-sm w-full rounded overflow-hidden shadow-lg transition-colors duration-200 hover:bg-gray-100">
        <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80">
          <Image
            className="object-cover w-full h-full"
            src="/images/ecommerce.png"
            alt=""
            layout="fill"
          />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
            excepturi sequi fugiat quia omnis. Deserunt harum eaque molestias
            nam quae?
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #photography
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #travel
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #winter
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
