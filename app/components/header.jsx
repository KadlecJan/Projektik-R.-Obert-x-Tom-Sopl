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
          <Link to="/kategorie/ufo">UAP/UFO</Link>
        </li>
        <li>
          <Link to="/kategorie/alcohol">ALCOHOL</Link>
        </li>
        <li>
          <Link to="/kategorie/illuminati">ILLUMINATI</Link>
        </li>
        <li>
          <Link to="/kategorie/politics">POLITICS</Link>
        </li>
      </ul>
      <Link to="/addPostForm">add new post</Link>
    </header>
  );
}
