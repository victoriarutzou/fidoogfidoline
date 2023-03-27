import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PostForm from "../../components/admin/PostForm";

export default function OpdateringsSide() {

  const navigate = useNavigate();
  const [post, setPost] = useState({});
  const params = useParams();

  const url = `https://fidofidoline-default-rtdb.europe-west1.firebasedatabase.app/produkter/${params.postId}.json`;

  useEffect(() => {
    async function getPost() {
      const response = await fetch(url);
      const data = await response.json();
      setPost(data);
    }
    getPost();
  }, [url]);

  async function savePost(postToUpdate) {
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(postToUpdate)
    });
    const data = await response.json();
    console.log(data);
    navigate("/admin");
  }

  async function deletePost() {
    const bekraeftSletning = window.confirm(`Vil du slette produktet "${post.produktnavn}"?`)
   
    if (bekraeftSletning) {
        const url = "https://fidofidoline-default-rtdb.europe-west1.firebasedatabase.app/produkter.json";
        const firstResponse = await fetch(url);
        const firstData = await firstResponse.json();

        firstData.splice(params.postId, 1); // Delete element from array
       
        const response = await fetch(url, {
            method: "PUT", // Overwrites database
            body: JSON.stringify(firstData) // Rewrite database
        });

        const data = await response.json();
        console.log(data);
        navigate("/admin");
      }

  }

  return (
    <section className="page">
      <h1>Opdatér produkt</h1>
      <PostForm post={post} savePost={savePost} />
      <button className="btn-delete" onClick={deletePost}>
        Slet produkt
      </button>
    </section>
  );

}