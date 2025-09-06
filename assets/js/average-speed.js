function calculateAverageSpeed() {
  const distanceElement = document.getElementById("distance");
  const timeElement = document.getElementById("time");
  const appElement = document.getElementById("app");

  const distanceValue = distanceElement.value.trim();
  const timeValue = timeElement.value.trim();

  if (distanceValue === "") {
    appElement.innerText = "Distance is required.";
    return;
  }

  if (timeValue === "") {
    appElement.innerText = "Time is required.";
    return;
  }

  const distance = parseFloat(distanceValue);
  const time = parseFloat(timeValue);

  if (isNaN(distance)) {
    appElement.innerText = "Please enter a valid number for distance.";
    return;
  }

  if (isNaN(time)) {
    appElement.innerText = "Please enter a valid number for time.";
    return;
  }

  if (distance <= 0) {
    appElement.innerText = "Distance must be greater than 0.";
    return;
  }

  if (time <= 0) {
    appElement.innerText = "Time must be greater than 0.";
    return;
  }

  const speed = distance / time;
  appElement.innerText = "Average Speed: " + speed.toFixed(2) + " km/h";
}

const buttonElement = document.getElementById("CalculateSpeedBtn");
buttonElement.addEventListener("click", calculateAverageSpeed);
