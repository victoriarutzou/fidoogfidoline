import hundebillede from "../images/hundebillede.jpg";
import haircut from "../images/haircut.jpeg";
import hairdry from "../images/hairdry.jpeg";
import negleklipning from "../images/negleklipning.jpeg";
import cutedog from "../images/cutedog.jpeg";
import Produktkort from "../components/Produktkort";
import { useEffect, useState } from "react";


export default function ForSide() {
     // "posts" kommer til at indeholde listen af hundeplejeservices 
    const [posts, setPosts] = useState([]);
     // "ispost" kan være true hvis der er services
    //False, hvis der ikke er nogle services
    const [isPosts, setIsPosts] = useState(true);

     //Data hentes fra firebase og gemmes i "post" variabel
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


        return (
        <main>
        <div className="forsidebillede">
            <img src={hundebillede} alt="billede med hund og kat" className="herobillede"/>
        </div>

        {isPosts ? (
            <div className="kortraekke">
            {posts.map((post) =>(
                <Produktkort key={post.id} post={post}/>
            ))}
            </div>
        ) : (
            <p>Ingen produkter at vise</p>
        )}
        

        <section className="services">
            <div className="box pink">
                <h2>Negleklipning</h2>
                <img src={negleklipning} alt="billede med hund og kat" className="billede"/>
                <h1>150 kr.</h1>
                
            </div>

            <div className="box yellow">
                <h2>Føntørring</h2>
                <img src={hairdry} alt="billede med hund og kat" className="billede"/>
                <h1>50 kr.</h1>

            </div>

            <div className="box orange">
                <h2>Klipning</h2>
                <img src={haircut} alt="billede med hund og kat" className="billede"/>
                <h1>500 kr.</h1>
            </div>
        </section>

        <section className="cutestdogintown">
            <div className="cutetext">
            <h1>How to be the Cutest Dog in Town</h1>
            <p>Det første step er regelmæssigt at tage din hund til frisøren.</p>
            </div>

            <img src={cutedog} alt="billede med hund og kat" className="cutedog"/>
        
        </section>
        
    </main>
    
        )
        }
        




