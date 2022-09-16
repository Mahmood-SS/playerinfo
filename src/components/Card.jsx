import React from "react"
import "./Card.css"
const Card = ({ name, description, img }) => {
  return (
    <div className="card">
      <img src={img} alt="not display" />
      <h1 className="name_player">{name}</h1>
      <p>{description}</p>
    </div>
  )
}

export default Card
