import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Produktkort from "../../components/admin/ProduktAdminkort";
export default function AdminSide() {
const [posts, setPosts] = useState([]);
const [isPosts, setIsPosts] = useState(true); // isPosts can be true or false
const navigate = useNavigate();
useEffect(() => {
async function getPosts() {
const url =

"https://fidofidoline-default-rtdb.europe-west1.firebasedatabase.app/produkter.json";
const response = await fetch(url);
const data = await response.json();
if (data !== null) {
const postsArray = Object.keys(data).map((key) => ({
id: key,
...data[key],
}));
setPosts(postsArray);
} else {
setIsPosts(false);
}
}
getPosts();
}, []);
function opretklik() {
navigate("/create");
}
function oversigtklik() {
navigate("/bestillingsoversigt");
}
return (
<main>
<h1>
Administration af produkter
<button type="button" onClick={opretklik}>+ Opret produkt</button>
</h1>
{isPosts ? (
<div className="kortraekke">
{posts.map((post) => (
<Produktkort key={post.id} post={post} />
))}
</div>
) : (
<p>Ingenting at vise</p>
)}
</main>
);
}