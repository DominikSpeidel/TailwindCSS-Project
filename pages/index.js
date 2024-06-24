import Card from "./components/card";
import LogIn from "./components/LogIn";

import { useState } from "react";
import useSWR from "swr";

export default function Home() {
  const [showAllCards, setShowAllCards] = useState(false);

  const { data: recipes, error } = useSWR("/api/recipes");

  const handleButtonClick = () => {
    if (showAllCards) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setShowAllCards(!showAllCards);
  };

  return (
    <>
      <LogIn />

      <header>
        <h2 className="text-gray-700 text-4xl md:text-6xl font-semibold">
          Rezepte
        </h2>
        <h3 className="text-2xl font-semibold">Für dich & deine Freunde</h3>
      </header>

      <div>
        <h4 className="font-bold mt-8 pb-2 border-b border-gray-200">
          kürzlich hinzugefügt
        </h4>
        <div className="mt-6 grid lg:grid-cols-3 gap-10">
          {recipes &&
            recipes.map((recipe) => (
              <Card
                user={recipe.user}
                name={recipe.name}
                duration={recipe.duration}
                imageUrl={recipe.imageUrl}
              />
            ))}
          {/* {showAllCards && (
            <>
              <Card image={"./cappuccino.jpg"} />
              <Card image={"./quiche.jpg"} />
              <Card image={"./Fish.jpg"} />
              <Card image={"./Krithari.jpg"} />
            </>
          )} */}
        </div>

        <div className="mt-12"></div>

        <div className="flex justify-center">
          <button
            onClick={handleButtonClick}
            className="btn bg-secondary-100 text-secondary-200 hover:shadow-inner transform hover:scale-125 duration-300"
          >
            {showAllCards ? "Nach oben" : "Mehr anzeigen"}
          </button>
        </div>
      </div>
    </>
  );
}
