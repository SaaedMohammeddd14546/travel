// Display today's date
window.onload = function () {
    const dateElement = document.getElementById("date");
    const today = new Date();
    dateElement.textContent = `Today's Date: ${today.toDateString()}`;
};

document.addEventListener("DOMContentLoaded", () => {
    const bookingForm = document.getElementById("bookingForm");
    const bookingResult = document.getElementById("bookingResult");
    const destinationSelect = document.getElementById("destination");
    const ticketsInput = document.getElementById("tickets");
    const totalCostSpan = document.getElementById("totalCost");
  
    // Function to calculate and update the total cost
    function updateTotalCost() {
      const selectedOption = destinationSelect.options[destinationSelect.selectedIndex];
      const costPerTicket = parseInt(selectedOption.getAttribute("data-cost"));
      const numberOfTickets = parseInt(ticketsInput.value) || 0;
      const totalCost = costPerTicket * numberOfTickets;
  
      // Update the total cost display
      totalCostSpan.textContent = totalCost;
    }
  
    // Event listeners for destination and tickets
    destinationSelect.addEventListener("change", updateTotalCost);
    ticketsInput.addEventListener("input", updateTotalCost);
  
    // Handle form submission
    bookingForm.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent form from refreshing the page
  
      // Get form values
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const destination = destinationSelect.options[destinationSelect.selectedIndex].text;
      const date = document.getElementById("date").value;
      const tickets = ticketsInput.value;
      const totalCost = totalCostSpan.textContent;
  
      // Show confirmation message
      bookingResult.innerHTML = `
        <h3>Booking Confirmed!</h3>
        <p>Thank you, <strong>${name}</strong>!</p>
        <p>Your trip to <strong>${destination}</strong> is booked for <strong>${date}</strong>.</p>
        <p>NO.of tickets: <strong>${tickets}</strong></p>
        <p>Total Cost: <strong>$${totalCost}</strong></p>
        <p>A confirmation email has been sent to <strong>${email}</strong>.</p>
      `;
  
      // Clear the form
      bookingForm.reset();
      totalCostSpan.textContent = "0"; // Reset total cost
    });
  });
  

