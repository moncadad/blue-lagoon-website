import "./step2.css";
import { useState, useEffect } from "react";
import { FaCocktail } from "react-icons/fa";

interface Step2Props {
  category: string;
  value: string;
  setRecipe: (recipeID: string) => void;
}
function Step2({ category, value, setRecipe }: Step2Props) {
  interface Cocktail {
    idDrink: string;
    strDrink: string;
    strDrinkThumb: string;
  }

  interface CocktailResponse {
    drinks: Cocktail[];
  }

  const [cocktails, setCocktails] = useState<Cocktail[]>([]);

  const getCocktails = async (value: string) => {
    if (value) {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?${value}`,
      );

      const data: CocktailResponse = await response.json();

      return [...data.drinks].sort(() => Math.random() - 0.5).slice(0, 3);
    }

    const randomCocktails = await Promise.all(
      Array.from({ length: 3 }, async () => {
        const response = await fetch(
          "https://www.thecocktaildb.com/api/json/v1/1/random.php",
        );

        const data: CocktailResponse = await response.json();

        return data.drinks[0];
      }),
    );

    return randomCocktails;
  };
  useEffect(() => {
    const loadCocktails = async () => {
      const drinks = await getCocktails(value);
      setCocktails(drinks);
    };

    loadCocktails();
  }, [value]);

  const cocktailCards = cocktails.map((cocktail) => {
    return (
      <div
        className={`drink-card card-${cocktail.idDrink} `}
        key={cocktail.idDrink}
      >
        <div className="drink-card__image-wrap ">
          <img
            src={cocktail.strDrinkThumb}
            alt={cocktail.strDrink}
            className=" drink-card__image mask-b-from-70%  mask-b-to-100% bg-pink-900
            "
          />
        </div>
        <div className="card-info ">
          <div className="drink-card__name">
            <p>{cocktail.strDrink}</p>
          </div>
          <a
            href="#step3"
            className="select-btn"
            onClick={() => {
              setRecipe(cocktail.idDrink);
            }}
          >
            <FaCocktail />
          </a>
        </div>
      </div>
    );
  });

  return (
    <section id="step2">
      <div className="wrapper mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <h1 className="title text-center">Step 2</h1>
        <h2 className="subtitle pb-6 text-center">Select a drink</h2>
        <h3 className="text-center ">
          Select one of our <span className="category">{category}</span> drinks
          to see recipe below
        </h3>
        <div className="drink-cards grid grid-cols-1 gap-4  md:grid-cols-3">
          {cocktailCards}
        </div>
      </div>
    </section>
  );
}

export default Step2;
