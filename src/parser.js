
class State {
  
  constructor(
    name,
    transitionRules // rules for go-to
  ) {
    this.name = name;
    this.transitionRules = transitionRules;
  }

}

/**
 * Abstract class.
 */
class TransitionRule {

  constructor(
    ruleType,
    trigger,
    transitionState,
    terminates = false
  ) {
    this.ruleType = ruleType;
    this.trigger = trigger;
    this.transitionState = transitionState;
    this.terminates = terminates;
  }

}

class OnTransitionRule extends TransitionRule {

  constructor(
    trigger,
    transitionState,
    terminates = false
  ) {
    super('on', trigger, transitionState, terminates);
  }

}

class AfterTransitionRule extends TransitionRule {

  constructor(
    trigger,
    transitionState,
    terminates = false
  ) {
    super('after', trigger, transitionState, terminates);
  }

}


// export function defineState(state) {

// }

export function runJSONParser(jsonStr) {
  let stateStack = [];

  for (let c of jsonStr) {
    console.log(c);
  }
}
