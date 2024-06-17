function Footer() {
  return (
    <footer className="md:col-span-3 md:col-start-2 mt-20 mb-20">
      <ul className="flex text-center justify-evenly ">
        <li className="hover:text-gray-900">
          <a href="/">Impressum</a>
        </li>
        <li className="hover:text-gray-900">
          <a href="/">Datenschutz</a>
        </li>
        <li className="hover:text-gray-900">
          <a href="/">Karriere</a>
        </li>
        <li className="hover:text-gray-900">
          <a href="/">© 2024</a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
