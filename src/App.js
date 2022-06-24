// import logo from './logo.svg';
import './App.css';
import  Nabvar from './components/NavBar';
// import  Body from './components/Body';
import  Welcome from './components/Welcome';
// import  Card from './components/Card';
import ItemListContainer from './components/ItemListContainer';
function App() {
  if (true){
  return (
    <div className="App">

      <Nabvar />   
      <Welcome name = ''/>                     
      {/* <Body />            */}
      {/* <Body>
        <Card product ='Ejemplo Children' price="$14" img=''/>        
      </Body>   */}
      <section   className="cuerpo">
        <ItemListContainer />
      </section>
    </div>
  ); 
  }  else{
    return (<p>falso</p>);
  }
}

export default App;
