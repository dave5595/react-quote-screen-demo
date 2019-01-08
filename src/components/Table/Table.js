import React, { PureComponent } from 'react';

export default class Table extends PureComponent{

  render(){
    return(
      <table>
        { this.props.children }
      </table>
    );
  }
}