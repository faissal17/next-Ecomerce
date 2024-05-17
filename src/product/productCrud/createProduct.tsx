'use client';

import React, { useEffect, useState, ChangeEvent } from 'react';
import { Product } from '../models/productModel';
import { getAllCategoriies } from '../Api/categoryApi';
import { Category } from '../models/productModel';
import { AddProduct } from '../Api/productApi';
import Swal from 'sweetalert2';

const CreateProduct = () => {
  const [product, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllCategoriies();
        setCategories(response);
        console.log('API Response:', response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handelChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    const numericValue = name === 'price' ? parseFloat(value) : value;

    setProducts((prevProduct) => ({
      ...prevProduct,
      [name]: numericValue,
    }));
  };
  const handelCatgerieChange = (selectedCategory: any) => {
    setProducts((pervCategorie) => ({
      ...pervCategorie,
      categorieId: Number(selectedCategory.target.value),
    }));
  };

  const handelSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log(product);

      const response = await AddProduct(product);
    } catch (error) {
      console.error('Error creating product:', error);
      Swal.fire('Error', 'Failed to create the product.', 'error');
    }
  };

  return (
    <form
      className="flex justify-center items-center h-screen bg-white"
      onSubmit={handelSubmit}
    >
      <div className="container mx-auto my-4 px-4 lg:px-20">
        <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
          <div className="flex">
            <h1 className="font-bold uppercase text-5xl">
              Add a new <br /> Product
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
            <input
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              name="name"
              type="text"
              onChange={handelChange}
              placeholder="Product Name*"
            />
            <input
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              name="price"
              type="number"
              placeholder="Product Price*"
              onChange={handelChange}
            />
          </div>
          <select
            name="categorieId"
            id="categorieId"
            typeof="number"
            className="w-full bg-gray-100 text-gray-900 mt-3 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            onChange={handelCatgerieChange}
          >
            <option>Select Categorie</option>
            {categories.map((categorys) => (
              <option key={categorys.id} value={categorys.id}>
                {categorys.name}
              </option>
            ))}
          </select>
          <div className="my-4">
            <textarea
              placeholder="Product Description*"
              name="description"
              className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              onChange={handelChange}
            ></textarea>
          </div>
          <div className="my-2 w-1/2 lg:w-1/4">
            <button
              className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CreateProduct;
