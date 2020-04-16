import React, { Component } from 'react'

import styles from './Home.module.css'

import CardList from '../../components/CardList/CardList'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      cardList: [],
      loadingState: true,
    }
  }

  componentDidMount() {
    fetch('https://api.pokemontcg.io/v1/cards')
      .then((res) => res.json())
      .then((cards) => {
        console.log(cards)
        this.setState((state) => {
          return {
            cardList: cards.cards.slice(0, 20),
            loadingState: !state.loadingState,
          }
        })
      })
  }

  render() {
    const { cardList, loadingState } = this.state

    return (
      <div>
        <img src={require('../../assets/pokemon-rolodex.png')} alt="logo" />
        {loadingState ? (
          <h2 className={styles.loading}>Catching your Pokemons</h2>
        ) : (
          <CardList pokemons={cardList} />
        )}
      </div>
    )
  }
}

export default Home
