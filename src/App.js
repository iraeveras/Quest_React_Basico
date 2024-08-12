import { useState } from 'react';
import Container from './components/container/container';
import Drawer from './components/drawer/Drawer';

function App() {
  const [inputValue, setInputValue] = useState("")
  const [color, setColor] = useState("")
  const [data, setData] = useState([])

  const value = {
    title: inputValue,
    color: color,
  }

  const handleCadastrar = () => {
    if (inputValue) {
      setInputValue(inputValue);
      setColor(color)

      setData([...data, value])
      setInputValue("")
      setColor("")
    }
    else {
      alert("O campo não pode ser vazio.")
    }

  }

  return (
    <div className="container">
      <div style={{ width: "100%" }}>
        <h1 style={{ width: "100%", textAlign: "center", color: "#fff" }}>Desafio DevQuest - Quest React Basico</h1>
        <h3 style={{ width: "100%", textAlign: "center", marginBottom: "15px", color: "#fff" }}>Componente que colore e transforma um texto para maiúsculo (uppercase) utilizando JS.</h3>
      </div>

      <div style={{ padding: "25px 0", border: "0.5px solid #eaeaea25", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "10px" }}>

        <div
          style={{ display: "grid", gridTemplateColumns: "1fr", placeSelf: "center", width: "50%", padding: "3px", borderRadius: "6px", gap: "10px" }}
        >
          <div
            style={{ width: "100%" }}
          >
            <input
              style={{ width: "100%", height: "100%", border: "none", outline: "none", borderRadius: "6px", padding: "10px 5px" }}
              type="text"
              placeholder="Adicione um título"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>


        </div>

        <div style={{ display: "flex", width: "50%", alignItems: "center", justifyContent: "space-between" }}>
          <div
            style={{ display: "flex", alignItems: "center", gap: "2px", flexDirection: "row-reverse" }}
          >
            <label htmlFor='color' style={{ color: "#fff" }}>Cor do título</label>
            <input
              style={{ width: "30px", height: "30px", border: "none", background: "transparent" }}
              id='color'
              type='color'
              value={color === "" ? "#ff0000" : color}
              onChange={(e) => setColor(e.target.value)}
            />
          </div>
          <button
            type='button'
            onClick={handleCadastrar}
            style={{ width: "150px", padding: "10px", border: "none", outline: "none", cursor: "pointer", borderRadius: "6px" }}
          >Cadastrar</button>
        </div>

      </div>

      <Container>
        {data.map((item, index) => (

          <Drawer
            key={index}
            title={item.title}
            color={item.color}
          />
        ))}
      </Container>
    </div>
  );
}

export default App;
