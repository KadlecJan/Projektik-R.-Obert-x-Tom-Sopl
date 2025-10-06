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

      <section className={style.legacy}>
        <article className={style.lidi}>
          <div className={style.fotka}>
            <img src="/public/img-uvod-tomik.png" alt="Tomík Cibulka" />
            <h3 className={style.jmeno}>Tomík Cibulka</h3>
          </div>
          <div className={style.fotka}>
            <img src="/public/img-uvod-roberto.png" alt="Roberto Cibulka" />
            <h3 className={style.jmeno}>Roberto Cibulka</h3>
          </div>
          <div className={style.fotka}>
            <img src="/public/img-uvod-jen.png" alt="Jen Česnek" />
            <h3 className={style.jmeno}>Jen Česnek</h3>
          </div>
        </article>
        <article className={style.legacyArticle}>
          <p className={style.legacyText}>
            The TRUTHSAYERS blog is the only blog that tell the truth. We stand
            against the systematic lies that have been told us. Aliens exist,
            they are here. They fly out of the ocean and we choose not to see
            them, we are voluntairly blind!! We know about the Illuminatis
            efforts to silent normal citizens about the truth. But we will not
            be silenced! We will never back down from finding the TRUTH!!
          </p>
          <h4>
            <a href="https://www.gofundme.com/f/support-groundbreaking-ufo-research-the-magenta-project">
              Help us find the WHOLE TRUTH.
            </a>
            <img
              className={style.tekImg}
              src="/public/tekknight.png"
              alt="tek knight"
            />
          </h4>
        </article>
      </section>
      <div className={style.emptyDiv}></div>
    </main>
  );
}
