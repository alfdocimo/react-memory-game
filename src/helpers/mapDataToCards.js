const mapDataToCards = data => {
  const { picture, name, id } = data;
  return { picture, name, id };
};

export default mapDataToCards;
