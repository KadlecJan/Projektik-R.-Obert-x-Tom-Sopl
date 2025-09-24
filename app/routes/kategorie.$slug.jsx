import Header from "../components/header";
import style from "../components/css/kategorie.module.css";

// export async function loader({ params }) {
//   const categorySlug = params.slug;
//   let categoryData = await getCategoryBySlug(categorySlug);
//   return categoryData[0];
// }

const category = {
  title: "UFO & UAP",
  posts: [
    {
      id: 1,
      img: "https://static.scientificamerican.com/dam/m/2a63d59b62cb6c52/original/Xenolinguistics_alien_lauguage.jpeg?m=1743695744.971&w=1200",
      title: "They are here",
      excerpt: "This is the first post.",
    },
    {
      id: 2,
      img: "https://upload.wikimedia.org/wikipedia/commons/0/04/Roswell_Daily_Record._July_8%2C_1947._RAAF_Captures_Flying_Saucer_On_Ranch_in_Roswell_Region._Top_of_front_page.jpg",
      title: "Second Post",
      excerpt: "This is the second post.",
    },
    {
      id: 3,
      img: "https://upload.wikimedia.org/wikipedia/commons/0/04/Roswell_Daily_Record._July_8%2C_1947._RAAF_Captures_Flying_Saucer_On_Ranch_in_Roswell_Region._Top_of_front_page.jpg",
      title: "Second Post",
      excerpt: "This is the second post.",
    },
  ],
};

export default function Index() {
  return (
    <main>
      <section className={style.head}>
        <Header />
        <h1 className={style.title}>{category.title}</h1>
      </section>
      <section className={style.articles}>
        {category.posts.map((post) => (
          <div className={style.post}>
            {post.img && (
              <img src={post.img} alt={post.title} className={style.imi} />
            )}
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
