// app/routes/kategorie.$slug.jsx

import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { getCategoryBySlug } from "../api/category.db";
import style from "../components/css/kategorie.module.css";
import Header from "../components/header";

// Loader pro načtení kategorie podle slugu
export async function loader({ params }) {
  const categorySlug = params.slug;
  let categoryData = await getCategoryBySlug(categorySlug);

  if (!categoryData || categoryData.length === 0) {
    throw new Response("Kategorie nenalezena", { status: 404 });
  }

  return json(categoryData[0]);
}

// Komponenta pro vykreslení kategorie
export default function CategoryPage() {
  const category = useLoaderData();

  return (
    <main>
      <section className={style.head}>
        <Header />
        <h1 className={style.title}>{category.title}</h1>
      </section>

      <section className={style.articles}>
        {category ? (
          <p>Žádné články k zobrazení.</p>
        ) : (
          category.posts.map((post) => (
            <div key={post.id} className={style.post}>
              {post.img && (
                <img src={post.img} alt={post.title} className={style.imi} />
              )}
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
            </div>
          ))
        )}
      </section>
    </main>
  );
}
