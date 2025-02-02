import * as React from "react";

interface HamburgerProps {
  color?: string;
}

const Hamburger = ({ color = "white" }: HamburgerProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke={color}
      strokeLinecap="round"
      strokeWidth="2"
      d="M4 18h16M4 12h16M4 6h16"
    ></path>
  </svg>
);

export default Hamburger;
