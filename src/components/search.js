document.querySelector('form').addEventListener('submit', onSubmit);

function onSubmit(e) {
  console.log('Submitting Form');
  e.preventDefault();
  const formValue = document.getElementById('fieldOne').value;
  weatherService
    .getByZip(formValue)
    .then(response => {
      console.log(response.data);
      getWeatherData(response.data.days);
    })
    .catch(error => console.error({ error: error }));
}

function getWeatherData(weatherData) {
  const template = document.querySelector('.weather-template');
  const cardContainer = document.querySelector('.card-container');

  if (Array.isArray(weatherData)) {
    for (let i = 0; i < weatherData.length; i++) {
      const data = weatherData[i];
      const cardClone = template.content.cloneNode(true);
      cardClone.querySelector('.weather-date').textContent = formatDate(data.datetime);
      cardClone.querySelector('.weather-temperature').textContent = `Temperature: ${data.temp}°F `;
      cardClone.querySelector('.weather-feelslike').textContent = `Feels Like: ${data.feelslike}°F`;
      cardClone.querySelector('.weather-precipitation').textContent = `Precipitation: ${data.precip}%`;
      cardClone.querySelector('.weather-cloud-coverage').textContent = `Cloud Coverage: ${data.cloudcover}%`;
      cardClone.querySelector('.weather-visibility').textContent = `Visibility: ${data.visibility}mi`;
      cardClone.querySelector('.card').setAttribute('data-json', JSON.stringify(data)); // state management
      cardClone.querySelector('.card').setAttribute('data-index', i);
      cardClone.querySelector('.view-more-button').setAttribute('data-index', i);
      cardContainer.appendChild(cardClone);
    }
    const viewMoreButtons = document.querySelectorAll('.view-more-button');
    viewMoreButtons.forEach(button => button.addEventListener('click', viewMoreData));
  } else {
    console.error('Invalid weather data.');
  }
}

function viewMoreData(event) {
  const index = event.target.getAttribute('data-index');
  const card = document.querySelector(`[data-index="${index}"]`);
  const jsonData = JSON.parse(card.getAttribute('data-json'));
  const modalContent = document.querySelector('.modal-content');
  modalContent.innerHTML = '';

  const createDataElement = (label, value) => {
    const div = document.createElement('div');
    div.textContent = `${label}: ${value}`;
    div.setAttribute('class', label.toLowerCase());
    return div;
  };
  modalContent.appendChild(createDataElement('Date', formatDate(jsonData.datetime)));
  modalContent.appendChild(createDataElement('Conditions', jsonData.conditions));
  modalContent.appendChild(createDataElement('Temperature', `${jsonData.temp}°F`));
  modalContent.appendChild(createDataElement('Feels Like', `${jsonData.feelslike}°F`));
  modalContent.appendChild(createDataElement('Humidity', `${jsonData.humidity}%`));
  modalContent.appendChild(createDataElement('Precipitation', `${jsonData.precip} inches`));
  modalContent.appendChild(createDataElement('Precipitation Chance', `${jsonData.precipprob}%`));
  modalContent.appendChild(createDataElement('Cloud Coverage', `${jsonData.cloudcover}%`));
  modalContent.appendChild(createDataElement('Wind Speed', `${jsonData.windspeed} mi/hr`));
  modalContent.appendChild(createDataElement('Visibility', `${jsonData.visibility}mi`));
  modalContent.appendChild(createDataElement('Dewpoint', `${jsonData.dew}°F`));
  modalContent.appendChild(createDataElement('Pressure', `${jsonData.pressure} (mb)`));
  modalContent.appendChild(createDataElement('UV Index', `${jsonData.uvindex}/10`));
  modalContent.appendChild(createDataElement('Sunrise', formatTime(jsonData.sunrise)));
  modalContent.appendChild(createDataElement('Sunset', formatTime(jsonData.sunset)));

  const modal = document.getElementById('myModal');
  modal.style.display = 'block';
  modal.addEventListener('click', closeModal);
}

function closeModal(event) {
  const modal = document.getElementById('myModal');
  if (event.target === modal || event.target.closest('.modal-content')) {
    modal.style.display = 'none';
  }     
}
