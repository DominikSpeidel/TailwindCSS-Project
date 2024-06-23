import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import RecipeName from "./recipeName";
import RecipeDuration from "./recipeDuration";
import IngredientInput from "./ingredientInput";
import IngredientList from "./ingredientList";
import Textarea from "./textarea";
import ImageUpload from "./imageUpload";
import SumbitButton from "./sumbitButton";

export default function CreateForm() {
  const [imageUrl, setImageUrl] = useState("");
  const [zutat, setZutat] = useState("");
  const [zutatenListe, setZutatenListe] = useState([]);

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
    <form className="mt-10">
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
          <Textarea onHandleKeyDown={handleKeyDown} />
        </div>
        <ImageUpload imageUrl={imageUrl} setImageUrl={setImageUrl} />
      </div>
      <SumbitButton />
    </form>
  );
}
