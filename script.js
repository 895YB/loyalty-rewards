
let currentSlide = 0;
const slides = document.querySelectorAll(".slides");
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 3000);

function handleKey(event) {
  if (event.key === "Enter") {
    const input = document.getElementById("chatbot-input");
    const message = input.value.trim();
    if (message) {
      const body = document.getElementById("chatbot-body");
      const userMsg = document.createElement("div");
      userMsg.className = "chat-message user";
      userMsg.innerText = message;
      body.appendChild(userMsg);
      const botMsg = document.createElement("div");
      botMsg.className = "chat-message bot";
      botMsg.innerText = "Thank you for your message!";
      body.appendChild(botMsg);
      input.value = "";
      body.scrollTop = body.scrollHeight;
    }
  }
}
