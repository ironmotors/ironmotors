// let myMap
// window.onload = () => {
//     const Vallekas = {
//         lat: 40.393664,
//         lng: -3.659637
//     };
//     myMap = new google.maps.Map(document.getElementById('myMap'), {
//         zoom: 16,
//         center: Vallekas
//     });
//     getPlaces()
// }
// function getPlaces() {
//     axios.get("/api")
//         .then(placesApi => {
//             const place = placesApi.data
//             place.forEach(elm => {
//                 const center = {
//                     lat: elm.location.coordinates[0],
//                     lng: elm.location.coordinates[1]
//                 }
//                 new google.maps.Marker({
//                     position: center,
//                     map: myMap,
//                     title: elm.name
//                 })
//             })
//         })
//          .catch(error => console.log(error))
// }

let myMap

window.onload = () => {

    myMap = new google.maps.Map(document.getElementById('myMap'), {
        zoom: 16
    });

    getPlaces()

}



function getPlaces() {
    axios.get("/api")
        .then(response => {
            console.log("LA RESPUESTA DEL SERVIDOR ES", response)
            placeCars(response.data.car)
        })
        .catch(error => console.log(error))
}


function placePlaces(cars) {
    cars.forEach(car => {
        const center = {
            lat: car.location.coordinates[1],
            lng: car.location.coordinates[0]
        }
        new google.maps.Marker({
            position: center,
            map: myMap,
            title: place.name
        })
        myMap.setCenter({
            lat: cars[0].location.coordinates[1],
            lng: cars[0].location.coordinates[0]
        })
    })
}