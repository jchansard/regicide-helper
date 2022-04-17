import React from 'react';
import RHDropdown from './rh-dropdown.js';

export default class RegicideHelper extends React.Component {
  state = {
    health: 20,
    attack: 10
  }

  updateHealth(event) {
    this.setState({health: parseInt(event.target.value)});
  }

  updateAttack(event) {
    this.setState({attack: parseInt(event.target.value)});
  }


  render() {
    return (
      <form className="regicide-helper">
        <RHDropdown label="Health" value={this.state.health} maxValue={40} onChange={this.updateHealth.bind(this)}/>
        <RHDropdown label="Attack" value={this.state.attack} maxValue={20} onChange={this.updateAttack.bind(this)}/>
      </form>
    )
  }
}
