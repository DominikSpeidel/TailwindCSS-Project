import LogIn from "./components/LogIn";

export default function Ueber_uns() {
  return (
    <>
      <LogIn />
      <div>
        <header>
          <h1 className="text-gray-700 text-4xl md:text-6xl font-semibold">
            Über uns
          </h1>
          <p className="text-2xl font-light mt-4">
            Erfahre mehr über Tischlein Deck Dich
          </p>
        </header>
        <section className="mt-8 text-lg leading-relaxed text-gray-800">
          <p className="mb-6">
            Willkommen bei Tischlein Deck Dich – deiner ultimativen App für
            kulinarische Genüsse! Mit Tischlein Deck Dich sind die nächsten
            Gaumenfreuden nur einen Klick entfernt. Egal, ob du ein
            leidenschaftlicher Koch oder einfach ein Genießer bist, unsere App
            hilft dir, deine Lieblingsrezepte immer griffbereit zu haben.
          </p>
        </section>

        <section className="mt-8 text-lg leading-relaxed text-gray-800">
          <p className="mb-6">
            <strong>Speichere Deine Lieblingsrezepte</strong>
          </p>
          <p className="mb-6">
            Mit Tischlein Deck Dich kannst du all deine Lieblingsrezepte ganz
            einfach speichern und organisieren. Schluss mit dem lästigen Suchen
            nach dem Rezept für Omas Apfelkuchen oder dem perfekten
            Pasta-Gericht – du hast alles stets dabei und jederzeit zur Hand.
          </p>
        </section>

        <section className="mt-8 text-lg leading-relaxed text-gray-800">
          <p className="mb-6">
            <strong>Teile Deine kulinarischen Schätze</strong>
          </p>
          <p className="mb-6">
            Teilen macht Freude, besonders wenn es um leckere Rezepte geht. Mit
            Tischlein Deck Dich kannst du deine Kreationen ganz einfach mit
            Freunden und Familie teilen. Lade sie ein, deine kulinarischen
            Highlights zu entdecken und lasst euch gegenseitig inspirieren.
          </p>
        </section>

        <section className="mt-8 text-lg leading-relaxed text-gray-800">
          <p className="mb-6">
            <strong>Perfekt für Gruppen</strong>
          </p>
          <p className="mb-6">
            Tischlein Deck Dich ist ideal für Gruppen, die ihre Liebe zum Kochen
            und Genießen teilen möchten. Gemeinsam könnt ihr eure
            Lieblingsrezepte festhalten, ausprobieren und so den Genuss auf das
            nächste Level heben. Ob Familie, Freundeskreis oder Kochgemeinschaft
            – mit Tischlein Deck Dich wird jede Mahlzeit zu einem besonderen
            Erlebnis.
          </p>
        </section>

        <section className="mt-8 text-lg leading-relaxed text-gray-800">
          <p className="mb-6">
            <strong>Lass dich inspirieren</strong>
          </p>
          <p className="mb-6">
            Unsere App ist nicht nur ein Rezeptbuch, sondern auch eine
            Inspirationsquelle. Entdecke neue Rezepte, probiere unbekannte
            Gerichte aus und erweitere deinen kulinarischen Horizont. Mit
            Tischlein Deck Dich wird jeder Tag zu einem Fest für die Sinne.
          </p>
        </section>
      </div>
    </>
  );
}
