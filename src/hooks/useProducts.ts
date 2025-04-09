/* eslint-disable @typescript-eslint/no-explicit-any */
// src/hooks/useProducts.ts
import { useState, useEffect } from 'react';
import axios from 'axios';

export interface IProduct {
  _id?: string;
  name: string;
  desc: string;
  category: string;
  price: number;
  rating: number;
  image?: string;
}

export const useProducts = (token: string | null) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch all products
  const fetchProducts = async () => {
    if (!token) return;

    try {
      setLoading(true);
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/products`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProducts(res.data.data);
    } catch (err: any) {
      console.error('Failed to fetch products:', err);
      setError(err.response?.data?.message || 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  // Add a new product
  const addProduct = async (product: IProduct) => {
    try {
      setLoading(true);
      console.log(product)
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/products`,
        product,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setProducts((prev) => [...prev, res.data.data]);
    } catch (err: any) {
      console.error('Failed to add product:', err);
      setError(err.response?.data?.message || 'Could not add product');
    } finally {
      setLoading(false);
      window.location.reload();
    }
  };

  // Update an existing product
  const updateProduct = async (id: string, updatedProduct: IProduct) => {
    try {
      setLoading(true);
      const res = await axios.put(
        `${import.meta.env.VITE_API_URL}/products/${id}`,
        updatedProduct,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setProducts((prev) =>
        prev.map((prod) => (prod._id === id ? res.data.data : prod))
      );
    } catch (err: any) {
      console.error('Failed to update product:', err);
      setError(err.response?.data?.message || 'Could not update product');
    } finally {
      setLoading(false);
      window.location.reload();
    }
  };

  // Delete a product
  const deleteProduct = async (id: string) => {
    try {
      setLoading(true);
      await axios.delete(`${import.meta.env.VITE_API_URL}/products/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProducts((prev) => prev.filter((prod) => prod._id !== id));
    } catch (err: any) {
      console.error('Failed to delete product:', err);
      setError(err.response?.data?.message || 'Could not delete product');
    } finally {
      setLoading(false);
      window.location.reload();
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [token]);

  return {
    products,
    loading,
    error,
    addProduct,
    updateProduct,
    deleteProduct,
    refetch: fetchProducts, // expose manual refetch if needed
  };
};
