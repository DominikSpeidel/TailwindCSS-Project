import LogIn from "./components/LogIn";
import Nav from "./components/nav";
import Footer from "./components/footer";

function Kontakt() {
  return (
    <div className="grid md:grid-cols-4 md:mr-44">
      <section className="md:col-span-1 md:flex md:justify-end">
        <Nav />
      </section>

      <main className="px-16 py-6 bg-gray-50 md:col-span-3">
        <LogIn />
      </main>

      <Footer />
    </div>
  );
}

export default Kontakt;
