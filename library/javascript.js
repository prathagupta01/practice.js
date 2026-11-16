// 1. Inside createBookCard(book), just attach the data-id and classes (NO listeners needed here!)
function createBookCard(book) {
  const div = document.createElement('div');
  div.classList.add('madediv');
  div.dataset.id = book.id; // Stores the book's UUID on the card

  // ... (create h3, nameP, authorP, pageP, readP as before) ...
  const readP = document.createElement('p');
  readP.classList.add('read-text'); // Add a class so we can easily find it later
  readP.textContent = `Read: ${book.read}`;

  const removeBtn = document.createElement("button");
  removeBtn.classList.add("remove-btn");
  removeBtn.textContent = "Remove Book";

  const statusBtn = document.createElement("button");
  statusBtn.classList.add("status-btn");
  statusBtn.textContent = "Change Status";

  div.append(h3, nameP, authorP, pageP, readP, removeBtn, statusBtn);
  display.append(div);
}

// 2. Attach ONE listener to the parent #display container to catch all bubbled clicks!
display.addEventListener("click", (e) => {
  // Find the parent card of whatever was clicked
  const card = e.target.closest(".madediv");
  if (!card) return; // Ignore clicks on empty space outside a card

  const bookId = card.dataset.id;
  const bookIndex = liberary.findIndex((book) => book.id === bookId);

  // Check if the "Remove Book" button was clicked
  if (e.target.classList.contains("remove-btn")) {
    liberary.splice(bookIndex, 1); // Remove from array
    card.remove();                  // Remove from DOM
  }

  // Check if the "Change Status" button was clicked
  if (e.target.classList.contains("status-btn")) {
    const book = liberary[bookIndex];
    book.read = book.read === "Yea" ? "No" : "Yea"; // Toggle in array
    card.querySelector(".read-text").textContent = `Read: ${book.read}`; // Update DOM
  }
});
