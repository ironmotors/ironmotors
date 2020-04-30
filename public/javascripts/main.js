let myMap;

window.onload = () => {
  const Madrid = {
    lat: 40.409725,
    lng: -3.709716,
  };
  myMap = new google.maps.Map(document.getElementById("myMap"), {
    zoom: 15,
    center: Madrid,
  });

  getPlaces();
};

function getPlaces() {
  axios
    .get("/cars/api")
    .then((carsApi) => {
      const cars = carsApi.data;
      cars.forEach((car) => {
          
        placeMarker(car);
 
      });
    })
    .catch((error) => console.log(error));
}

function placeMarker(car) {
  let location = car.location;
  let key = "AIzaSyA5zll-K3WnkRdKTRaRgbyeC_JkL76ygyM";

  axios
    .get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${key}`
    )
    .then((geoRes) => {
      let latitude = geoRes.data.results[0].geometry.location.lat;
      let longitude = geoRes.data.results[0].geometry.location.lng;
      let center = { lat: latitude, lng: longitude };
      
      let marker = new google.maps.Marker({
        map: myMap,
        position: center,
        title: car.brand
      });
      console.log(car)
    //   google.maps.event.addListener(marker, "click", function () {
    //     infoindow.setContent("<div><strong>Propietario:</strong> " + car.brand + "</div><div><strong>Email:</strong><a href=#>" + car.creatorId.email + "</a></div>");
    //     infowindow.open(myMap, this);
    //   });
    })
    .catch((err) => console.log("Error con el mapa social", err));
}
