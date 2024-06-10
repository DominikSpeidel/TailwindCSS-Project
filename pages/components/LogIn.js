function LogIn() {
  return (
    <section className="flex justify-start md:justify-end mb-7">
      <a
        href="/"
        className="btn text-primary border-primary border-2 hover:bg-primary hover:text-white transform hover:scale-125 duration-300"
      >
        Log in
      </a>
      <a
        href="/"
        className="btn text-primary ml-5 border-primary border-2  hover:bg-primary hover:text-white transform hover:scale-125 duration-300"
      >
        Sign up
      </a>
    </section>
  );
}

export default LogIn;
