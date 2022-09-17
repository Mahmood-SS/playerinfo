import React from "react"
import Card from "./components/Card"
import playerpedia from "./components/playerpedia"
import "./App.css"
const App = () => {
  return (
    <>
      <h1 className="title">Player Pedia</h1>
      <div className="row">
        {playerpedia.map((playerpedia,key) => (
          <Card
            key={`${key}`}
            img={playerpedia.img}
            name={playerpedia.name}
            description={playerpedia.description}
          />
        ))}
      </div>
      <h3 className="footer">Mahmood@WebDevloper {new Date().getFullYear()}</h3>
    </>
  )
}

export default App
// Siu