const courseList = document.querySelector(".course-list");

function sortByPrice() {
  const items = Array.from(courseList.children);
  items.sort((itemA, itemB) => {
    const priceA = parseInt(itemA.querySelector("h3").textContent.replace(/[^\d]/g, ""));
    const priceB = parseInt(itemB.querySelector("h3").textContent.replace(/[^\d]/g, "")); 
    return priceA - priceB;
  });
  items.forEach(item => courseList.appendChild(item)); 

document.querySelector("#select").addEventListener("change", event => {
  const sortType = event.target.value;
  if (sortType === "LowToHigh") {
    sortByPrice();
  } else if (sortType === "HighToLow") {
    sortByPrice();
    const items = Array.from(courseList.children).reverse(); 
    items.forEach(item => courseList.appendChild(item)); 
  }
});