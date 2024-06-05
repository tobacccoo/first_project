import Header from "./components/Header.jsx"
import {CORE_CONCEPTS} from "./data.js"
import Core_concepts from "./components/core-concepts.jsx"
import TabButton from "./components/TabButton.jsx";
import { useState } from "react";
import {EXAMPLES} from "./data.js"


function App() {

  const [Button, setButton ]= useState();

  function handleClick(selectedButton){

    setButton(selectedButton);
    
  }

  let tabContent= <div>Please click a topic</div>;

  if(Button){
    tabContent= (<div id="tab-content"> 
    <h3>{EXAMPLES[Button].title}</h3>
    <p>{EXAMPLES[Button].description}</p>
    <pre>
    <code>{EXAMPLES[Button].code}</code>
    </pre>
  </div>);
  }
  return (
    <div>
     <Header/>
      <main>
        <section  id ="core-concepts" >
          <h2>Core-Concepts </h2>
          <ul>
            {CORE_CONCEPTS.map((item)=>  <Core_concepts {...item} /> )}
          </ul>

        </section>

        <section id= "examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected= {Button=== 'components'} onSelect= {()=>handleClick('components')}>Components</TabButton>
            <TabButton isSelected= {Button=== 'jsx'} onSelect= {()=>handleClick('jsx')}>Props</TabButton>
            <TabButton isSelected= {Button=== 'props'} onSelect= {()=>handleClick('props')}>States</TabButton>
            <TabButton isSelected= {Button=== 'state'} onSelect= {()=>handleClick('state')}>JSX</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
