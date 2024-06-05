import Header from "./components/Header.jsx"
import {CORE_CONCEPTS} from "./data.js"
import Core_concepts from "./components/core-concepts.jsx"
import TabButton from "./components/TabButton.jsx";

function handleClick(selectedButton){
  console.log(selectedButton);
}


function App() {
  return (
    <div>
     <Header/>
      <main>
        <section  id ="core-concepts" >
          <h2>Core-Concepts </h2>
          <ul>
          <Core_concepts image= {CORE_CONCEPTS[0].image} title= {CORE_CONCEPTS[0].title} description= {CORE_CONCEPTS[0].description} />
          <Core_concepts image= {CORE_CONCEPTS[1].image} title= {CORE_CONCEPTS[1].title} description= {CORE_CONCEPTS[1].description} />
          <Core_concepts image= {CORE_CONCEPTS[2].image} title= {CORE_CONCEPTS[2].title} description= {CORE_CONCEPTS[2].description} />
          <Core_concepts {...CORE_CONCEPTS[3]} />
          </ul>

        </section>

        <section id= "examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect= {()=>handleClick('Components')}>Components</TabButton>
            <TabButton onSelect= {()=>handleClick('Props')}>Props</TabButton>
            <TabButton onSelect= {()=>handleClick('States')}>States</TabButton>
            <TabButton onSelect= {()=>handleClick('JSX')}>JSX</TabButton>
          </menu>
          Dynamic Content
        </section>
      </main>
    </div>
  );
}

export default App;
