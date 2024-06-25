import Nav from "./nav";
import Footer from "./footer";

function Layout({ children }) {
  return (
    <div className="grid md:grid-cols-4 md:mr-44">
      <section className="md:col-span-1 md:flex md:justify-end">
        <Nav />
      </section>

      <main className="px-10 py-6 bg-gray-50 md:col-span-3">{children}</main>

      <Footer />
    </div>
  );
}

export default Layout;
