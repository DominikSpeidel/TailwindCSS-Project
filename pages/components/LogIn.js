import Link from "next/link";

function LogIn() {
  return (
    <section className="flex justify-start md:justify-end mb-7">
      <Link
        href="/"
        className="btn text-primary border-primary border-2 hover:bg-primary hover:text-white transform hover:scale-125 duration-300"
      >
        Anmelden
      </Link>
      <Link
        href="/"
        className="btn text-primary ml-5 border-primary border-2  hover:bg-primary hover:text-white transform hover:scale-125 duration-300"
      >
        Registrieren
      </Link>
    </section>
  );
}

export default LogIn;
