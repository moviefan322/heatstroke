import Link from "next/link";

export default function Menu() {
  return (
    <div className="fixed-top">
      <nav>
        <Link href="/">
          <span className="tourney-font">Heatstroke</span>
        </Link>
        <ul className='courier-font'>
          <li>
            <Link href="/story">Our Story</Link>
          </li>
          <li>
            <Link href="/story">Services</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* STYLESHEET */}
      <style jsx>{`
        nav {
          display: flex;
          justify-content: center;
          padding: 1rem;
          background-color: rgba(0, 0, 0, 0.5);
          color: white;
        }
        ul {
          display: flex;
          list-style-type: none;
          justify-content: space-around;
          width: 100%;
          align-items: center;
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
        .fixed-top {
            position: fixed;
            width: 100%;
            z-index
        }
      `}</style>
    </div>
  );
}
