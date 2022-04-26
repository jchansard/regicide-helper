import React from 'react';
import RHDropdown from './rh-dropdown.js';
import RHTracker from './rh-grid.js';

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

  setVals(healthVal, attackVal) {
    this.setState({health: healthVal, attack: attackVal});
  }

  setJack() {
    this.setVals(20,10);
  }


  render() {
    return (
      <div>
         <form className="regicide-helper">
           <RHDropdown label="Health" value={this.state.health} maxValue={40} onChange={this.updateHealth.bind(this)}/>
           <RHDropdown label="Attack" value={this.state.attack} maxValue={20} onChange={this.updateAttack.bind(this)}/>
         </form>
         <div>
           <button onClick={() => this.setVals(20,10)}>
             Jack
           </button>
           <button onClick={() => this.setVals(30,15)}>Queen</button>
           <button onClick={() => this.setVals(40,20)}>King</button>
         </div>
         <div>
           <RHTracker />
         </div>
      </div>
    )
  }
}
