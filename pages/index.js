import Nav from "./components/nav";
import Card from "./components/card";
import LogIn from "./components/LogIn";

import Contact_Icon from "./components/Icons/Contact_Icon";

export default function Home() {
  return (
    <div class="grid md:grid-cols-4">
      <section class="md:col-span-1">
        <Nav />
      </section>

      <main class="px-16 py-6 bg-gray-50 md:col-span-3">
        <LogIn />

        <header>
          <h2 className="text-gray-700 text-6xl font-semibold">Recipes</h2>
          <h3 className="text-2xl font-semibold">For Ninjas</h3>
        </header>

        <div>
          <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
            Latest Recipes
          </h4>
          <div class="mt-8 grid lg:grid-cols-3 gap-10">
            <Card image={"./cappuccino.jpg"} />
            <Card image={"./quiche.jpg"} />
            <Card image={"./Fish.jpg"} />
            <Card image={"./shashuka.jpg"} />
          </div>
          <h4 class="font-bold mt-12 pb-2 border-b border-gray-200 font-body">
            Most Popular
          </h4>

          <div class="mt-8"></div>

          <div class="flex justify-center">
            <div class="btn bg-secondary-100 text-secondary-200">Load more</div>
          </div>
        </div>
      </main>
      <Contact_Icon />
    </div>
  );
}
