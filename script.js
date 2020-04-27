let ville = "Paris";

let btn = document.querySelector('#changer');

btn.addEventListener('click', function () {

    ville = prompt('Veuillez saisir la ville de votre choix');

    recevoirTemperature(ville);

});



function recevoirTemperature(ville) {


    const url = "http://api.openweathermap.org/data/2.5/weather?q=" + ville + "&lang=fr&units=metric&appid=6cb0c5274fc3d4ca476af2162ab5d713";

    let request = new XMLHttpRequest();

    request.open('GET', url);


    request.responseType = "json";

    request.send();

    request.onload = function () {

        if (request.readyState === XMLHttpRequest.DONE) {

            if (request.status === 200) {

                let reponse = request.response;

                document.querySelector('#ville').textContent = reponse.name;

                document.querySelector('#temperature_label').textContent = parseInt(reponse.main.temp);


            }
            else {
                alert('Une erreur est survenue, merci de ressayer plus tard');
            }
        }
    }
}
setInterval(recevoirTemperature(ville), 500);