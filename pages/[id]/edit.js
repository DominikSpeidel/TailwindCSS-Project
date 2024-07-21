import FormEdit from "../components/formEdit";
import LogIn from "../components/LogIn";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function Edit() {
  const router = useRouter();
  const { id } = router.query;

  const { data: currentRecipe, error } = useSWR(`/api/recipes/${id}`);

  if (!currentRecipe) {
    return <p>is Loading</p>;
  }

  if (error) {
    return (
      <h1>
        Ein unerwarteter Fehler ist aufgetreten. Bitte aktualisiere die Seite
        oder versuche es später erneut.
      </h1>
    );
  }

  console.log(currentRecipe);
  return (
    <>
      <LogIn />
      <div className="flex min-h-screen flex-col ">
        <h1 className="text-gray-700 text-4xl md:text-6xl font-semibold">
          Neues Rezept
        </h1>
        <FormEdit currentRecipe={currentRecipe} />
      </div>
    </>
  );
}
