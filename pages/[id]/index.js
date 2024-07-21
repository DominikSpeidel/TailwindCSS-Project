import { useRouter } from "next/router";
import useSWR, { mutate } from "swr";
import LogIn from "../components/LogIn";
import Clock_Icon from "../components/Icons/Clock_Icon";
import EditandDelete from "../components/EditandDelete";
import Image from "next/image";

export default function DetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data: recipe, error } = useSWR(`/api/recipes/${id}`);

  async function handleDelete() {
    const response = await fetch(`/api/recipes/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      mutate(`/api/recipes`);
      router.push("/");
    }
  }

  if (!recipe) {
    return null;
  }

  if (error) {
    return (
      <h1>
        Ein unerwarteter Fehler ist aufgetreten. Bitte aktualisiere die Seite
        oder versuche es später erneut.
      </h1>
    );
  }

  return (
    <div className="md:text-lg">
      <LogIn />
      <header>
        <h2 className="text-gray-700 text-4xl md:text-6xl font-semibold">
          erstellt am {recipe.name}
        </h2>
        <h3 className="text-2xl font-semibold">{`von ${recipe.user}`}</h3>
      </header>

      <h4 className="font-bold mt-8 pb-2 border-b border-gray-200">
        {recipe.date}
      </h4>
      <div className=" relative mt-6 xl:flex ">
        <Image
          className=" w-full xl:w-3/5 h-64 xl:h-96 object-cover"
          src={recipe.imageUrl}
          width={800}
          height={600}
          alt="Hills"
        />
        <div
          className="badge gap-1 flex items-center
      "
        >
          <Clock_Icon />
          <span>{recipe.duration} min</span>
        </div>

        <section className="xl:px-16 max-xl:mt-6  text-gray-800 ">
          <h3 className="text-2xl font-semibold">Zutaten</h3>
          <ul className="list-disc ml-4">
            {recipe.ingredients.map((ingredient) => (
              <li>{ingredient.name}</li>
            ))}
          </ul>
        </section>
      </div>
      <section className="mt-6 xl:flex">
        <article className="xl:w-3/5  text-gray-800">
          <h3 className="text-2xl font-semibold">Zubereitung</h3>
          <div style={{ whiteSpace: "pre-wrap" }}>{recipe.description}</div>
        </article>
        <EditandDelete id={id} onHandleDelete={handleDelete} />
      </section>
    </div>
  );
}
