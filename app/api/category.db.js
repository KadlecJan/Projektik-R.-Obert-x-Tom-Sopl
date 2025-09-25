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
