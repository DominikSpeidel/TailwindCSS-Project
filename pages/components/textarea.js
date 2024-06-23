export default function Textarea({ onHandleKeyDown }) {
  return (
    <div className="mb-5">
      <label
        htmlFor="Beschreibung"
        className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
      >
        Beschreibung
      </label>
      <textarea
        id="Beschreibung"
        rows="10"
        className="min-w-[14rem] lg:min-w-72 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        onKeyDown={onHandleKeyDown}
      ></textarea>
    </div>
  );
}
