import { Link } from "@remix-run/react";
import style from "./css/homepage.module.css";
import Header from "./header";
export default function Homepage() {
  return (
    <main>
      <section className={style.head}>
        <Header />
        <h1 className={style.title}>
          <span className={style.theblog}>The</span> Truthsayers {""}
          <span className={style.theblog}>blog</span>
        </h1>
        <h2 className={style.h2}>They exist.</h2>
      </section>
    </main>
  );
}
