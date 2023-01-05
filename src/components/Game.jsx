import React, { Component } from 'react'
import '../components/Game.css';

class Game extends Component {
    constructor(props){
        super(props);
        this.state={face:null,computer:0,end:false }
    }
    
  render() {
    return (
      <>
      <img src="" alt="" />
      <h1>Jeu Dé</h1>
      <p>Face : </p>
      <p>Nombre d'essais : </p>
      <button onClick="">Jouer</button>
      </>
    )
  }
}



export default Game;