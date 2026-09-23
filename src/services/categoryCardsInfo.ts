import naImg from "../assets/virgin.jpg";
import ordinaryImg from "../assets/vodka-tini.jpg";
import cocktailImg from "../assets/cocktail.jpg";
import drinkImg from "../assets/mixology.jpg";

export const categoryCardsInfo: {
 id: number;
 name: string;
 image: any;
 value: string;
}[] = [
  {
    id: 1,
    name: "Casual",
    image: ordinaryImg,
    value: "c=Ordinary_Drink",
  },
  {
    id: 2,
    name: "Specialty",
    image: cocktailImg,
    value: "c=Cocktail",
  },
  {
    id: 3,
    name: "0% ALC.",
    image: naImg,
    value: "a=Non_Alcoholic",
  },
  {
    id: 4,
    name: "Bar Picked",
    image: drinkImg,
    value: "",
  },
];