export default function Home() {
  return (
    <div>
      <div>
        <nav>
          <div>
            <h1 className="font-bold uppercase p-4 border-b border-gray-200">
              <a href="/" class="">
                Food Ninja
              </a>
            </h1>
          </div>
          <ul>
            <li className="text-gray-700 font-bold">
              <a href="/">
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="/">
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="/">
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <main class="px-16 py-6">
        <div class="flex justify-center md:justify-end">
          <a href="/" class="text-primary">
            Log in
          </a>
          <a href="/" class="text-primary ml-2">
            Sign up
          </a>
        </div>

        <header>
          <h2 className="text-gray-700 text-6xl font-semibold">Recipes</h2>
          <h3 className="text-2xl font-semibold">For Ninjas</h3>
        </header>

        <div>
          <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
            Latest Recipes
          </h4>

          <div class="mt-8">
            <div>
              <img className="w-87 h-60" src="./hills.png" alt="Hills" />
              <div>
                <span>5 Bean Chili Stew</span>
                <span>Recipe by Mario</span>
              </div>
            </div>
          </div>

          <h4 class="font-bold mt-12 pb-2 border-b border-gray-200 font-body">
            Most Popular
          </h4>

          <div class="mt-8"></div>

          <div class="flex justify-center">
            <div class="bg-secondary-100 text-secondary-200">Load more</div>
          </div>
        </div>
      </main>
    </div>
  );
}
