import { Link } from "@remix-run/react";
import style from "./css/header.module.css";
export default function Header() {
  return (
    <header className={style.header}>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/">UAP/UFO</Link>
        </li>
        <li>
          <Link to="/">ALCOHOL</Link>
        </li>
        <li>
          <Link to="/">ILLUMINATI</Link>
        </li>
        <li>
          <Link to="/">POLITICS</Link>
        </li>
      </ul>
      <button>LOG IN</button>
    </header>
  );
}
