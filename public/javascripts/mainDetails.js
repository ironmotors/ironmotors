let myMap

window.onload = () => {
    const Madrid = {
        lat: 40.409725,
        lng: -3.709716
    };
    myMap = new google.maps.Map(document.getElementById('myMap'), {
        zoom: 15,
        center: Madrid
    })
    
    getCar()
}



function getCar() {
    axios.get("/cars/:carId/details/api")
        .then(carDetailsApi => {
            const car = carDetailsApi.data
            // place.forEach(elm => {
                console.log(car)
                const center = {
                    lat: car.location.coordinates[0],
                    lng: car.location.coordinates[1]
                }
                new google.maps.Marker({
                    position: center,
                    map: myMap,
                    title: car.name
                })
            // })
        })
         .catch(error => console.log(error))
}