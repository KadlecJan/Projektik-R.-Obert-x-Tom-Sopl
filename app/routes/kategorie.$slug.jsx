// app/routes/kategorie.$slug.jsx

import { useLoaderData } from "@remix-run/react";
import { getCategoryBySlug, getPostsInCategory } from "../api/category.db";
import style from "../components/css/kategorie.module.css";
import Header from "../components/header";

// Loader pro načtení kategorie podle slugu
export async function loader({ params }) {
  const categorySlug = params.slug;
  let categoryData = await getCategoryBySlug(categorySlug);
  let postsData = await getPostsInCategory(categorySlug);
  // console.log("posts:", postsData);
  // console.log("category:", categoryData);

  if (!categoryData || categoryData.length === 0) {
    throw new Response("Kategorie nenalezena", { status: 404 });
  }

  return {
    category: categoryData,
    posts: postsData,
  };
}

// Funkce pro zkrácení textu na 100 znaků
function sliceText(text) {
  if (text.length > 150) {
    return text.slice(0, 150) + "...";
  }
  return text;
}
// Komponenta pro vykreslení kategorie
export default function CategoryPage() {
  const { category, posts } = useLoaderData();
  console.log("category:", category);
  console.log("posts:", posts);

  return (
    <main>
      <section className={style[`bg_${category[0].slug}`]}>
        <Header />
        <h1 className={style.title}>{category[0].title}</h1>
      </section>
      <section className={style.articles}>
        {posts.map((post) => (
          <div className={style.post}>
            <img src={post.img} alt={post.title} className={style.imi} />
            <h5 className={style.articledate}>{post.date}</h5>
            <h2 className={style.articletitle}>{post.title}</h2>
            <h4 className={style.autor}>{post.autor}</h4>
            <p className={style.articledescr}>{sliceText(post.text)}</p>
            <button className={style.kmButton}>
              <a href="" className={style.kmButton}>
                Know more...
              </a>
            </button>
          </div>
        ))}
      </section>
    </main>
  );
}
