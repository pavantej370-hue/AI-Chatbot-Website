function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");

  let userText = input.value;
  if (userText === "") return;

  // Show user message
  let userMsg = document.createElement("div");
  userMsg.className = "user";
  userMsg.innerText = userText;
  chatBox.appendChild(userMsg);

  // Bot reply
  let botMsg = document.createElement("div");
  botMsg.className = "bot";
  botMsg.innerText = getBotReply(userText);
  chatBox.appendChild(botMsg);

  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Simple AI logic
function getBotReply(input) {
  input = input.toLowerCase();

  if (input.includes("hello")) return "Hi! How can I help you?";
  if (input.includes("name")) return "I am your AI chatbot.";
  if (input.includes("bye")) return "Goodbye!";

  return "Sorry, I don't understand.";
}
