import { categoryCardsInfo } from "../../services/categoryCardsInfo";
import "./step1.css";
import { FiArrowDownRight } from "react-icons/fi";

type Step1Props = {
  setCategory: (category: string) => void;
  setValue: (value: string) => void;
};

function Step1({ setCategory, setValue }: Step1Props) {
  const drinkCards = categoryCardsInfo.map((drink) => {
    return (
      <div className={`drink-card card-${drink.id} rounded-2xl`} key={drink.id}>
        <div className="rounded-2xl bg-pink-900 ">
          <img
            src={drink.image}
            alt={drink.name}
            className="drink-card__image mask-b-from-80% mask-b-to-120% rounded-2xl  "
          />
        </div>
        <div className="drink-card__name rounded-2xl ">
          <p className="">{drink.name}</p>

          <a href="#step2">
            <button
              className="select-btn rounded-2xl"
              onClick={() => {
                setCategory(drink.name);
                setValue(drink.value);
              }}
            >
              <FiArrowDownRight />
            </button>
          </a>
        </div>
      </div>
    );
  });
  return (
    <section id="step1">
      <div className="wrapper mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <h1 className="title text-start ">Step 1</h1>
        <h2 className="subtitle pb-4 text-start">Pick your style</h2>
        <div className="drink-cards scrollbar-thumb-mist-900 columns-sm gap-4 overflow-x-auto pb-6">
          {drinkCards}
        </div>
      </div>
    </section>
  );
}

export default Step1;
