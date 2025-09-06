function calculateETA() {
  const distanceElement = document.getElementById("distance");
  const speedElement = document.getElementById("speed");
  const appElement = document.getElementById("app");
  const distanceValue = distanceElement.value.trim();
  const speedValue = speedElement.value.trim();

  if (distanceValue === "") {
    appElement.innerText = "Distance is required.";
    return;
  }

  if (speedValue === "") {
    appElement.innerText = "Speed is required.";
    return;
  }

  const distance = parseFloat(distanceValue);
  const speed = parseFloat(speedValue);

  if (isNaN(distance)) {
    appElement.innerText = "Please enter a valid number for distance.";
    return;
  }

  if (isNaN(speed)) {
    appElement.innerText = "Please enter a valid number for speed.";
    return;
  }

  if (distance <= 0) {
    appElement.innerText = "Distance must be greater than 0.";
    return;
  }

  if (speed <= 0) {
    appElement.innerText = "Speed must be greater than 0.";
    return;
  }

  const ETA = distance / speed;
  appElement.innerText =
    "Estimated Time of Arrival: " + ETA.toFixed(2) + " hours";
}

const buttonElement = document.getElementById("calculateETABtn");
buttonElement.addEventListener("click", calculateETA);
