function sendMessage() {
    let box = document.getElementById("chatBox");
    let input = document.getElementById("chatInput");

    box.innerHTML += `<p><b>You:</b> ${input.value}</p>`;
    input.value = "";
    box.scrollTop = box.scrollHeight;
}
// ----------------- NEW CHAT ANIMATED FUNCTION -----------------
function sendMessage() {
    const chatBox = document.getElementById("chatBox");
    const chatInput = document.getElementById("chatInput");
    const text = chatInput.value.trim();
    if (!text) return;

    // Add user message
    const msg = document.createElement("div");
    msg.classList.add("chat-message", "user");
    msg.textContent = text;
    chatBox.appendChild(msg);

    chatInput.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;

    // Example system message (optional)
    setTimeout(() => {
        const sysMsg = document.createElement("div");
        sysMsg.classList.add("chat-message", "system");
        sysMsg.textContent = "This is a system message!";
        chatBox.appendChild(sysMsg);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 800);
}
// Set username from localStorage or default
let username = localStorage.getItem("user") || "Guest";
const chatBox = document.getElementById("chatBox");
const chatInput = document.getElementById("chatInput");

// Function to add messages
function sendMessage() {
    let text = chatInput.value.trim();
    if (text === "") return;

    // Create new message
    const msg = document.createElement("div");
    msg.classList.add("chat-message", "user");
    msg.textContent = text;

    // Add animation
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;

    // Clear input
    chatInput.value = "";

    // Optional: system reply
    setTimeout(()=> {
        const sysMsg = document.createElement("div");
        sysMsg.classList.add("chat-message", "system");
        sysMsg.textContent = "This is a system message!";
        chatBox.appendChild(sysMsg);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);
}
// Get username from localStorage
let username = localStorage.getItem("user") || "Guest";

// Load messages from localStorage when page loads
window.addEventListener("load", () => {
    const chatBox = document.getElementById("chatBox");
    const messages = JSON.parse(localStorage.getItem("messages")) || [];

    messages.forEach(msg => {
        const div = document.createElement("div");
        div.classList.add("chat-message", msg.type);
        div.innerHTML = `<b>${msg.user}:</b> ${msg.text}`;
        chatBox.appendChild(div);
    });

    chatBox.scrollTop = chatBox.scrollHeight;
});

// Function to send message
function sendMessage() {
    const chatBox = document.getElementById("chatBox");
    const chatInput = document.getElementById("chatInput");
    const text = chatInput.value.trim();
    if (!text) return;

    // Create message object
    const message = { user: username, text: text, type: "user" };

    // Add to chat box
    const msgDiv = document.createElement("div");
    msgDiv.classList.add("chat-message", "user");
    msgDiv.innerHTML = `<b>${username}:</b> ${text}`;
    chatBox.appendChild(msgDiv);

    // Save message to localStorage
    const messages = JSON.parse(localStorage.getItem("messages")) || [];
    messages.push(message);
    localStorage.setItem("messages", JSON.stringify(messages));

    chatInput.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;

    // Optional system message (not stored)
    setTimeout(() => {
        const sysDiv = document.createElement("div");
        sysDiv.classList.add("chat-message", "system");
        sysDiv.innerHTML = `<b>System:</b> Welcome ${username}!`;
        chatBox.appendChild(sysDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 800);
}
