document.addEventListener("DOMContentLoaded", () => {
    const chatBox = document.getElementById("chat-box");
    const userInput = document.getElementById("user-input");
    const sendBtn = document.getElementById("send-btn");

    sendBtn.addEventListener("click", sendMessage);
    userInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") sendMessage();
    });

    function sendMessage() {
        const message = userInput.value.trim();
        if (message === "") return;

        addMessage("user", message);
        userInput.value = "";

        setTimeout(() => {
            const response = getBotResponse(message);
            addMessage("bot", response);
        }, 1000);
    }

    function addMessage(sender, text) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("chat-message", sender);
        messageDiv.textContent = text;
        chatBox.appendChild(messageDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function getBotResponse(input) {
        const responses = {
            "hi": "Hello! How can I assist you?",
            "how are you": "I'm just a bot, but I'm doing great!",
            "your name": "I'm AI Chatbot!",
            "bye": "Goodbye! Have a nice day!"
        };

        input = input.toLowerCase();
        return responses[input] || "I'm not sure how to respond to that.";
    }
});
