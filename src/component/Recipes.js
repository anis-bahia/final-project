import React from "react";
import style from "./recipe.module.css";

function Recipes({ title, image, ingredients }) {
  return (
    <div className={style.recipe}>
      <h3>{title}</h3>
      <ul>
        {ingredients.map((item) => (
          <li key={ingredients.text}>{item.text}</li>
        ))}
      </ul>
      <img
        className={style.image}
        src={image}
        alt="this is a delicious meal"
      ></img>
    </div>
  );
}

export default Recipes;
