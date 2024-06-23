export default function IngredientInput({
  zutat,
  setZutat,
  onHandleAddIngredient,
}) {
  return (
    <section className="mb-5 pt-3">
      <label
        htmlFor="ingredient"
        className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
      >
        Zutat
      </label>
      <div className="flex items-center gap-10">
        <div className="flex space-x-2">
          <input
            type="text"
            id="ingredient"
            name="name"
            minLength="1"
            maxLength="150"
            pattern="^(?!.*\s{2,}).+$"
            className="min-w-[14rem] lg:min-w-72  shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            value={zutat}
            onChange={(e) => setZutat(e.target.value)}
          />
        </div>

        <span
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={onHandleAddIngredient}
        >
          hinzufügen
        </span>
      </div>
    </section>
  );
}
