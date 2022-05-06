import React from "react";
import { useState } from "react/cjs/react.production.min";
import { v4 as uuid } from "uuid";
import Item from "./Item";

function ItemForm(props) {

  // const [name, setName] = useState("");
  // const [category, setCategory] = useState("")

  // const handleNameChange = (e) => {
  //   setName(e.target.value)
  //   console.log(setName)
  // };


  return (
    <form className="NewItem">
      <label>
        Name:
        <input type="text" name="name" {/*value={name} onChange={handleNameChange}*/} />
      </label>

      <label>
        Category:
        <select name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
