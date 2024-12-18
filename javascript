
// Auto-slide banner content (placeholder logic for demo)
let currentIndex = 0;
const bannerMessages = [
  "Explore the World",
  "Your Journey Starts Here",
  "Unforgettable Adventures Await"
];
const bannerElement = document.querySelector(".banner-content h1");

setInterval(() => {
  currentIndex = (currentIndex + 1) % bannerMessages.length;
  bannerElement.textContent = bannerMessages[currentIndex];
}, 3000);

// Form validation
document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form from submitting
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const destination = document.getElementById("destination").value;

  if (name && email && destination) {
    alert("Thank you for your message!");
  } else {
    alert("Please fill out all fields.");
  }
});
