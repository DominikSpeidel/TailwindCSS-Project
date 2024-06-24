export default function RecipeDuration({ onHandleKeyDown }) {
  return (
    <section className="mb-5 flex flex-col items-center">
      <label
        htmlFor="Dauer"
        className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
      >
        <span>Zubereitungsdauer</span>
      </label>
      <div className="flex items-center gap-2">
        <input
          type="number"
          id="Dauer"
          name="duration"
          className=" max-w-[5rem] shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          required
          onKeyDown={onHandleKeyDown}
        />
        <span>min</span>
      </div>
    </section>
  );
}
