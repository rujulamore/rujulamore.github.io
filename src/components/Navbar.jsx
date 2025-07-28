import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-center space-x-6 sticky top-0 z-50">
      {["Home", "About", "Projects", "Skills", "Transcript", "Dance", "Contact"].map((page) => {
  const path = page === "Home" ? "/" : `/${page.toLowerCase()}`;
  return (
    <Link
      key={page}
      to={path}
      className="text-blue-600 font-semibold hover:text-blue-800 transition"
    >
      {page}
    </Link>
  );
})}

    </nav>
  );
};

export default Navbar;
