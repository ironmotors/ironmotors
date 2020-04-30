let myMap;
let carId = document.querySelector("#carId").innerHTML;

window.onload = () => {

  myMap = new google.maps.Map(document.getElementById("myMap"), { zoom: 14 });

  getCar();
};

function getCar() {

  axios
    .get(`/cars/${carId}/details/api`)
    .then((carDetailsApi) => {
      const car = carDetailsApi.data.car;

      const center = {
        lat: car.location.coordinates[0],
        lng: car.location.coordinates[1],
      };
      new google.maps.Marker({
        position: center,
        map: myMap,
        icon: {
          url: "images/car.png",
          scaledSize: new google.maps.Size(50, 50),
        },
        title: car.name,
      });

      myMap.setCenter({
        lat: car.location.coordinates[0],
        lng: car.location.coordinates[1],
      });

    })
    .catch((error) => console.log(error));
}

