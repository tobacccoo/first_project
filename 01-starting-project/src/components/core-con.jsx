import {CORE_CONCEPTS} from "../data.js"
import Core_concepts from "./core-concepts.jsx"
import Section from "./Section.jsx";

export default function Corecon(){

    return(
        <Section  id ="core-concepts" >
          
          <ul>
            {CORE_CONCEPTS.map((item)=>  <Core_concepts {...item} /> )}
          </ul>

        </Section>

    );
}