export function normalize (str = '') {
  return typeof str !== 'string' 
    || (str = str.trim().replace(/\s\s+/g, ' ')) === '' ? '' : str;
}

export function extractDeckProperties (deck) {
  let title = normalize(deck.title);
  title = title.length > 0 ? title : 'No Title';
  let timestamp = deck.timestamp;
  timestamp = timestamp ? timestamp : Date.now();
  let questions = [];
  let questionsTmp = deck.questions;
  questionsTmp = questionsTmp && questionsTmp.length > 0 ? questionsTmp : [];
  questionsTmp.forEach((questionSet) => {
    const question = normalize(questionSet.question);
    const answer = normalize(questionSet.answer);
    if (question.length > 0 && answer.length > 0) {
      questions.push({ question, answer });
    }
  });
  return {
    title,
    timestamp,
    questions
  };
}

