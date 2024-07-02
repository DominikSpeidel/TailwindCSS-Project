import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

function handleClick() {
  alert(
    "Du kannst nur selbsterstellte Rezepte bearbeiten und löschen. Bitte logge dich dafür ein"
  );
}

export default function EditandDelete({ id, onHandleDelete }) {
  return (
    <aside className="flex xl:items-start max-xl:justify-center max-xl:mt-6 gap-5 xl:ml-20">
      <SignedIn>
        <Link href={`/${id}/edit`}>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold transition-transform duration-300 hover:bg-blue-700 hover:scale-105">
            Rezept bearbeiten
          </button>
        </Link>
        <button
          onClick={onHandleDelete}
          className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold transition-transform duration-300 hover:bg-red-700 hover:scale-105"
        >
          Rezept löschen
        </button>
      </SignedIn>
      <SignedOut>
        <button
          className="bg-gray-400 text-white px-4 py-2 rounded-lg font-bold transition-transform duration-300 hover:bg-gray-500 hover:scale-105"
          onClick={handleClick}
        >
          Rezept bearbeiten
        </button>

        <button
          className="bg-gray-400 text-white px-4 py-2 rounded-lg font-bold transition-transform duration-300 hover:bg-gray-500 hover:scale-105"
          onClick={handleClick}
        >
          Rezept löschen
        </button>
      </SignedOut>
    </aside>
  );
}
