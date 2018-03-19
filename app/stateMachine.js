class StateMachine {
  constructor(initialState, transitions) {
    this.state = initialState;
    this.transitions = transitions;
  }

  next(transition) {
    var nextState = this.transitions[this.state][transition];
    if (!nextState) throw new Error(`invalid: ${this.state} -> ${transition}`);
    this.state = nextState;
  }
}

module.exports = StateMachine;
