import { useMemo, useState } from 'react';

type SortOption = 'priceAsc' | 'priceDesc' | 'ratingAsc' | 'ratingDesc';

export const useProductFilters = (products: IProduct[]) => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [sort, setSort] = useState<SortOption>('priceAsc');

  const filteredSorted = useMemo(() => {
    let result = [...products];

    if (search.trim()) {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.desc.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category) {
      result = result.filter((p) => p.category === category);
    }

    result.sort((a, b) => {
      switch (sort) {
        case 'priceAsc': return a.price - b.price;
        case 'priceDesc': return b.price - a.price;
        case 'ratingAsc': return a.rating - b.rating;
        case 'ratingDesc': return b.rating - a.rating;
        default: return 0;
      }
    });

    return result;
  }, [products, search, category, sort]);

  return {
    filteredSorted,
    filters: {
      search, setSearch,
      category, setCategory,
      sort, setSort
    }
  };
};
