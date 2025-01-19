// Get elements
const processTransactionBtn = document.getElementById("processTransactionBtn");
const processingPopup = document.getElementById("processingPopup");

// Show the popup
processTransactionBtn.addEventListener("click", () => {
  processingPopup.style.display = "flex";

  // Simulate transaction processing (auto-close popup after 3 seconds)
  setTimeout(() => {
    processingPopup.style.display = "none";
    alert("Transaction completed!");
  }, 3000);
});

// Close the popup
function closePopup() {
  processingPopup.style.display = "none";
}
