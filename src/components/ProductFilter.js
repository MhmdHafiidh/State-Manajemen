"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function ProductFilter() {
  const router = useRouter();
  const SearchParams = useSearchParams();

  const category = SearchParams.get("category") || "all";

  const setCategory = (newCategory) => {
    const params = new URLSearchParams(SearchParams.toString());
    params.set('category', newCategory);
    router.push(`?${params.toString()}`);
  };

  return (
    <div>
      <h3>Filter by Category</h3>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="all">All</option>
        <option value="electronics">Electronicss</option>
        <option value="clothing">Cloning</option>
      </select>
    </div>
  );
}
