import {Navigate} from "react-router-dom"

export default function ProduktAdminkort({ post }) {

    function opdaterKlik() {
        Navigate (`posts/${post.id}`);
    }

    return (
        <div className="kort adminkort" onClick={opdaterKlik}>
           <div className="tekst">
            <h3>{post.produktnavn}</h3>
            <p>{post.beskrivelse}</p>
            <hr/>
            <p>Varighed: {post.varighed} min.</p>
            <p>Pris kr. {post.pris} min.</p>
            </div> 
        </div>
    )
}