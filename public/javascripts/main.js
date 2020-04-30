
let myMap
let infoWindow

window.onload = () => {
    const Madrid = {
        lat: 40.409725,
        lng: -3.709716,
    };

    infoWindow = new google.maps.InfoWindow()

    myMap = new google.maps.Map(document.getElementById("myMap"), {
        zoom: 15,
        center: Madrid,
    });

    getPlaces()
};

function getPlaces() {
    axios
        .get("/cars/api")
        .then((carsApi) => {
            const cars = carsApi.data;
            cars.forEach((car) => {

                placeMarker(car)

            })
        })
        .catch((error) => console.log(error))
}

function placeMarker(car) {

    let location = car.location
    let key = "AIzaSyA5zll-K3WnkRdKTRaRgbyeC_JkL76ygyM"

    axios
        .get(
            `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${key}`
        )
        .then((geoRes) => {

            let latitude = geoRes.data.results[0].geometry.location.lat
            let longitude = geoRes.data.results[0].geometry.location.lng
            let center = {
                lat: latitude,
                lng: longitude
            };

            let icon = {
                url: "./images/car.png", // url
                scaledSize: new google.maps.Size(40, 40), // scaled size
                // origin: new google.maps.Point(0,0), // origin
                // anchor: new google.maps.Point(0, 0) // anchor
            };

            let marker = new google.maps.Marker({
                map: myMap,
                position: center,
                icon: icon,
                title: car.brand
            });
            
            google.maps.event.addListener(marker, "click", function () {
                infoWindow.setContent(`
                <div><strong>Marca:</strong> ${car.brand} </div>
                <div><strong>Modelo:</strong> ${car.model} </div>
                `)
                infoWindow.open(myMap, this)
            });
        })
        .catch((err) => console.log("Error con el mapa social", err))
}


