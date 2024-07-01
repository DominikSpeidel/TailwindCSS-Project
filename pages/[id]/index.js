import { useRouter } from "next/router";
import useSWR, { mutate } from "swr";
import LogIn from "../components/LogIn";
import Clock_Icon from "../components/Icons/Clock_Icon";
import Link from "next/link";

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
    return <h1>Oh, sorry you must have taken a wrong turn!</h1>;
  }

  console.log(recipe);

  return (
    <article>
      <LogIn />
      <header>
        <h2 className="text-gray-700 text-4xl md:text-6xl font-semibold">
          {recipe.name}
        </h2>
        <h3 className="text-2xl font-semibold">{`von ${recipe.user}`}</h3>
      </header>

      <h4 className="font-bold mt-8 pb-2 border-b border-gray-200">
        kürzlich hinzugefügt
      </h4>
      <div className=" relative mt-6 xl:flex ">
        <img
          className=" w-full xl:w-3/5 h-64 xl:h-96 object-cover"
          src={recipe.imageUrl}
          alt="Hills"
        />
        <div
          className="badge gap-1 flex items-center
      "
        >
          <Clock_Icon />
          <span>{recipe.duration} min</span>
        </div>

        <section className="xl:px-16 max-xl:mt-6">
          <h3 className="text-2xl font-semibold">Zutaten</h3>
          <ul className="list-disc ml-4">
            {recipe.ingredients.map((ingredient) => (
              <li>{ingredient.name}</li>
            ))}
          </ul>
        </section>
      </div>
      <section className="mt-6 xl:flex">
        <article className="xl:w-3/5">
          <h3 className="text-2xl font-semibold">Zubereitung</h3>
          <div style={{ whiteSpace: "pre-wrap" }}>{recipe.description}</div>
        </article>
        <aside className="flex xl:items-start max-xl:justify-center max-xl:mt-10 gap-5 xl:ml-20">
          <Link href={`/${id}/edit`}>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold transition-transform duration-300 hover:bg-blue-700 hover:scale-105">
              Rezept bearbeiten
            </button>
          </Link>
          <button
            onClick={handleDelete}
            className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold transition-transform duration-300 hover:bg-red-700 hover:scale-105"
          >
            Rezept löschen
          </button>
        </aside>
      </section>
    </article>
  );
}
