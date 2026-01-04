function getHotelCost(hotelType) {
  if (hotelType === "budget") return 1000;
  if (hotelType === "standard") return 2500;
  if (hotelType === "luxury") return 3000;
  return 0;
}

function calculateTotal() {
  const transpoartCostElement = document.getElementById("transpoartCost");
  const hotelTypeElement = document.getElementById("hotelType");
  const foodCostElement = document.getElementById("foodCost");
  const activitiesCostElement = document.getElementById("activitiesCost");
  const appElement = document.getElementById("app");

  const transpoartCost = parseFloat(transpoartCostElement.value);
  const foodCost = parseFloat(foodCostElement.value);
  const activitiesCost = parseFloat(activitiesCostElement.value);
  const hotelType = hotelTypeElement.value;

  if (transpoartCost <= 0) {
    appElement.innerText = "Enter a valid Transpoart Cost.";
    return;
  }

  if (foodCost <= 0) {
    appElement.innerText = "Enter a valid Food Cost.";
    return;
  }

  if (activitiesCost <= 0) {
    appElement.innerText = "Enter a valid Activities Cost.";
    return;
  }

  const hotelCost = getHotelCost(hotelType);
  const totalCost = transpoartCost + hotelCost + foodCost + activitiesCost;

  appElement.innerText =
    "Total Trip Cost: ₹" +
    totalCost.toFixed(2) +
    " (Hotel cost: ₹" +
    hotelCost +
    ")";
}

const buttonElement = document.getElementById("calculateTotalBtn");
buttonElement.addEventListener("click", calculateTotal);
