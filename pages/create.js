import { useState } from "react";
import Image from "next/image";
import { UploadButton } from "@uploadthing/react";
import LogIn from "./components/LogIn";
import { v4 as uuidv4 } from "uuid"; // Importieren Sie die Funktion zur Generierung von UUIDs

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
    <>
      <LogIn />
      <main className="flex min-h-screen flex-col ">
        <h1 className="text-gray-700 text-4xl md:text-6xl font-semibold">
          Neues Rezept
        </h1>
        <form className="mt-10">
          <div className="xl:flex">
            <div>
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
                    className="min-w-[14rem] lg:min-w-72 mb-5 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
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
                        className="min-w-[14rem] lg:min-w-72  shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
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
                <section className="pt-3 mb-10">
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
                </section>
              </article>
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
                  <Image
                    src={imageUrl}
                    alt="your image"
                    width={400}
                    height={400}
                    style={{ objectFit: "contain" }}
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
