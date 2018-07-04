import {
  fetchDeckJson as fetchDeckJsonN,
  createDeck as createDeckN,
  createCard as createCardN
} from '../utils/FlashCardsAPI';

export const LOAD_DECKJSON = 'LOAD_DECKJSON';

export function loadDeckJson (deckJson) {
  return {
    type: LOAD_DECKJSON,
    deckJson
  };
}

export function loadDeckJsonAPI () {
  return (dispatch, getState) => {
    fetchDeckJsonN()
      .then(deckJson => {
        dispatch(loadDeckJson(deckJson));
      });
  };
}

export function createDeckAPI (title) {
  return (dispatch, getState) => {
    createDeckN(title)
      .then(deckJson => {
        dispatch(loadDeckJson(deckJson));
      });
  };
}

export function createCardAPI (titleAug, { question, answer }) {
  return (dispatch, getState) => {
    createCardN(titleAug, { question, answer })
      .then(deckJson => {
        dispatch(loadDeckJson(deckJson));
      });
  };
}