
// import componentsImg from './assets/components.png';
import Header from './components/Header/Header';
import CoreConcepts from './components/CoreConcepts';
import Examples from './components/Examples';

// function CoreConcept(props){
//   return(
//     <li>
//       <img src={props.image} alt={props.title}/>
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   )
// }

function App() {

  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
