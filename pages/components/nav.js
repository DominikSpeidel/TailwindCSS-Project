import Home_Icon from "./Icons/Home_Icon";
import About_Icon from "./Icons/About_Icon";
import Contact_Icon from "./Icons/Contact_Icon";

function Nav() {
  return (
    <nav class="text-right">
      <div className="flex">
        <h1 class="font-bold uppercase p-4">
          <a
            href="/"
            class=" text-2xl md:text-4xl hover:text-gray-900 md:flex md:flex-col"
          >
            <span>Tischlein </span>
            <span>deck </span>
            <span>dich </span>
          </a>
        </h1>
        <div className="px-4 cursor-pointer md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
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
