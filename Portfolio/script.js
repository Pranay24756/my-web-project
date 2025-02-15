document.addEventListener("DOMContentLoaded", () => {
    const orderForm = document.getElementById("orderForm");

    orderForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const name = document.getElementById("name").value;
        const dish = document.getElementById("dish").value;
        const orderMessage = document.getElementById("orderMessage");

        if (name.trim() === "") {
            orderMessage.textContent = "Please enter your name.";
            orderMessage.style.color = "red";
            return;
        }

        orderMessage.textContent = `Thank you, ${name}! Your ${dish} will be ready soon.`;
        orderMessage.style.color = "green";

        orderForm.reset();
    });
});
