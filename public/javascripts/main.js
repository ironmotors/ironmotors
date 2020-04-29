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
    
    getPlaces()
}


function getPlaces() {
    axios.get("/cars/api")
        .then(placesApi => {
            const place = placesApi.data
            place.forEach(elm => {
                console.log(elm)
                const center = {
                    lat: elm.location.coordinates[0],
                    lng: elm.location.coordinates[1]
                }
                new google.maps.Marker({
                    position: center,
                    map: myMap,
                    title: elm.name
                })
            })
        })
         .catch(error => console.log(error))
}