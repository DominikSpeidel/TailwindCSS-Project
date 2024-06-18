import Link from "next/link";
import { UserButton, SignedIn, SignedOut } from "@clerk/nextjs";

function LogIn() {
  return (
    <section className="flex justify-start md:justify-end mb-7">
      <>
        <SignedIn>
          <UserButton showName></UserButton>
        </SignedIn>
      </>
      <>
        <SignedOut>
          <Link
            href="/sign-in"
            className="btn text-primary border-primary border-2 hover:bg-primary hover:text-white transform hover:scale-125 duration-300"
          >
            Anmelden
          </Link>
          <Link
            href="/sign-up"
            className="btn text-primary ml-5 border-primary border-2  hover:bg-primary hover:text-white transform hover:scale-125 duration-300"
          >
            Registrieren
          </Link>
        </SignedOut>
      </>
    </section>
  );
}

export default LogIn;
