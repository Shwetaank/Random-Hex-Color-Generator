// Selecting the element with the class "hex" and storing it in the variable 'hex'
const hex = document.querySelector(".hex");

// Selecting the element with the class "generate" and storing it in the variable 'btn'
const btn = document.querySelector(".generate");

// Function to generate a random color and update the background color and hex code display
const generateColor = () => {
  // Generate a random hex color code by converting a random number to a hex string
  const randomColor = Math.random().toString(16).substring(2, 8);

  // Set the background color of the document body to the generated color
  document.body.style.backgroundColor = "#" + randomColor;

  // Display the generated color code in the element with the class "hex"
  hex.innerHTML = "#" + randomColor;
};

// Add an event listener to the "generate" button
btn.addEventListener("click", generateColor);

// Call the generateColor function once to set an initial color when the page loads
generateColor();
