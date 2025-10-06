import { Form } from "@remix-run/react";

export default function AddPostForm() {
  return (
    <Form method="POST" action="/addPost">
      <h2>Title</h2>
      <input type="text" name="title" id="title" placeholder="title" />
      <h2>Autor</h2>
      <input type="text" name="autor" id="autor" placeholder="autor" />
      <h2>Text</h2>
      <textarea name="text" id="text" placeholder="text" />
      <h2>Category</h2>
      <label>
        <input type="radio" name="category" value="ufo" /> ufo-uap
      </label>
      <label>
        <input type="radio" name="category" value="alcohol" /> alcohol
      </label>
      <label>
        <input type="radio" name="category" value="illuminati" /> illuminati
      </label>
      <label>
        <input type="radio" name="category" value="politics" /> politics
      </label>
      <h2>img</h2>
      <input type="text" name="img" id="img" placeholder="https://........" />
      <button type="submit">send</button>
    </Form>
  );
}
