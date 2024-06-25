import Link from "next/link";
import { UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { useEffect } from "react";

function LogIn() {
  // useEffect(() => {
  //   async function fetchUserId() {
  //     try {
  //       const response = await fetch("/api/auth");
  //       const data = await response.json();

  //       if (
  //         data.data.sessionClaims &&
  //         data.data.sessionClaims.full_name &&
  //         data.data.sessionClaims.full_name !== "null null"
  //       ) {
  //         console.log(data);
  //         console.log(data.data.sessionClaims.full_name);
  //       } else {
  //         console.log("Niemand angemeldet oder Fehler in den Daten:", data);
  //       }
  //     } catch (error) {
  //       console.error("Fehler beim Abrufen der Daten:", error);
  //     }
  //   }

  //   fetchUserId();
  // }, []);

  const userButtonAppearance = {
    elements: {
      userButtonAvatarBox: "w-14 h-14",
    },
  };

  return (
    <section className="flex justify-start md:justify-end mb-7">
      <>
        <SignedIn>
          <UserButton showName appearance={userButtonAppearance}></UserButton>
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
