const quotes = [
  "True friendship is a plant of slow growth. — George Washington",
  "Friendship is the only cement that will ever hold the world together. — Woodrow Wilson",
  "A friend is one who overlooks your broken fence and admires the flowers in your garden.",
  "Good friends are like stars. You don’t always see them, but you know they’re always there.",
  "Friends are the siblings God never gave us. — Mencius"
];

const sweetMessages = [
  "you're a friend that the world is lucky to have!",
  "your smile can light up anyone's day!",
  "you’re the sunshine on a rainy day!",
  "your friendship is a true gift!",
  "you bring happiness wherever you go!"
];

function showMessage() {
  const name = document.getElementById("nameInput").value.trim();
  if (name === "") {
    alert("Please enter your name!");
    return;
  }

  const randomIndex = Math.floor(Math.random() * sweetMessages.length);
  const message = `${name}, ${sweetMessages[randomIndex]}`;

  document.getElementById("personalMessage").textContent = message;

  document.getElementById("nameSection").style.display = "none";
  document.getElementById("mainContent").style.display = "block";
}

document.getElementById("quoteBtn").addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quoteBox").textContent = quotes[randomIndex];
function generateFriendMessage() {
  const friend = document.getElementById("friendName").value.trim();
  const message = document.getElementById("friendMessage").value.trim();

  if (friend === "" || message === "") {
    alert("Please fill both the name and message fields.");
    return;
  }

  const finalMessage = `Dear ${friend},\n\n${message}\n\nWith Love,\nYour Forever Friend 💛`;
  document.getElementById("messagePreview").textContent = finalMessage;
}


});

