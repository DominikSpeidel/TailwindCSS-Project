import Home_Icon from "./Icons/Home_Icon";
import About_Icon from "./Icons/About_Icon";
import Contact_Icon from "./Icons/Contact_Icon";

function Nav() {
  return (
    <nav>
      <div>
        <h1 className="font-bold uppercase p-4 border-b border-gray-200">
          <a href="/" class="">
            Rufus Food Planner
          </a>
        </h1>
      </div>
      <ul>
        <li className="text-gray-700 font-bold">
          <a href="/">
            <span>Home</span>
            <Home_Icon />
          </a>
        </li>
        <li>
          <a href="/">
            <span>About</span>
            <About_Icon />
          </a>
        </li>
        <li>
          <a href="/">
            <span>Contact</span>
            <Contact_Icon />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
