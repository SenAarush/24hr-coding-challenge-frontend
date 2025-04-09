import React, { useState } from 'react';
import ProductForm from './ProductForm';
import { IProduct, useProducts } from '../hooks/useProducts';

const ProductCard: React.FC<IProduct> = ({
  _id,
  image,
  name,
  category,
  desc,
  rating,
  price
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const token = localStorage.getItem('token');
  const { updateProduct, deleteProduct } = useProducts(token);

  const handleSubmit = (updated: IProduct) => {
    if (!_id) return;
    updateProduct(_id, updated);
    setOpen(false);
  };

  const handleDelete = () => {
    if (!_id) {
        return console.log('no _id')
    };
    const confirm = window.confirm(`Are you sure you want to delete "${name}"?`);
    if (confirm) {
      deleteProduct(_id);
    }
  };

  return (
    <>
      <div className="bg-gray-900 shadow-lg rounded-lg overflow-hidden flex flex-col border border-gray-950">
        <img
          className="w-full h-48 object-cover"
          src={image || `https://github.blog/wp-content/uploads/2023/12/Security-DarkMode-1.png?fit=1200%2C630`}
          alt={name}
        />
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl text-white font-semibold pb-1">{name}</h3>
          <p className="text-sm text-purple-400 mb-2">{category}</p>
          <p className="text-slate-400 text-sm flex-grow">{desc}</p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-white font-bold text-lg">${price.toFixed(2)}</span>
            <span className="text-yellow-400 font-semibold text-sm">{rating} ⭐</span>
          </div>
          <div className="flex items-center justify-between gap-5">
            <button
              onClick={() => setOpen(true)}
              className="text-purple-200 text-sm flex-grow bg-purple-700 py-2 rounded-md mt-4 hover:bg-white hover:text-purple-700 transition duration-200"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="text-purple-600 text-sm flex-grow bg-white py-2 rounded-md mt-4 hover:bg-black hover:text-purple-200 transition duration-200"
            >
              Delete
            </button>
          </div>
        </div>

        {open && (
          <ProductForm
            initialData={{
              _id,
              image,
              name,
              category,
              desc,
              rating,
              price
            }}
            onClose={() => setOpen(false)}
            onSubmit={handleSubmit}
          />
        )}
      </div>
    </>
  );
};

export default ProductCard;
