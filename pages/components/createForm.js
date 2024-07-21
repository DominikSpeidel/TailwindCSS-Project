import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import RecipeName from "./recipeName";
import RecipeDuration from "./recipeDuration";
import IngredientInput from "./ingredientInput";
import IngredientList from "./ingredientList";
import Textarea from "./textarea";
import ImageUpload from "./imageUpload";
import SubmitButton from "./submitButton";
import useSWR from "swr";
import { useRouter } from "next/router";

export default function CreateForm() {
  const [imageUrl, setImageUrl] = useState("");
  const [zutat, setZutat] = useState("");
  const [zutatenListe, setZutatenListe] = useState([]);
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
      setImageUrl(
        "https://utfs.io/f/32ca26db-27a6-48cf-86ce-358b14829b70-foroed.jpg"
      );
      return;
    }
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    const createDate = new Date();
    const formattedCreateDate = createDate.toLocaleDateString("de-DE");

    const newRecipe = {
      name: data.name,
      duration: data.duration,
      description: data.description,
      ingredients: zutatenListe,
      imageUrl: imageUrl,
      user: user,
      date: formattedCreateDate,
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

  function generateUUID() {
    return uuidv4();
  }

  function handleAddIngredient() {
    const neueZutat = {
      id: generateUUID(),
      name: zutat,
    };
    setZutatenListe([...zutatenListe, neueZutat]);
    setZutat("");
  }

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
      <SubmitButton />
    </form>
  );
}
