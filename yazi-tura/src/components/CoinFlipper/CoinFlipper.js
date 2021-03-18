import React, { Component } from "react";
import Coin from "../Coin/Coin";
import "./CoinFlipper.css";

const getRandomAtıs=(atıs)=>{
const randomIndex=Math.floor(Math.random()*atıs.length);
const randomItem=atıs[randomIndex];
return randomItem;
}
class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    // State üzerinde paranın başlangıçtaki durumunu veriyoruz, başlangıçta "tura" olsun.
    // Daha sonra şu anda paranın dönüp dönmeme durumunu da veriyoruz, başlangıçta para atılmamış olduğundan "false" olarak verdik.
    this.state = {value: 0};
    }

  handleClick = () => {
   
    this.setState({value: this.state.value+1});
   
    setTimeout(() => this.setState({ flipping: false }), 1000);
  };


  render() {
    return (
      <div className="CoinFlipper">
        <h1>Yazı mı Tura mı?</h1>
        <Coin side={this.state.side} flipping={this.state.flipping} />
        <p>
        Toplam
        </p><div>{this.state.value}</div>
        <button onClick={this.handleClick}>
        Click</button>
      </div>
    );
  }
}

export default CoinFlipper;
