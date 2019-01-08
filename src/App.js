import React, { Component } from 'react';
import './App.css';
import QuoteScreen from "./components/QuoteScreen";
import { DataService } from "./services/dataService";

class App extends Component {
  constructor(props){
    super(props);

    let DataSourceService = new DataService();

    this.state = {
      columnDefs: [
        {headerName: "Symbol", field: "symbol"},
        {headerName: "Buy", field: "buy"},
        {headerName: "Sell", field: "sell"}
      ],
      rowData: DataSourceService.getInitialSubscribedStocks()
    };
  }


  setRowValue = (newData) => {
    const { symbol, buy, sell} = newData;
    if (!symbol || !buy || !sell) return;

    console.log(newData);

    const objIndex = this.state.rowData.findIndex(row => row.symbol === symbol);
    const updatedStock = {
      ...this.state.rowData[objIndex],
      buy,
      sell
    };

    const updatedRowData = [
      ...this.state.rowData.slice(0, objIndex),
      updatedStock,
      ...this.state.rowData.slice(objIndex + 1)
    ];
    this.setState({
      rowData: updatedRowData
    })
  };

  componentDidMount(){
    window.addEventListener("message", (e) => {
      this.setRowValue(e.data)
    }, false)
  }

  componentWillUnmount(){
    window.removeEventListener("message");
  }

  render() {
    const { columnDefs, rowData } = this.state;
    return (
      <div>
        <QuoteScreen
          columnDefs={columnDefs}
          rowData={rowData}
        />
      </div>
    );
  }
}

export default App;
