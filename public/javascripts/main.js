/* 
  === Client-Side Script: main.js ===
  Purpose:
    - Provides basic placeholder interactivity for UI elements before real API
      functionality is implemented.
    - Handles dynamic year injection for the footer.
    - Sets up temporary event listeners for search, filter, edit, and delete buttons.

  Interactions:
    - Loaded globally in layouts/main.hbs via <script defer src="/javascripts/main.js">
    - Works with elements in index.hbs and footer.hbs.
    - Will later be replaced or expanded to call real backend endpoints (CRUD operations).
*/

document.addEventListener("DOMContentLoaded", () => {  // Runs once the full DOM is loaded

  /* === Dynamic Footer Year Injection ===
     Purpose:
       - Automatically updates the footer year without needing manual edits.
       - Ensures consistency across all pages.
  */
  const yearEl = document.querySelector(".footer__copy"); // Selects footer text element

  if (yearEl && !yearEl.textContent.includes("©")) {      // Prevents duplicating the symbol if already present
    const year = new Date().getFullYear();                // Gets current year
    yearEl.textContent = `© ${year} OceanCoast IMS`;      // Sets the year dynamically
  }


  /* === Placeholder Search Button ===
     Purpose:
       - Temporary alert until server-side or client-side search logic is implemented.
  */
  document.getElementById("searchBtn")?.addEventListener("click", () => {
    alert("Search is a placeholder. Server-side filter will be added later."); // Placeholder feedback
  });


  /* === Placeholder Filter Button ===
     Purpose:
       - Warns user that filtering logic is not implemented yet.
  */
  document.getElementById("filterBtn")?.addEventListener("click", () => {
    alert("Filter is a placeholder. Server-side filter will be added later.");
  });


  /* === Placeholder Edit Button ===
     Purpose:
       - Will later trigger an edit modal and update inventory via an API endpoint.
  */
  document.getElementById("editBtn")?.addEventListener("click", () => {
    alert("Edit is a placeholder. API editing will be added later.");
  });


  /* === Placeholder Delete Button ===
     Purpose:
       - Will later call DELETE /api/items/:id to remove the item.
  */
  document.getElementById("deleteBtn")?.addEventListener("click", () => {
    alert("Delete is a placeholder. API deleting will be added later.");
  });
});

