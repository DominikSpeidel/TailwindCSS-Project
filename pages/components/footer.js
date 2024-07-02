import Link from "next/link";

export default function Footer() {
  return (
    <footer className="md:col-span-3 md:col-start-2 mt-14 mb-20 md:text-lg">
      <ul className="flex text-center justify-evenly ">
        <li className="hover:text-gray-900">
          <Link href="/techstack">Tech Stack</Link>
        </li>
        <li className="hover:text-gray-900">
          <Link href="/karriere">Karriere</Link>
        </li>
        <li className="hover:text-gray-900">
          <Link href="/impressum">Impressum</Link>
        </li>
        <li className="hover:text-gray-900">
          <a href="/">© 2024</a>
        </li>
      </ul>
    </footer>
  );
}
