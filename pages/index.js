import Card from "./components/card";
import LogIn from "./components/LogIn";
import { SignedIn } from "@clerk/nextjs";
import Link from "next/link";

import { useState } from "react";

export default function Home({ recipes, isLoading }) {
  const [showAllCards, setShowAllCards] = useState(false);

  const handleCardDisplay = () => {
    if (showAllCards) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setShowAllCards(!showAllCards);
  };

  if (isLoading) {
    return <p>Ladevorgang ...</p>;
  }

  return (
    <>
      <div className="max-md:flex justify-between">
        <LogIn />
        <SignedIn>
          <Link href="/create" className="flex justify-end md:hidden">
            <button>
              + Rezept<br></br>hinzufügen
            </button>
          </Link>
        </SignedIn>
      </div>
      <header>
        <h2 className="text-gray-700 text-4xl md:text-6xl font-semibold">
          Rezepte
        </h2>
        <h3 className="text-2xl font-semibold">Für dich & deine Freunde</h3>
      </header>
      <div className>
        <h4 className="font-bold mt-8 pb-2 border-b border-gray-200">
          kürzlich hinzugefügt
        </h4>
        <div className="mt-6 grid lg:grid-cols-3 gap-10">
          {recipes &&
            recipes
              .slice(0, showAllCards ? recipes.length : 6)
              .map((recipe) => (
                <Card
                  key={recipe._id}
                  id={recipe._id}
                  user={recipe.user}
                  name={recipe.name}
                  duration={recipe.duration}
                  imageUrl={recipe.imageUrl}
                />
              ))}
        </div>
        <div className="mt-12"></div>
        <div className="flex justify-center">
          <button
            onClick={handleCardDisplay}
            className="btn bg-secondary-100 text-secondary-200 hover:shadow-inner transform hover:scale-125 duration-300"
          >
            {showAllCards ? "Nach oben" : "Mehr anzeigen"}
          </button>
        </div>
      </div>
    </>
  );
}
