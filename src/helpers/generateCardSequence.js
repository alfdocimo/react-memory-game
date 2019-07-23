export default sequenceLength => {
  const randomSequenceArray = [];
  for (let index = 0; index < sequenceLength; index++) {
    randomSequenceArray.push(Math.floor(Math.random() * 9));
  }
  return randomSequenceArray;
};
