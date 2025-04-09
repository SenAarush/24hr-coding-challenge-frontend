import React from 'react';

const ProductFilterBar: React.FC<ProductFilterBarProps> = ({
    search, setSearch,
    category, setCategory,
    sort, setSort
}) => {
    return (
        <div className="flex flex-col sm:flex-row gap-4 justify-between mb-6 items-center">
            <input
                className="px-3 py-2 rounded bg-gray-800 text-white border border-gray-600 flex-grow focus:outline-none focus:ring-purple-700 focus:ring-2"
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="px-3 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none"
            >
                <option value="">All Categories</option>
                <option value="Electronics">Electronics</option>
                <option value="Clothing">Clothing</option>
                <option value="Accessories">Accessories</option>
            </select>
            <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="px-3 py-2 rounded border border-gray-600 bg-gray-800 text-white appearance-none focus:outline-none"

            >
                <option value="priceAsc">Price: Low to High</option>
                <option value="priceDesc">Price: High to Low</option>
                <option value="ratingAsc">Rating: Low to High</option>
                <option value="ratingDesc">Rating: High to Low</option>
            </select>
        </div>
    );
};

export default ProductFilterBar;
