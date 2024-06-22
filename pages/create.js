import { useState } from "react";
import Image from "next/image";
import { UploadButton } from "@uploadthing/react";

export default function Create() {
  const [imageUrl, setImageUrl] = useState("");
  const [zutat, setZutat] = useState("");
  const [zutatenListe, setZutatenListe] = useState([]);

  const handleAddIngredient = () => {
    setZutatenListe([...zutatenListe, zutat]);
    setZutat(""); // Setzt das Eingabefeld wieder auf null
  };

  // const [ingredients, setIngredients] = useState([
  //   { id: 1, name: "", amount: "" },
  // ]);

  // const handleAddIngredient = () => {
  //   const newIngredient = { id: ingredients.length + 1, name: "", amount: "" };
  //   setIngredients([...ingredients, newIngredient]);
  // };

  // const handleChangeIngredient = (id, event) => {
  //   const { name, value } = event.target;
  //   const updatedIngredients = ingredients.map((ingredient) =>
  //     ingredient.id === id ? { ...ingredient, [name]: value } : ingredient
  //   );
  //   setIngredients(updatedIngredients);
  // };

  // const handleRemoveIngredient = (id) => {
  //   const updatedIngredients = ingredients.filter(
  //     (ingredient) => ingredient.id !== id
  //   );
  //   setIngredients(updatedIngredients);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Hier kannst du die Formular-Daten senden oder verarbeiten
  //   console.log(ingredients);
  //   // Beispiel: API-Aufruf, um das Formular zu speichern
  // };

  // console.log(ingredients.length === 2 ? ingredients : "keine Ingredients");
  console.log(zutat);
  console.log(zutatenListe);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Erstelle ein Rezept</h1>
      <form className="max-w-sm mx-auto">
        <article className="flex gap-8">
          <div>
            <label
              htmlFor="Rezeptname"
              className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
            >
              Name deines Rezeptes
            </label>
            <input
              type="text"
              id="Rezeptname"
              className="min-w-[14rem] lg:min-w-96 mb-5 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>
          <section className="mb-5 flex flex-col items-center">
            <label
              htmlFor="Dauer"
              className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
            >
              <span>Zubereitungsdauer</span>
            </label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                id="Dauer"
                className=" max-w-[5rem] shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required
              />
              <span>min</span>
            </div>
          </section>
        </article>

        <article>
          <div className="mb-5 pt-3">
            <label
              htmlFor="ingredient"
              className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
            >
              Zutat
            </label>
            <div className="flex items-center gap-10">
              <div className="flex space-x-2">
                <input
                  type="text"
                  id="ingredient"
                  name="name"
                  className="min-w-[14rem] lg:min-w-96  shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                  value={zutat}
                  onChange={(e) => setZutat(e.target.value)}
                />
              </div>

              <span
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={handleAddIngredient}
              >
                hinzufügen
              </span>
            </div>
          </div>
          <section className="pt-3">
            <h3 className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">
              Deine Zutatenliste
            </h3>
            {zutatenListe.length > 0 ? (
              <ul>
                {zutatenListe.map((zutat, index) => (
                  <li key={`Zutat ${index}`}>
                    <span className="text-md">{`- ${zutat}`}</span>
                    <span className="pl-2">(-)</span>
                  </li>
                ))}
              </ul>
            ) : (
              <span>Keine Zutaten hinzugefügt</span>
            )}
          </section>
        </article>
        {/* {ingredients.map((ingredient, index) => (
          <div className="mb-5" key={ingredient.id}>
            <label
              htmlFor={`ingredient-${ingredient.id}`}
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Zutat {index + 1}
            </label>
            <div className="flex space-x-2">
              <input
                type="text"
                id={`ingredient-${ingredient.id}`}
                name="name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                value={ingredient.name}
                onChange={(e) => handleChangeIngredient(ingredient.id, e)}
                placeholder="Zutat"
                required
              />
              <input
                type="text"
                id={`amount-${ingredient.id}`}
                name="amount"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                value={ingredient.amount}
                onChange={(e) => handleChangeIngredient(ingredient.id, e)}
                placeholder="Menge"
                required
              />
              {index === ingredients.length - 1 && (
                <button
                  type="button"
                  className="ml-2 bg-blue-500 text-white hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5"
                  onClick={handleAddIngredient}
                >
                  +
                </button>
              )}
              {index > 0 && (
                <button
                  type="button"
                  className="ml-2 bg-red-500 text-white hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2.5"
                  onClick={() => handleRemoveIngredient(ingredient.id)}
                >
                  -
                </button>
              )}
            </div>
          </div>
        ))} */}

        <button
          type="submit"
          className="mt-14 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>

      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          setImageUrl(res[0].url);
          alert("Dein Bild ist hochgeladen");
        }}
        onUploadError={(error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />

      {imageUrl.length ? (
        <div>
          <Image src={imageUrl} alt="your image" width={300} height={300} />
        </div>
      ) : null}
    </main>
  );
}
