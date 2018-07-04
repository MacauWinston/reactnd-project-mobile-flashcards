import { LOAD_DECKJSON } from '../actions';
import update from 'immutability-helper';

const initialDecksState = {
  deckJson: {}
};

function decksState (state=initialDecksState, action) {
  const { deckJson } = action;
  switch (action.type) {
    case LOAD_DECKJSON:
      return deckJson
        ? update(state, { deckJson: { $set: deckJson }})
        : state;
    
    default:
      return state;
  }
}

export default decksState;