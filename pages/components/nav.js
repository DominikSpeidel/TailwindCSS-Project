import Home_Icon from "./Icons/Home_Icon";
import About_Icon from "./Icons/About_Icon";
import Contact_Icon from "./Icons/Contact_Icon";

function Nav() {
  return (
    <nav class="text-right">
      <div>
        <h1 class="font-bold uppercase p-4 border-b border-gray-100">
          <a href="/" class="hover:text-gray-900">
            Rufus Food Planner
          </a>
        </h1>
      </div>
      <ul class="mt-6">
        <li class="py-1 border-r-2 border-white hover:border-primary hover:text-gray-900">
          <a href="/" class="px-4 flex justify-end">
            <span class="mr-2">Home</span>
            <Home_Icon />
          </a>
        </li>
        <li class="py-1 border-r-2 border-white hover:border-primary hover:text-gray-900">
          <a href="/" class="px-4 flex justify-end">
            <span class="mr-2">About</span>
            <About_Icon />
          </a>
        </li>
        <li class="py-1 border-r-2 border-white hover:border-primary hover:text-gray-900">
          <a href="/" class="px-4 flex justify-end">
            <span class="mr-2">Contact</span>
            <Contact_Icon />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
