import React from 'react'

import styles from './CardList.module.css'

import Card from '../Card/Card'

const CardList = ({ pokemons }) => {
  return (
    <div className={styles.cardContainer}>
      {pokemons.map((card) => (
        <Card card={card} key={card.id} />
      ))}
    </div>
  )
}

export default CardList
