import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import SubmitButton from "./submitButton";
import useSWR from "swr";
import { useRouter } from "next/router";
import RecipeName from "./recipeName";
import RecipeDuration from "./recipeDuration";
import IngredientInput from "./ingredientInput";
import IngredientList from "./ingredientList";
import Textarea from "./textarea";
import ImageUpload from "./imageUpload";

export default function FormEdit({ currentRecipe }) {
  const [imageUrl, setImageUrl] = useState(currentRecipe?.imageUrl);
  const [zutat, setZutat] = useState("");
  const [zutatenListe, setZutatenListe] = useState(
    currentRecipe?.ingredients || []
  );

  const [user, setUser] = useState("");
  const router = useRouter();

  const { mutate } = useSWR("/api/recipes");
  const { data: userData, error } = useSWR("/api/auth");

  if (error) {
    return <h1>Entschuldigung, etwas muss schief gelaufen sein!</h1>;
  }

  useEffect(() => {
    if (userData && userData.data && userData.data.sessionClaims) {
      const { sessionClaims } = userData.data;
      const detectedName = sessionClaims.first_name
        ? sessionClaims.first_name
        : sessionClaims.username;
      setUser(detectedName);
    }
  }, [userData]);

  async function handleSubmit(event) {
    event.preventDefault();

    if (imageUrl === "") {
      setImageUrl(currentRecipe?.imageUrl);
      return;
    }
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    const editedRecipe = {
      name: data.name,
      duration: data.duration,
      description: data.description,
      ingredients: zutatenListe,
      imageUrl: imageUrl,
      user: user,
    };

    const response = await fetch(`/api/recipes/${currentRecipe._id}`, {
      method: "Put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedRecipe),
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

  return (
    <form className="mt-10" onSubmit={handleSubmit}>
      <div className="xl:flex">
        <div>
          <section className="flex gap-8">
            <RecipeName
              onHandleKeyDown={handleKeyDown}
              currentRecipeName={currentRecipe?.name}
            ></RecipeName>
            <RecipeDuration
              onHandleKeyDown={handleKeyDown}
              currentRecipeDuration={currentRecipe?.duration}
            />
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
          <Textarea currentRecipeDescription={currentRecipe?.description} />
        </div>
        <ImageUpload imageUrl={imageUrl} setImageUrl={setImageUrl} />
      </div>
      <SubmitButton />
    </form>
  );
}
