import ImgCore from "../assets/react-core-concepts.png"
import "./Header.css"



export default function Header(){
  
    const reactDescriptions= ['Crucial', 'Core','Fundamental','Important'];
    function getrandomInt(max){
        return(
        Math.floor(Math.random() * (max+1)));
      }
    const desc = reactDescriptions[getrandomInt(3)];
      return (<header>
        <img src={ImgCore} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {desc} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>);
    }
    