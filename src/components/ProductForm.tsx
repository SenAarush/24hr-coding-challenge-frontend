import React, { useState } from 'react';

interface IProduct {
  _id?: string;
  name: string;
  desc: string;
  category: string;
  price: number;
  rating: number;
  image?: string;
}

interface ProductFormProps {
  initialData?: IProduct;
  onClose: () => void;
  onSubmit: (product: IProduct) => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ initialData, onClose, onSubmit }) => {
  const [product, setProduct] = useState<IProduct>(
    initialData || {
      name: '',
      desc: '',
      category: '',
      price: 0,
      rating: 0,
      image: '',
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: name === 'price' || name === 'rating' ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (product.price < 0 || product.rating < 0 || product.rating > 5) {
      alert('Please enter valid values for price and rating.');
      return;
    }
    onSubmit(product);
  };

  return (
    <div className="fixed inset-0 bg-black/60 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-900 text-white rounded-md shadow-lg w-full max-w-md p-6 space-y-4 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white"
        >
          ✕
        </button>
        <h2 className="text-xl font-semibold mb-2">
          {initialData ? 'Edit Product' : 'Add Product'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={product.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <textarea
            name="desc"
            placeholder="Description"
            value={product.desc}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={product.category}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={product.price}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
            step="0.01"
          />
          <input
            type="number"
            name="rating"
            placeholder="Rating (0 to 5)"
            value={product.rating}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
            min={0}
            max={5}
            step="0.1"
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL (optional)"
            value={product.image}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            // onClick={}
            className="w-full bg-purple-600 hover:bg-purple-700 transition rounded-md py-2 font-semibold"
          >
            {initialData ? 'Update' : 'Create'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
