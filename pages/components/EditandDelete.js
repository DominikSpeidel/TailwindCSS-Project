import Link from "next/link";

export default function EditandDelete() {
  return (
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
  );
}
