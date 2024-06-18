import { useState, useEffect } from "react";
import Link from "next/link";

function LogIn() {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    async function fetchUserId() {
      const response = await fetch("/api/auth");
      const data = await response.json();
      setUserId(data.userId);
    }

    fetchUserId();
  }, []);

  return (
    <section className="flex justify-start md:justify-end mb-7">
      {userId ? (
        <>
          <p>Du bist angemeldet</p>
        </>
      ) : (
        <>
          <p>Du bist angemeldet</p>
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
        </>
      )}
    </section>
  );
}

export default LogIn;
