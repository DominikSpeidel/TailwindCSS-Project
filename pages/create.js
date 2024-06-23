import LogIn from "./components/LogIn";
import CreateForm from "./components/createForm";

export default function Create() {
  return (
    <>
      <LogIn />
      <div className="flex min-h-screen flex-col ">
        <h1 className="text-gray-700 text-4xl md:text-6xl font-semibold">
          Neues Rezept
        </h1>
        <CreateForm />
      </div>
    </>
  );
}
