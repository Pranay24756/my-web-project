document.addEventListener("DOMContentLoaded", function () {
    const seatsContainer = document.querySelector(".seats");
    const movieSelect = document.getElementById("movie");
    const count = document.getElementById("count");
    const total = document.getElementById("total");
    const bookBtn = document.getElementById("book");

    const rows = 5;
    const cols = 8;

    function createSeats() {
        for (let i = 0; i < rows * cols; i++) {
            const seat = document.createElement("div");
            seat.classList.add("seat");
            if (Math.random() < 0.2) {
                seat.classList.add("occupied");
            }
            seatsContainer.appendChild(seat);
        }
    }

    createSeats();

    function updateTotal() {
        const selectedSeats = document.querySelectorAll(".seat.selected");
        const selectedCount = selectedSeats.length;
        const ticketPrice = +movieSelect.value;
        count.textContent = selectedCount;
        total.textContent = selectedCount * ticketPrice;
    }

    seatsContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("seat") && !e.target.classList.contains("occupied")) {
            e.target.classList.toggle("selected");
            updateTotal();
        }
    });

    movieSelect.addEventListener("change", updateTotal);

    bookBtn.addEventListener("click", () => {
        const selectedSeats = document.querySelectorAll(".seat.selected");
        if (selectedSeats.length === 0) {
            alert("Please select at least one seat.");
            return;
        }
        alert("Tickets booked successfully!");
        selectedSeats.forEach(seat => seat.classList.remove("selected"));
        updateTotal();
    });
});
