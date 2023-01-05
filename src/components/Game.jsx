import React, { Component, useState } from 'react'
import '../components/Game.css';
// import De from '../assets/de.jpg' 
// import face1 from '../assets/face1.png' 
// import face2 from '../assets/face2.png' 
// import face3 from '../assets/face3.png' 
// import face4 from '../assets/face4.png' 
// import face5 from '../assets/face5.png' 
// import face6 from '../assets/face6.png' 

class Game extends Component {
    constructor(props){
        super(props);
        this.state={face:null,computer:0,end:false }
    }
    Jouer = () =>{
        
        const facevalue= Math.floor(Math.random()*6+1)
        this.setState({face:facevalue,computer:this.state.computer+1})
        if (facevalue===6){
            this.setState({end:true})
        }
    }

    initial=()=>{
        this.setState({face:null,computer:0,end:false})
    }
   

  render() {
    return (
      <>
      <img src={this.state.face==null?`assets/de.jpg`:`assets/face${this.state.face}.png`} alt="" />
      <h1>Jeu Dé</h1>
      <p>Face : {this.state.face}</p>
      <p>Nombre d'essais : {this.state.computer}</p>
      
      {
        this.state.end
        ?<>
        <p>Bravo vous avez trouvez la face cache</p>
        <button onClick={this.initial}>Initialiser</button>
        </>
        :<>
          <p><input type="nombre" name="Nom" placeholder='Une nombre entre 1 et 6' id='nombre'   /></p>
          <button onClick={this.Jouer}>Jouer</button>
        </>
      }
      </>
    )
  }
}



export default Game;