import Container from './components/container/container';
import Drawer from './components/drawer/Drawer';

const itens = [
  {title:"Texto personalizado 1", color: "#ff5200"}, 
  {title:"Texto personalizado 2", color: "#f96888"}, 
  {title:"Texto personalizado 3", color: "#af7800"},
  {title:"Texto personalizado 4", color: "#ae9922"},
  {title:"Texto personalizado 5", color: "#ffffff"},
  {title:"Texto personalizado 6", color: "#00fdf9"},
  {title:"Texto personalizado 7", color: "#9099f9"},
  {title:"Texto personalizado 8", color: "#0099f9"},
  {title:"Texto personalizado 9", color: "#0001f9"},
  {title:"Texto personalizado 10", color: "#ee01ee"},
]

function App() {
  return (
    <>
      <h1 style={{width: "100%", textAlign: "center"}}>Desafio DevQuest - Quest React Basico</h1>
      <h3 style={{width: "100%", textAlign: "center", marginBottom: "15px"}}>Componente que colore e transforma um texto para maiúsculo (uppercase) utilizando JS.</h3>
      <Container>
        {itens.map((item, index) => (
          <Drawer 
          key={index}
          title={item.title} 
          color={item.color} 
          />
        ))}
      </Container>
    </>
  );
}



export default App;
