window.onload = function() {
    const weatherElement = document.getElementById('weather');

    fetch('https://wttr.in/?format=%C+%t')
        .then(response => response.text())
        .then(data => {
            weatherElement.textContent = `Weather: ${data}`;
        })
        .catch(error => {
            weatherElement.textContent = 'Failed to fetch weather data';
            console.error('Error fetching weather:', error);
        });
};
