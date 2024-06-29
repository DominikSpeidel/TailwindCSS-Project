import LogIn from "./components/LogIn";
import { SignedIn } from "@clerk/nextjs";
import Link from "next/link";

export default function TechStack() {
  return (
    <>
      <div className="max-md:flex justify-between">
        <LogIn />
        <SignedIn>
          <Link href="/create" className="flex justify-end md:hidden">
            <button>
              + Rezept
              <br />
              hinzufügen
            </button>
          </Link>
        </SignedIn>
      </div>
      <header>
        <h2 className="text-gray-700 text-4xl md:text-6xl font-semibold">
          Tech Stack
        </h2>
        <h3 className="text-2xl font-semibold">
          Eine Übersicht über die wichtigsten Komponenten
        </h3>
      </header>
      <div className="mt-10">
        "Tischlein Deck Dich" wurde als Projekt zum Erlernen von Tailwind CSS
        und responsivem Design konzipiert. Zunächst als kleine Übungsapp
        angedacht, ist ihr Umfang stetig gewachsen und besitzt nun die
        vollständige Funktionalität, um als Rezeptapp im Freundes- und
        Familienkreis herangezogen zu werden. Als Teil meines Projektportfolios
        werde ich Tischlein Deck Dich in den nächsten Wochen und Monaten
        weiterentwickeln und neue Features aus Lernzwecken implementieren.
      </div>
      <p className="mt-3">
        Hier ist eine Übersicht über meinen verwendeten TechStack:
      </p>

      <ul className="grid xl:grid-cols-3 grid-cols-2 max-sm:grid-cols-1 gap-y-16 items-center mt-10">
        <li className="flex flex-col items-center">
          <div>
            <a
              title="Vercel, CC BY-SA 4.0 &lt;https://creativecommons.org/licenses/by-sa/4.0&gt;, via Wikimedia Commons"
              href="https://commons.wikimedia.org/wiki/File:Nextjs-logo.svg"
            >
              <img
                width="180"
                alt="Nextjs-logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/256px-Nextjs-logo.svg.png?20230404233503"
              />
            </a>
          </div>
        </li>
        <li className="flex flex-col items-center">
          <div>
            <a
              title="Mostafiz93, CC BY-SA 4.0 &lt;https://creativecommons.org/licenses/by-sa/4.0&gt;, via Wikimedia Commons"
              href="https://commons.wikimedia.org/wiki/File:React_Native.png"
            >
              <img
                width="180"
                alt="React Native"
                src="https://upload.wikimedia.org/wikipedia/commons/d/d3/React_Native.png?20180314115806"
              />
            </a>
          </div>
        </li>

        <li className="flex flex-col items-center">
          <div>
            <a
              title="Sputinik v, CC BY-SA 4.0 &lt;https://creativecommons.org/licenses/by-sa/4.0&gt;, via Wikimedia Commons"
              href="https://commons.wikimedia.org/wiki/File:Javascript_on_figma.png"
            >
              <img
                width="100"
                alt="Javascript on figma"
                src="https://upload.wikimedia.org/wikipedia/commons/1/1e/Javascript_on_figma.png?20211202153929"
              />
            </a>
          </div>
        </li>
        <li className="flex flex-col items-center">
          <div>
            <a
              title="W3C, CC BY 3.0 &lt;https://creativecommons.org/licenses/by/3.0&gt;, via Wikimedia Commons"
              href="https://commons.wikimedia.org/wiki/File:HTML5_Badge.svg"
            >
              <img
                width="100"
                alt="HTML5 Badge"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/512px-HTML5_Badge.svg.png?20110131171049"
              />
            </a>
          </div>
        </li>
        <li className="flex flex-col items-center">
          <h2 className="text-2xl font-semibold">Tailwind CSS</h2>
          <p>CSS Framework</p>
        </li>
        <li className="flex flex-col items-center">
          <h2 className="text-2xl font-semibold">Clerk</h2>
          <p>Authentfizierung</p>
        </li>
        <li className="flex flex-col items-center">
          <h2 className="text-2xl font-semibold">UploadThing</h2>
          <p>Image upload</p>
        </li>

        <li className="flex flex-col items-center">
          <h2 className="text-2xl font-semibold">Mongo DB</h2>
          <p>Datenbank</p>
        </li>
        <li className="flex flex-col items-center">
          <h2 className="text-2xl font-semibold">Vercel</h2>
          <p>Deployment</p>
        </li>
      </ul>
    </>
  );
}
