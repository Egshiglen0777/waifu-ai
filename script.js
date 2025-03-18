document.addEventListener("DOMContentLoaded", function () {
    const waifus = document.querySelectorAll(".waifu-option");
    const chatContainer = document.getElementById("chat-container");
    const waifuSelection = document.getElementById("waifu-selection");
    const selectedWaifu = document.getElementById("selected-waifu");
    const chatBox = document.getElementById("chat-box");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-button");
    let activeWaifu = "";
    
    waifus.forEach(waifu => {
        waifu.addEventListener("click", function () {
            activeWaifu = this.getAttribute("data-waifu");
            selectedWaifu.textContent = `You are chatting with ${activeWaifu}`;
            waifuSelection.style.display = "none";
            chatContainer.style.display = "block";
        });
    });
    
    sendButton.addEventListener("click", function () {
        sendMessage();
    });
    
    userInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
    
    function sendMessage() {
        const userMessage = userInput.value.trim();
        if (userMessage === "") return;

        appendMessage("You", userMessage, "user-message");
        userInput.value = "";

        fetch("https://your-railway-app-url.com/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ message: userMessage, waifu: activeWaifu })
        })
        .then(response => response.json())
        .then(data => {
            appendMessage(activeWaifu, data.reply, "waifu-message");
        })
        .catch(error => {
            console.error("Error:", error);
        });
    }
    
    function appendMessage(sender, message, className) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message", className);
        messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    }
});
