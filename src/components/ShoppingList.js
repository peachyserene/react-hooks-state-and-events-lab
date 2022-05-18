import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleFilter(e) {
    setSelectedCategory(e.target.value);
    console.log(e.target.value);
  }

  let filteredList = items.filter((item) => {
    console.log(item.category);
    return selectedCategory === "All" || item.category === selectedCategory
      ? true
      : false;
  });
  console.log(filteredList);
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilter}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredList.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

// selectedCategory === "All" || items.category === selectedCategory ? true : false

// .filter()=>{ } MUST ALWAYS HAVE A RETURN!!!!
