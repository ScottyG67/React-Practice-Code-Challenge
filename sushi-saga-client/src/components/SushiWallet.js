import React, {Component} from 'react'

export default class SushiWallet extends Component{
    state = {
        formAmount: 0
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.updateWallet(e.target.number.value)
    }

    render (){
        return(
            <div className= 'wallet'>
                <h3>Add Money to your wallet</h3>
            <form onSubmit={this.handleSubmit}>
              <input
                type="number"
                name="number"
                onChange={event => this.setState({formAmount: event.target.value})}
              />
              <button type="submit" >Show Me The Money</button>
            </form>
          </div>
        )
    }
}