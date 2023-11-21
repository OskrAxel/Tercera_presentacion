import React from "react";
import { useParams } from "react-router-dom";
import "../Bec/bec.scss";
import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com/posts/";
const user = 2;
export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${user}`)
      .then((response) => {
        setPost(response.data);
      });
  }, []);

  if (!post) return null;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
