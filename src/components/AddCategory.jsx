import { useState } from "react";

export const AddCategory = ({ setCategories, categories }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim().length == 0) return;
    else if (categories.includes(inputValue)) {
      alert("You cannot enter an existing value");
      setInputValue("");
      return;
    }

    setCategories((categories) => [inputValue, ...categories]);
    setInputValue("");
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="  Add gif name"
        onChange={onInputChange}
        value={inputValue}
        className="mt-1 w-full rounded-md text-black"
      />
    </form>
  );
};
