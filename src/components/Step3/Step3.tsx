import "./step3.css";
import React from "react";
import { useState, useEffect } from "react";
interface Step3Props {
  recipeID: string;
  setRecipeID: (recipeID: string) => void;
}

const Step3 = ({ recipeID }: Step3Props): React.ReactElement | null => {
  interface CocktailRecipe {
    idDrink: string;
    strDrink: string | null;
    strCategory: string | null;
    strGlass: string | null;
    strInstructions: string | null;
    strDrinkThumb: string;
  }
  interface CocktailRecipeResponse {
    drinks: CocktailRecipe[];
  }
  const [recipe, setRecipe] = useState<CocktailRecipe | null>(null);
  useEffect(() => {
    if (!recipeID) return;

    const getRecipe = async () => {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${recipeID}`,
      );

      const data: CocktailRecipeResponse = await response.json();

      setRecipe(data.drinks[0]);
    };

    getRecipe();
  }, [recipeID]);

  const ingredients = Array.from({ length: 15 }, (_, index) => {
    const ingredient =
      recipe?.[`strIngredient${index + 1}` as keyof CocktailRecipe];

    const measure = recipe?.[`strMeasure${index + 1}` as keyof CocktailRecipe];

    return {
      ingredient,
      measure,
    };
  }).filter((item) => item.ingredient);

  // if (!recipeID) {
  //   return (
  //     // <section id="step3">
  //     //   <h2>Looks like you haven't made a choice </h2>
  //     // </section>
  //     console.log("Nothing selected yet")
  //   );
};

return (
  <section id="step3">
    <div className="wrapper mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <h1 className="title text-end ">Step 3</h1>
      <h2 className="subtitle pb-4 text-end">Let's make it! </h2>
      <div className="row  grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
        <div className="img-col ">
          <div className=" rounded-2xl bg-pink-900 ">
            <img
              src={recipe?.strDrinkThumb}
              alt="recipe name"
              className=" mask-b-from-80% mask-b-to-120% w-lg rounded-2xl"
            />
          </div>
        </div>
        <div className="info-col  flex flex-col justify-end py-4">
          <h1 className="recipe-name text-3xl font-medium md:text-4xl">
            {recipe?.strDrink}
          </h1>
          <h2 className="pb-6 text-xl  md:text-2xl"> {recipe?.strCategory}</h2>
          <p className="pb-2">Glass: {recipe?.strGlass}</p>
          <ul className="pb-2">
            <p>Ingredients:</p>
            {ingredients.map((item, index) => (
              <li key={index} className="">
                {item.measure}
                {"- "} {item.ingredient}
              </li>
            ))}
          </ul>
          <div className="pb-4">
            <p>Instructions:</p>
            {recipe?.strInstructions}
          </div>

          <div className="buttons gap-6 md:flex ">
            <a
              className="secondary-btn label mb-4 flex w-full items-center justify-center  rounded-3xl px-6 py-2 text-white md:w-auto "
              href="#step2"
            >
              Select another drink
            </a>
            <a
              className="btn primary-btn label mb-4 flex w-full items-center justify-center  rounded-3xl px-6 py-2 text-white md:w-auto"
              href="#step1"
            >
              Let's start again
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Step3;
