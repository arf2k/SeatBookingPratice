const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
// grab everything with seat selector
const count = document.querySelector("#count");
const total = document.querySelector("#total");
const movieSelect = document.getElementById("movie");
const ticketPrice = parseInt(movieSelect.value);

container.addEventListener("click", (e) => {
  console.log(e.target);
});
