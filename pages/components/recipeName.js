export default function RecipeName() {
  return (
    <section>
      <label
        htmlFor="Rezeptname"
        className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
      >
        Name deines Rezeptes
      </label>
      <input
        type="text"
        id="Rezeptname"
        minLength="1"
        maxLength="150"
        pattern="^(?!.*\s{2,}).+$"
        className="min-w-[14rem] lg:min-w-72 mb-5 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        required
      />
    </section>
  );
}
