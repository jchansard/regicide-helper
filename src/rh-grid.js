import React from 'react';

export default class RHTracker extends React.Component {

  constructor() {
    super();
    this.suits = ["♠️","♣️","♥️","♦️"];
    this.royalty = ["Jack","Queen","King"];
  }

  __getHeaderRows() {
    let labels = []
    labels.push(<th key={'blank'} />);
    for (let i=0; i < this.suits.length; i++) {
      labels.push(<th key={i}>{this.suits[i]}</th>);
    }
    return (
      <tr>
        {labels}
      </tr>)
  }

  __getCheckboxRows() {
    let rows = [];
    for (let i=0; i < this.royalty.length; i++) {
      rows.push(this.__getCheckboxRow(i))
    }
    return rows;
  }

  __getCheckboxRow(index) {
    let row = [];
    row.push(<td>{this.royalty[index]}</td>);
    for (let i=0; i < this.suits.length; i++) {
      row.push(<td key={index + " " + i}><input type="checkbox" /></td>)
    }
    return (<tr>{row}</tr>)
  }

  __resetAll() {
    // thank you stackoverflow
    var clist = document.getElementsByTagName("input");
    for (var i = 0; i < clist.length; ++i) { clist[i].checked = false; }
  }

  render() {
    return (
      <div>
        <table>
          <tbody>
            {this.__getHeaderRows()}
            {this.__getCheckboxRows()}
          </tbody>
        </table>
        <button onClick={this.__resetAll}>Reset All</button>
      </div>
    )
  }
}
