import { useRouter } from "next/router";
import useSWR from "swr";

export default function ActivityCardDetails({ recipes }) {
  const router = useRouter();
  const { id } = router.query;

  const { data: recipe, error } = useSWR(`/api/recipes/${id}`);

  if (!recipe) {
    return null;
  }

  if (error) {
    return <h1>Oh, sorry you must have taken a wrong turn!</h1>;
  }

  return <h1>{recipe.name}</h1>;
}
