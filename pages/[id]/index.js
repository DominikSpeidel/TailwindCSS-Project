import { useRouter } from "next/router";
import useSWR from "swr";
import LogIn from "../components/LogIn";
import Clock_Icon from "../components/Icons/Clock_Icon";

export default function DetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data: recipe, error } = useSWR(`/api/recipes/${id}`);

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
      <section className="mt-6">
        <h3 className="text-2xl font-semibold">Zubereitung</h3>
        <div style={{ whiteSpace: "pre-wrap" }}>{recipe.description}</div>
      </section>
    </article>
  );
}
