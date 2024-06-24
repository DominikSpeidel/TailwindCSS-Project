import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import RecipeName from "./recipeName";
import RecipeDuration from "./recipeDuration";
import IngredientInput from "./ingredientInput";
import IngredientList from "./ingredientList";
import Textarea from "./textarea";
import ImageUpload from "./imageUpload";
import SumbitButton from "./sumbitButton";
import useSWR from "swr";
import { useRouter } from "next/router";

export default function CreateForm() {
  const [imageUrl, setImageUrl] = useState("");
  const [zutat, setZutat] = useState("");
  const [zutatenListe, setZutatenListe] = useState([]);
  const router = useRouter();

  const { mutate } = useSWR("/api/recipes");

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    const newRecipe = {
      name: data.name,
      duration: data.duration,
      description: data.description,
      ingredients: zutatenListe,
      imageUrl: imageUrl,
      user: "Dominik",
    };

    const response = await fetch("/api/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRecipe),
    });

    if (response.ok) {
      mutate();
    }
    router.push("/");
  }

  const generateUUID = () => {
    return uuidv4();
  };

  const handleAddIngredient = () => {
    const neueZutat = {
      id: generateUUID(),
      name: zutat,
    };
    setZutatenListe([...zutatenListe, neueZutat]);
    setZutat("");
  };

  function handleDelete(id) {
    setZutatenListe(zutatenListe.filter((zutat) => zutat.id !== id));
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  console.log(zutat);
  console.log(zutatenListe);

  return (
    <form className="mt-10" onSubmit={handleSubmit}>
      <div className="xl:flex">
        <div>
          <section className="flex gap-8">
            <RecipeName onHandleKeyDown={handleKeyDown} />
            <RecipeDuration onHandleKeyDown={handleKeyDown} />
          </section>
          <section>
            <IngredientInput
              zutat={zutat}
              setZutat={setZutat}
              onHandleAddIngredient={handleAddIngredient}
              onHandleKeyDown={handleKeyDown}
            />
            <IngredientList
              zutatenListe={zutatenListe}
              onHandleDelete={handleDelete}
            />
          </section>
          <Textarea />
        </div>
        <ImageUpload imageUrl={imageUrl} setImageUrl={setImageUrl} />
      </div>
      <SumbitButton />
    </form>
  );
}
