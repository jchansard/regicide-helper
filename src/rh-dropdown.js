import React from 'react';

export default class RHDropdown extends React.Component {

  __getNumbers(min, max) {
    let numbers = [];
    for (let i=min; i<max+1; i++) {
      numbers.push(i);
    }
    return numbers;
  }

  render() {
    return (
        <label>{this.props.label}
          <select value={this.props.value} onChange={this.props.onChange}>
            {this.__getNumbers(0, this.props.maxValue).map((number, index) => (
              <option key = {index}>{number}</option>
            ))}
          </select>
        </label>
    )
  }
}
