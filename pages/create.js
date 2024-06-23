import { useState } from "react";
import { UploadButton } from "@uploadthing/react";
import LogIn from "./components/LogIn";
import { v4 as uuidv4 } from "uuid";

import RecipeName from "./components/recipeName";
import RecipeDuration from "./components/recipeDuration";
import IngredientInput from "./components/ingredientInput";

export default function Create() {
  const [imageUrl, setImageUrl] = useState("");
  const [zutat, setZutat] = useState("");
  const [zutatenListe, setZutatenListe] = useState([]);

  // Funktion zur Generierung einer eindeutigen ID für die Zutat
  const generateUUID = () => {
    return uuidv4();
  };

  const handleAddIngredient = () => {
    const neueZutat = {
      id: generateUUID(), // Eindeutige ID für die Zutat generieren
      name: zutat,
    };
    setZutatenListe([...zutatenListe, neueZutat]);
    setZutat(""); // Setzt das Eingabefeld wieder auf null
  };

  function handleDelete(id) {
    setZutatenListe(zutatenListe.filter((zutat) => zutat.id !== id));
  }
  console.log(zutat);
  console.log(zutatenListe);

  return (
    <>
      <LogIn />
      <main className="flex min-h-screen flex-col ">
        <h1 className="text-gray-700 text-4xl md:text-6xl font-semibold">
          Neues Rezept
        </h1>
        <form className="mt-10">
          <div className="xl:flex">
            <div>
              <section className="flex gap-8">
                <RecipeName />
                <RecipeDuration />
              </section>

              <section>
                <IngredientInput
                  zutat={zutat}
                  setZutat={setZutat}
                  onHandleAddIngredient={handleAddIngredient}
                />
                <div className="pt-3 mb-10">
                  <h3 className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">
                    Deine Zutatenliste
                  </h3>
                  {zutatenListe.length > 0 ? (
                    <ul>
                      {zutatenListe.map((zutat) => (
                        <li key={zutat.id}>
                          <span className="text-lg">{`- ${zutat.name}`}</span>
                          <button
                            className="p-1 ml-2 text-sm text-red-600 rounded-full hover:bg-red-300 "
                            onClick={() => handleDelete(zutat.id)}
                          >
                            <span>(löschen)</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <span>Keine Zutaten hinzugefügt</span>
                  )}
                </div>
              </section>
              <div className="mb-5">
                <label
                  htmlFor="Beschreibung"
                  className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                >
                  Beschreibung
                </label>
                <textarea
                  id="Beschreibung"
                  rows="8"
                  className="min-w-[14rem] lg:min-w-72 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                ></textarea>
              </div>
            </div>

            <div className=" xl:px-20 mx-auto mb-10">
              <div className="flex flex-col xl:items-center">
                <h3 className="mb-2 text-lg font-medium text-gray-900 dark:text-white">
                  Dein Rezeptbild
                </h3>
                <div>
                  <div className="max-xl:pt-16 max-xl:relative">
                    <UploadButton
                      className="max-xl:absolute bottom-0 left-0 ut-button:bg-blue-700 "
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
                  </div>
                </div>
              </div>
              {imageUrl.length ? (
                <div>
                  <img
                    src={imageUrl}
                    className="w-full h-72 object-cover transform hover:scale-105 duration-500"
                    alt="your image"
                  />
                </div>
              ) : null}
            </div>
          </div>

          <button
            type="submit"
            className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </main>
    </>
  );
}
