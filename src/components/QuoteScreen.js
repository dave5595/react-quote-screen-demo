import React, { PureComponent } from 'react';
import Table from './Table/Table';
import TableHeader from './Table/TableHeader';
import TableBody from './Table/TableBody';


export default class QuoteScreen extends PureComponent{

  render(){
    const { columnDefs } = this.props;
    return(
      <Table>
        <TableHeader columnDefs={columnDefs} />
        <TableBody {...this.props} />
      </Table>
    )
  }
};