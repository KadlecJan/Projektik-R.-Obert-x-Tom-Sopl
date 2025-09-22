import Header from "../components/header";

// export async function loader({ params }) {
//   const categorySlug = params.slug;
//   let categoryData = await getCategoryBySlug(categorySlug);
//   return categoryData[0];
// }

const category = {
  title: "Sample Category",
  posts: [
    { id: 1, img: "", title: "First Post", excerpt: "This is the first post." },
    {
      id: 2,
      img: "",
      title: "Second Post",
      excerpt: "This is the second post.",
    },
  ],
};

export default function Index() {
  return (
    <div>
      <Header />
      
    </div>
  );
}
