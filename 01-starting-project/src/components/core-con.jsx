import {CORE_CONCEPTS} from "./data.js"
import Core_concepts from "./components/core-concepts.jsx"


export default function corecon(){

    return(
        <section  id ="core-concepts" >
          <h2>Core-Concepts </h2>
          <ul>
            {CORE_CONCEPTS.map((item)=>  <Core_concepts {...item} /> )}
          </ul>

        </section>

    );
}