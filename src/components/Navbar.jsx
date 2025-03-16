import React, { useState } from "react";
import { WiDaySunny } from "react-icons/wi";
import { FaBars, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { IoMoonOutline } from "react-icons/io5";
import { changeTheme } from "../redux/Slice";
import { Link } from "react-router";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [themes, setthemes] = useState(true);
  const theme = useSelector((store) => store.app.theme);
  const dispatch = useDispatch();
  // function handleChange(){
  //   setthemes(!themes)
  //   dispatch(changeTheme(!theme))
  // }

  return (
    <>
      <div
        className={`h-20 md:justify-around md:h-30 w-full ${
          theme ? "bg-zinc-950" : "bg-white"
        } flex justify-between items-center px-6 md:px-10`}
      >
        {/* Logo / Icon */}

        {theme ? (
          <WiDaySunny
            className="text-cyan-400 text-4xl cursor-pointer border rounded-xl p-1"
            onClick={() => dispatch(changeTheme(!theme))}
          />
        ) : (
          <IoMoonOutline
            className="text-cyan-400 text-4xl cursor-pointer border rounded-xl p-1"
            onClick={() => dispatch(changeTheme(!theme))}
          />
        )}

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex ${
            theme ? "text-white" : "text-black"
          }  gap-6 font-medium cursor-pointer`}
        >
          <li className="hover:text-cyan-300">
            <Link to="/"> Home</Link>
          </li>
          <li className="hover:text-cyan-300">
            <Link to="/projects">Projects</Link>
          </li>
          {/* <li className="hover:text-cyan-300">Resources</li> */}
        </ul>

        {/* Mobile Menu Button */}
        <div className={`md:hidden ${theme ? "text-white" : "text-black"}`}>
          {menuOpen ? (
            <FaTimes
              className=" text-2xl cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
          ) : (
            <FaBars
              className=" text-2xl cursor-pointer"
              onClick={() => setMenuOpen(true)}
            />
          )}
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul
            className={`absolute top-16 left-0 w-full ${
              theme ? "bg-black text-white" : "bg-zinc-900"
            }  flex flex-col items-center gap-4 py-4 text-white font-medium md:hidden`}
          >
            <li
              className="hover:text-cyan-300"
              onClick={() => setMenuOpen(false)}
            >
              <Link to="/"> Home</Link>
            </li>

            <li
              className="hover:text-cyan-300"
              onClick={() => setMenuOpen(false)}
            >
              <Link to="/projects">Projects</Link>
            </li>

            {/* <li
              className="hover:text-cyan-300"
              onClick={() => setMenuOpen(false)}
            >
              Resources
            </li> */}
          </ul>
        )}
      </div>
    </>
  );
}

export default Navbar;
