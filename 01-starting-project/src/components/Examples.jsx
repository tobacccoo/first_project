import TabButton from "./TabButton.jsx";
import { useState } from "react";
import {EXAMPLES} from "./data.js"


export default function Examples(){

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
    );
}