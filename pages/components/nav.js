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
  );
}

export default Nav;
