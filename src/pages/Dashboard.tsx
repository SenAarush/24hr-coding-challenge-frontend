import React from 'react';
import ProductCard from '../components/ProductCard';
// import Loading from '../components/Loading';

import { sampleProducts } from '../data.ts';

const Dashboard: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white px-6 py-10">
            <div className="max-w-7xl mx-auto h-full">
                <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Dashboard</h1>

                <p className="text-lg text-left mb-8">
                    Products
                </p>

                {/* <div className="absolute inset-0 flex items-center justify-center">
                    <Loading />
                </div> */}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sampleProducts.map((product, idx) => (
                        <ProductCard key={idx}
                            image={product.image}
                            name={product.name}
                            category={product.category}
                            description={product.description}
                            rating={product.rating}
                            price={product.price}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
