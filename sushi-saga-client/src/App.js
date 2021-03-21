import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import SushiWallet from './components/SushiWallet'

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushi: [],
    currentPosition:0,
    wallet:50,
    consumedSushi:[]
  }

  componentDidMount(){
    fetch(API).then(res => res.json()).then(sushiArray => this.setState({sushi:sushiArray}))
  }

  getFourSushi = () => {
    const startPosition = this.state.currentPosition
    return this.state.sushi.slice(startPosition, startPosition+4)
  }

  moreSushi = () => {
    const startPosition = this.state.currentPosition
    let newPosition  = startPosition + 4
    if(newPosition >= this.state.sushi.length){
      newPosition = 0
    }
    this.setState({currentPosition: newPosition})
    console.log(newPosition)
  }

  eatSushi = (eatId) => {
    console.log(eatId)
    let selectedSushi = this.state.sushi.find(({id}) => id === eatId )
    let remainingMoney = this.state.wallet - selectedSushi.price
    // add $ check logic
    if(remainingMoney>-1){
      selectedSushi.img_url = ""
      let updatedSushiArray = this.state.sushi.map(sushi => sushi.id === selectedSushi.id? selectedSushi : sushi )
      this.setState({
        sushi: updatedSushiArray,
        wallet: remainingMoney,
        consumedSushi: [...this.state.consumedSushi, selectedSushi.id]
      })
    }
  }

  updateWallet = (moMoney) => {
    console.log("updateWallet")
    let currentAmount = parseInt(this.state.wallet)
    let newAmount = currentAmount + parseInt(moMoney)
    this.setState({wallet: newAmount})
  }

  render() {
    return (
      <div className="app">
        <SushiContainer currentSushi={this.getFourSushi()} moreSushi={this.moreSushi} eatSushi = {this.eatSushi}/>
        <Table wallet = {this.state.wallet} countOfPlates = {this.state.consumedSushi}/>
        <SushiWallet updateWallet={this.updateWallet}/>
      </div>
    );
  }
}

export default App;