const mapDataToCards = data => {
  const { picture, name, job, gender } = data;
  return { picture, name, job, gender };
};

export default mapDataToCards;
