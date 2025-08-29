import { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "./Button";
import { Link, NavLink, useLocation } from "react-router-dom";
import clsx from "clsx";

function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navLinkClass = ({ isActive }) =>
    clsx("text-gray-700", isActive && "text-primary font-bold");

  return (
    <header className="shadow-2xl fixed top-0 left-0 right-0 h-24 bg-bgColor-1 flex p-4 items-center md:justify-center">
      <div className="w-full flex justify-between items-center md:w-7xl">
        <h1 className="text-xl font-semibold">Icon or Label</h1>

        <nav className="text-sm text-textColor-1">
          {/* Menu list (Desktop) */}
          <ul className="hidden md:flex md:space-x-4 md:items-center md:justify-center">
            <li className="">
              <NavLink to="/" end className={navLinkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/find-cafe" className={navLinkClass}>
                Find a Cafe
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={navLinkClass}>
                About us
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={navLinkClass}>
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Hamburger (mobile) */}
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {!open ? <Menu /> : <X />}
          </button>

          {open && (
            <ul className="absolute top-16 left-0 w-full bg-gray-800 flex flex-col items-center gap-4 py-6 md:hidden">
              <li>
                <a href="#home" className="hover:text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-gray-400">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
          )}
        </nav>

        <div className="hidden md:flex md:space-x-1">
          <Button
            color={location.pathname === "/login" ? "primary" : "secondary"}
          >
            <Link to="/login">Login</Link>
          </Button>
          <Button
            color={location.pathname === "/register" ? "primary" : "secondary"}
          >
            <Link to="/register">Sign up</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
