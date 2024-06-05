

//destructuring_syntax
export default function Coreconcepts({image, title, description}){
    return (
      <li>
        <img src= {image} alt= {title}></img>
      <h3>{title}</h3>
      <p>{description}</p>
      </li>
    );
  }
  // function Coreconcepts(props){
  //   return (
  //     <li>
  //       <img src= {props.img} alt= {props.title}></img>
  //     <h3>{props.title}</h3>
  //     <p>{props.description}</p>
  //     </li>
  //   );
  // }
  