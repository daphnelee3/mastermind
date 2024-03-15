import { Feedback } from './types';

const calculateFeedback = (guess: string[], secretCode: string[]): Feedback => {
  let exactMatch = 0;
  let partialMatch = 0;
  const secretCopy = [...secretCode];

  for (let i = 0; i < secretCode.length; i++) {
    if (guess[i] === secretCode[i]) {
      exactMatch++;
      secretCopy[i] = '';
    }
  }

  for (let i = 0; i < guess.length; i++) {
    const color = guess[i];
    const foundIndex = secretCopy.indexOf(color);
    if (foundIndex !== -1 && secretCopy[foundIndex] !== '') {
      partialMatch++;
      secretCopy[foundIndex] = '';
    }
  }

  return { exactMatch, partialMatch };
};

export default calculateFeedback;
