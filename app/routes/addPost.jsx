import { redirect } from "@remix-run/server-runtime";
import { addPost } from "../api/category.db";

export async function action({ request }) {
  const addPostFormData = await request.formData();

  const date = addPostFormData.get("date");
  const autor = addPostFormData.get("autor");
  const title = addPostFormData.get("title");
  const text = addPostFormData.get("text");
  const category = addPostFormData.get("category");
  const img = addPostFormData.get("img");
  const slug = title.toLowerCase().replace(/ /g, "-");
  await addPost(slug, date, autor, title, text, category, img);

  return redirect("/");
}
