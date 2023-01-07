import React, { Component } from 'react'
import '../components/Game.css';

class Game extends Component {
    constructor(props){
        super(props);
        this.state={face:null,computer:0,end:false }
    }
   
    Jouer = () =>{
        
        const facevalue= Math.floor(Math.random()*6+1)
        this.setState({face:facevalue,computer:this.state.computer+1})
        if (facevalue===8){
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
          <button onClick={this.Jouer}>Jouer</button>
        </>
      }
      </>
    )
  }
}



export default Game;