import React, { Component } from 'react'
import '../components/Game.css';
import De from '../assets/de.jpg' 

class Game extends Component {
    constructor(props){
        super(props);
        this.state={face:null,computer:0,end:false }
    }
    
  render() {
    return (
      <>
      <img src={De} alt="" />
      <h1>Jeu Dé</h1>
      <p>Face : {this.state.face}</p>
      <p>Nombre d'essais : {this.state.computer}</p>
      <button onClick="">Jouer</button>
      </>
    )
  }
}



export default Game;