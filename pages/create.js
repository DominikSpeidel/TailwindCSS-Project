import { useState } from "react";
import Image from "next/image";
import { UploadButton } from "@uploadthing/react";

export default function Create() {
  const [imageUrl, setImageUrl] = useState("");
  const [ingredients, setIngredients] = useState([{ id: 1, name: "" }]);

  const handleAddIngredient = () => {
    const newIngredient = { id: ingredients.length + 1, name: "" };
    setIngredients([...ingredients, newIngredient]);
  };

  const handleChangeIngredient = (id, event) => {
    const updatedIngredients = ingredients.map((ingredient) =>
      ingredient.id === id
        ? { ...ingredient, name: event.target.value }
        : ingredient
    );
    setIngredients(updatedIngredients);
  };

  const handleRemoveIngredient = (id) => {
    const updatedIngredients = ingredients.filter(
      (ingredient) => ingredient.id !== id
    );
    setIngredients(updatedIngredients);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Hier kannst du die Formular-Daten senden oder verarbeiten
    console.log(ingredients);
    // Beispiel: API-Aufruf, um das Formular zu speichern
  };

  console.log(ingredients.length === 2 ? ingredients : "keine Ingredients");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form class="max-w-sm mx-auto">
        <div class="mb-5">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Name deines Rezeptes
          </label>
          <input
            type="email"
            id="email"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div class="mb-5">
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Zubereitungsdauer
          </label>
          <input
            type="password"
            id="password"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        {ingredients.map((ingredient, index) => (
          <div className="mb-5" key={ingredient.id}>
            <label
              htmlFor={`ingredient-${ingredient.id}`}
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Zutat {index + 1}
            </label>
            <div className="flex">
              <input
                type="text"
                id={`ingredient-${ingredient.id}`}
                className="w-18 hadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                value={ingredient.name}
                onChange={(e) => handleChangeIngredient(ingredient.id, e)}
                required
              />
              {index === ingredients.length - 1 && (
                <button
                  type="button"
                  className="ml-2 bg-blue-500 text-white hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5"
                  onClick={handleAddIngredient}
                >
                  + Add Zutat
                </button>
              )}
              {index > 0 && (
                <button
                  type="button"
                  className="ml-2 bg-red-500 text-white hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2.5"
                  onClick={() => handleRemoveIngredient(ingredient.id)}
                >
                  - Remove
                </button>
              )}
            </div>
          </div>
        ))}

        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
