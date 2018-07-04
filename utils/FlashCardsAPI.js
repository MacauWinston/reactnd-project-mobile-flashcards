import { AsyncStorage } from 'react-native';

export const DECKJSON_STORAGE_KEY = 'FlashCards:deckjson';

export function fetchDeckJson () {
  return AsyncStorage.getItem(DECKJSON_STORAGE_KEY)
    .then(results => results === null
      ? {}
      : JSON.parse(results)
    );
}

export function updateDeckJson (json) {
  return AsyncStorage.setItem(DECKJSON_STORAGE_KEY, JSON.stringify(json))
    .then(fetchDeckJson);
}

export function createDeck (title) {
  return fetchDeckJson()
    .then(json => {
        const timestamp = Date.now();
        json[`${title}@${timestamp}`] = {
          title,
          timestamp,
          questions: []
        };
        return updateDeckJson(json);
      }
    ); 
}

export function createCard (titleAug, { question, answer }) {
  return fetchDeckJson()
    .then(json => {
      if (!(titleAug in json)) {
        return json;
      }
      json[titleAug].questions.push({ question, answer });
      return updateDeckJson(json);
    });
}