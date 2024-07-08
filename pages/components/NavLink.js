import Link from "next/link";

export default function NavLink({ href, text, Icon, isActive }) {
  return (
    <li className="py-1 border-r-2 border-white hover:border-primary">
      <Link
        href={href}
        className={`px-4 flex justify-end ${isActive && "text-gray-900"}`}
      >
        <span className="mr-2">{text}</span>
        <Icon />
      </Link>
    </li>
  );
}
