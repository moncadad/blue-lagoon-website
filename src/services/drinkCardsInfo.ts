import oldFashImg from "../assets/old-fashion.jpg";
import margImg from "../assets/marg.jpg";
import bajaImg from "../assets/bajamama.jpg";

export const drinkCardsInfo: {
 idDrinks: number;
 strDrink: string;
 strDrinkThumb: any;
 category: string;
}[] = [
  {
    idDrinks: 1,
    strDrink: "Margarita",
    strDrinkThumb: margImg,
    category: 'Ordinary',
  },
  {
    idDrinks: 2,
    strDrink: "Old Fashion",
    strDrinkThumb: oldFashImg,
    category: 'Ordinary',
  },
    {
    idDrinks: 3,
    strDrink: "A.M.F.",
    strDrinkThumb: bajaImg,
    category: 'Ordinary',
  }
   
];

