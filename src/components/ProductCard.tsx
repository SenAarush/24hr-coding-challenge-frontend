import React, { useState } from 'react';

import ProductForm from './ProductForm';

const ProductCard: React.FC<IProduct> = ({
    image,
    name,
    category,
    description,
    rating,
    price
}) => {

    const [open, setOpen] = useState<boolean>(false);

    const handleSubmit = (product: IProduct) => {
        console.log("Product submitted:", product);
        setOpen(false);
    };

    return (
        <>
            <div className="bg-gray-900 shadow-lg rounded-lg overflow-hidden flex flex-col border border-gray-950">
                {image && (
                    <img
                        className="w-full h-48 object-cover"
                        src={image}
                        alt={name}
                    />
                )}
                <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl text-white font-semibold pb-1">{name}</h3>
                    <p className="text-sm text-purple-400 mb-2">{category}</p>
                    <p className="text-slate-400 text-sm flex-grow">{description}</p>
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
                            onClick={() => alert('Edit Product')}
                            className="text-purple-600 text-sm flex-grow bg-white py-2 rounded-md mt-4 hover:bg-black hover:text-purple-200 transition duration-200"
                        >
                            Delete
                        </button>
                    </div>
                </div>
                {open && (
                    <ProductForm
                        initialData={{
                            image,
                            name,
                            category,
                            description,
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
