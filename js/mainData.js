const mainData = () => {
  fetch('./db.json')
    .then(response => response.json())
    .then(data => console.log(data.anime));
};

mainData();