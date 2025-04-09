import React from 'react';
import ProductCard from '../components/ProductCard';
import Navbar from '../components/Navbar';
import { useProductFilters } from '../hooks/useFilter';
import ProductFilterBar from '../components/ProductFilterBar';
import { useProducts } from '../hooks/useProducts';
import Loading from '../components/Loading';

const Dashboard: React.FC = () => {
    const token = localStorage.getItem('token');
    const { products, loading, error } = useProducts(token);
    const { filteredSorted, filters } = useProductFilters(products);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white px-6 py-10">
            {token && <Navbar />}
            <div className="max-w-7xl mx-auto h-full">
                <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">Dashboard</h1>

                <ProductFilterBar
                    search={filters.search}
                    setSearch={filters.setSearch}
                    category={filters.category}
                    setCategory={filters.setCategory}
                    sort={filters.sort}
                    setSort={filters.setSort}
                />

                <p
                    style={{ textDecorationStyle: 'wavy' }}
                    className="text-2xl text-left ml-5 mb-4 lg:mb-10 underline decoration-purple-700 underline-offset-4"
                >
                    Products
                </p>

                {loading ? (
                    <Loading />
                ) : error ? (
                    <p className="text-center text-red-500">{error}</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredSorted.length > 0 ? (
                            filteredSorted.map((product, idx) => (
                                <ProductCard
                                    key={idx}
                                    _id={product._id}
                                    image={product.image}
                                    name={product.name}
                                    category={product.category}
                                    desc={product.desc}
                                    rating={product.rating}
                                    price={product.price}
                                />
                            ))
                        ) : (
                            <p className="text-center col-span-full text-red-500 text-lg font-medium">
                                No products found, Try Something else
                            </p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
