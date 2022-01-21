var elForm = document.querySelector(".speed__form");
var elInput = document.querySelector(".speed__label__input");
var elPedestrian = document.querySelector(".speed__item:nth-child(1) .speed__item__text");
var elBike = document.querySelector(".speed__item:nth-child(2) .speed__item__text");
var elCar = document.querySelector(".speed__item:nth-child(3) .speed__item__text");
var elPlane = document.querySelector(".speed__item:nth-child(4) .speed__item__text");

function speedCalculator(speed, way) {
    way = way.value.trim();
    var allTime = way / speed;
    var hour = Math.floor(allTime);
    var minute = Math.floor((allTime - hour) * 60);
    var secund = Math.floor(((allTime - hour) * 60 - minute) * 60);

    return hour + " Soat<br>" + minute + " minut<br>" + secund + " soniya";
}

elForm.addEventListener("submit", function(evt) {
    evt.preventDefault();

    var pedestrianSpeed = 4;
    var bikeSpeed = 20.1;
    var carSpeed = 70;
    var planeSpeed = 800;

    elPedestrian.innerHTML = speedCalculator(pedestrianSpeed, elInput);
    elBike.innerHTML = speedCalculator(bikeSpeed, elInput);
    elCar.innerHTML = speedCalculator(carSpeed, elInput);
    elPlane.innerHTML = speedCalculator(planeSpeed, elInput);

})