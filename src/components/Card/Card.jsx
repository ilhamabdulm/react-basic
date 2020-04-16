import React from 'react'

import styles from './Card.module.css'

const Card = ({ card }) => {
  return (
    <div className={styles.card}>
      <h2>{card.name}</h2>
      <img src={card.imageUrl} alt="pokemon" />
      <h3>Type: {card.types ? card.types.map((type) => type) : null}</h3>
    </div>
  )
}

export default Card
