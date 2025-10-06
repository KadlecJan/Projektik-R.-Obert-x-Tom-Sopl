import { sql } from "./sql";
export async function getCategoryBySlug(slug) {
  const response = await sql(
    `SELECT * FROM projektik_categories WHERE slug = '${slug}'`
  );
  if (!response) {
    console.error("No response from SQL function");
    return null;
  }

  return response;
}

export async function getPostsInCategory(slug) {
  const response = await sql(
    `SELECT * FROM projektik_articles WHERE slug = '${slug}'`
  );
  if (!response) {
    console.error("No response from SQL function");
    return null;
  }

  return response;
}

export async function addPost(slug, date, autor, title, text, category, img) {
  const response = await sql(
    `INSERT INTO projektik_articles (slug, date, autor, title, text, category, img) VALUES ('${slug}', NOW(),'${autor}','${title}','${text}','${category}','${img}')`
  );
  if (!response) {
    console.error("No response from SQL function");
    return null;
  }
}
