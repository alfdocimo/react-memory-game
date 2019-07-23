const mapDataToCards = data => {
  const { picture, name, job, id } = data;
  return { picture, name, job, id };
};

export default mapDataToCards;
