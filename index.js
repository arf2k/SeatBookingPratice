const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
// grab everything with seat selector
const count = document.querySelector("#count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");
let ticketPrice = +movieSelect.value;

// save selected movie index and price
const setMovieData = (movieIndex, moviePrice) => {
  localStorage.setItem("selectedMovieIndex", movieIndex);
  localStorage.setItem("selectedMoviePrice", moviePrice);
};

const updateSelectedCount = () => {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");

  // // copy selectedSeats into array
  // map through array and return array of indexes
  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeatsCount;
  total.innerText = count.innerText * +movieSelect.value;
};

// movie select event
movieSelect.addEventListener("change", (e) => {
  ticketPrice = +e.target.value;
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});

// seat click event
container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
    updateSelectedCount();
  }
});
