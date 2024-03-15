const createNewBoard = () => {
  return Array.from({ length: 10 }, () => ({
    guess: Array(4).fill(''),
    feedback: { exactMatch: 0, partialMatch: 0 },
  }));
};
export default createNewBoard;
