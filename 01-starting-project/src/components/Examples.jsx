import TabButton from "./TabButton.jsx";
import { useState } from "react";
import {EXAMPLES} from "../data.js"
import Section from "./Section.jsx";
import Tabs from "../Tabs.jsx";

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
        <Section title= "Examples" id= "examples">
          <Tabs ButtContainer="menu" butt=
          { <> <menu>
             <TabButton isSelected= {Button=== 'components'} onClick= {()=>handleClick('components')}>Components</TabButton>
            <TabButton isSelected= {Button=== 'jsx'} onClick= {()=>handleClick('jsx')}>Props</TabButton>
            <TabButton isSelected= {Button=== 'props'} onClick= {()=>handleClick('props')}>States</TabButton>
            <TabButton isSelected= {Button=== 'state'} onClick= {()=>handleClick('state')}>JSX</TabButton>
             </menu>
             </> }>
            {tabContent}
            </Tabs>
          
        </Section>
    );
}