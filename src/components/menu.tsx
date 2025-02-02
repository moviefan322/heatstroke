import { useState } from "react";
import Link from "next/link";
import Hamburger from "./burger";
import Xicon from "./x";

export default function Menu() {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <>
      <nav>
        <Link href="/">
          <span className="tourney-font">Heatstroke</span>
        </Link>
        <ul className="courier-font">
          <li>
            <Link href="/story">Our Story</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/quote">Quote</Link>
          </li>
        </ul>
        <div className="toggle-mobile-menu">
          {!showDropdown ? (
            <button onClick={() => setShowDropdown(true)}>
              <Hamburger color={"white"} />
            </button>
          ) : (
            <button onClick={() => setShowDropdown(false)}>
              <Xicon />
            </button>
          )}
        </div>
      </nav>

      {/* Dropdown Menu */}
      <div className={`dropdown ${showDropdown ? "show" : ""}`}>
        <div onClick={() => setShowDropdown(false)} className="dropdown-item">
          <Link href="/story">Our Story</Link>
        </div>
        <div onClick={() => setShowDropdown(false)} className="dropdown-item">
          <Link href="/services">Services</Link>
        </div>
        <div onClick={() => setShowDropdown(false)} className="dropdown-item">
          <Link href="/quote">Quote</Link>
        </div>
      </div>

      {/* STYLESHEET */}
      <style jsx>{`
        .dropdown {
          position: fixed;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          top: 80px;
          background-color: rgba(0, 0, 0, 0.5);
          width: 100vw;
          color: white;
          font-size: 20px;
          overflow: hidden;
          height: 0;
          transition: height 0.3s ease-in-out, opacity 0.3s ease-in-out;
        }
        .dropdown.show {
          height: 192px;
          opacity: 1;
        }
        .dropdown-item {
          width: 100%;
          text-align: center;
          padding: 1rem;
          border: 1px solid white;
        }
        nav {
          position: fixed;
          top: 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          background-color: rgba(0, 0, 0, 0.5);
          color: white;
          width: 100vw;
          height: 80px;
        }
        ul {
          display: none;
        }

        li {
          margin-left: 1rem;
          font-size: 20px;
        }

        li:hover {
          cursor: pointer;
          color: #ff0000;
        }

        li:active {
          cursor: pointer;
          color: #fff700;
        }

        a {
          color: white;
          text-decoration: none;
        }
        .tourney-font {
          font-size: 30px;
          border: 1px solid white;
          padding: 5px;
        }
        @media (min-width: 768px) {
          nav {
            position: fixed;
            top: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 1rem;
            background-color: rgba(0, 0, 0, 0.5);
            color: white;
            width: 100vw;
          }
          .container {
            display: flex;
            border: red 1px solid;
            flex-direction: column;
            margin-bottom: 50px;
            padding: 5rem;
            align-items: center;
          }
          ul {
            display: flex;
            list-style-type: none;
            justify-content: space-around;
            width: 100%;
            align-items: center;
          }
        }
      `}</style>
    </>
  );
}
