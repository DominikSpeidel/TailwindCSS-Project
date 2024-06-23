export default function IngredientList({ zutatenListe, onHandleDelete }) {
  return (
    <div className="pt-3 mb-10">
      <h3 className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">
        Deine Zutatenliste
      </h3>
      {zutatenListe.length > 0 ? (
        <ul>
          {zutatenListe.map((zutat) => (
            <li key={zutat.id}>
              <span className="text-lg">{`- ${zutat.name}`}</span>
              <button
                className="p-1 ml-2 text-sm text-red-600 rounded-full hover:bg-red-300 "
                onClick={() => onHandleDelete(zutat.id)}
              >
                <span>(löschen)</span>
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
