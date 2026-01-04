//   < !--Optional Conditionals-- >
function getEfficiency(fuelEfficiency) {
  if (fuelEfficiency <= 10) return "Poor fuel efficiency.";
  if (fuelEfficiency >= 20 && fuelEfficiency <= 30)
    return "Average fuel efficiency.";
  if (fuelEfficiency > 30) return "Good fuel efficiency.";
}

function calculateCost() {
  const distanceElement = document.getElementById("distance");
  const fuelEfficiencyElement = document.getElementById("fuelEfficiency");
  const fuelPriceElement = document.getElementById("fuelPrice");
  const appElement = document.getElementById("app");

  const distance = parseFloat(distanceElement.value);
  const fuelEfficiency = parseFloat(fuelEfficiencyElement.value);
  const fuelPrice = parseFloat(fuelPriceElement.value);

  if (isNaN(distance) || distance <= 0) {
    appElement.innerText = "Distance must be a number greater than 0.";
    return;
  }
  if (isNaN(fuelEfficiency) || fuelEfficiency <= 0) {
    appElement.innerText = "Fuel efficiency must be a number greater than 0.";
    return;
  }
  if (isNaN(fuelPrice) || fuelPrice <= 0) {
    appElement.innerText = "Fuel price must be a number greater than 0.";
    return;
  }
  const fuelNeeded = distance / fuelEfficiency;
  const TotalCost = fuelNeeded * fuelPrice;
  const efficiency = getEfficiency(fuelEfficiency);
  appElement.innerText =
    "Total Fuel Cost: ₹" + TotalCost.toFixed(2) + " - " + efficiency;
}
const buttonElement = document.getElementById("calculateCostBtn");
buttonElement.addEventListener("click", calculateCost);
