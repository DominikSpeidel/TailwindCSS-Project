import Nav from "./components/nav";
import Card from "./components/card";
import LogIn from "./components/LogIn";

import Contact_Icon from "./components/Icons/Contact_Icon";
import { useState } from "react";

export default function Home() {
  const [showAllCards, setShowAllCards] = useState(false);
  return (
    <div className="grid md:grid-cols-4 md:mr-44">
      <section className="md:col-span-1 md:flex md:justify-end">
        <Nav />
      </section>

      <main className="px-16 py-6 bg-gray-50 md:col-span-3">
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
            <Card image={"./cappuccino.jpg"} />
            <Card image={"./quiche.jpg"} />
            <Card image={"./Fish.jpg"} />
            {showAllCards && (
              <>
                <Card image={"./cappuccino.jpg"} />
                <Card image={"./quiche.jpg"} />
                <Card image={"./Fish.jpg"} />
                <Card image={"./cappuccino.jpg"} />
                <Card image={"./quiche.jpg"} />
                <Card image={"./Fish.jpg"} />
              </>
            )}
          </div>

          <div className="mt-12"></div>

          <div className="flex justify-center">
            <button
              onClick={() => setShowAllCards(!showAllCards)}
              className="btn bg-secondary-100 text-secondary-200 hover:shadow-inner transform hover:scale-125 duration-300"
            >
              {showAllCards ? "Weniger anzeigen" : "Mehr anzeigen"}
            </button>
          </div>
        </div>
        <footer>
          <ul
            className="flex text-center justify-evenly mt-20 mb-4
            "
          >
            <li>Impressum</li>
            <li>Datenschutz</li>
            <li>Karriere</li>
            <li>© 2024</li>
          </ul>
        </footer>
      </main>
    </div>
  );
}
