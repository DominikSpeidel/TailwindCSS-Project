export default function IngredientList({ zutatenListe = [], onHandleDelete }) {
  return (
    <div className="pt-3 mb-10">
      <h3 className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">
        Deine Zutatenliste
      </h3>
      {zutatenListe.length > 0 ? (
        <ul className="xl:grid xl:grid-cols-2 xl:gap-x-1 xl:max-w-[32rem]">
          {zutatenListe.map((zutat) => (
            <li key={zutat.id}>
              <span className="text-md">{`- ${zutat.name}`}</span>
              <button
                className="p-1 ml-1 text-sm text-red-600 rounded-full hover:bg-red-300 "
                onClick={() => onHandleDelete(zutat.id)}
              >
                (x)
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <span>Keine Zutaten hinzugefügt</span>
      )}
    </div>
  );
}
