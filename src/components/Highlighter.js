import React, { Component } from 'react';

export default class Highlighter extends Component{
  state = {
    priceColor: 'black'
  };

  componentDidUpdate(prevProps){
    if (prevProps.children < this.props.children){
        this.setState({ priceColor: 'green' });
        setTimeout(()=> this.setState({priceColor: 'black'}), 1000)
    }else if(prevProps.children > this.props.children){
      this.setState({ priceColor: 'red' });
      setTimeout(()=> this.setState({priceColor: 'black'}), 1000)
    }
  }

  render(){
    return(
      <div style={{ color: this.state.priceColor }}>
        {this.props.children}
      </div>
    )
  }
}