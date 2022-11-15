import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpressApp = () => {
  const [categories, setCategories] = useState([]);

  return (
    <div className="bg-black w-full min-h-screen p-6">
      <h1 className="text-primary text-3xl font-extrabold">Gif Express App</h1>

      <AddCategory
        setCategories={setCategories}
        categories={categories}
      />

      <ol>
        {categories.map((category) => {
          return (
            <GifGrid key={category} category={category} />
          );
        })}
      </ol>
    </div>
  );
};
