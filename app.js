const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Get search bar, book cards, and no-match message
const searchBar = document.getElementById('search-bar');
const bookCards = document.querySelectorAll('.book-card');
const noMatchMessage = document.getElementById('no-match');

// Add event listener to search bar
searchBar.addEventListener('input', () => {
    const searchText = searchBar.value.toLowerCase();
    let hasMatch = false; // Track if any card matches

    // Loop through each book card
    bookCards.forEach(card => {
        const title = card.dataset.title.toLowerCase(); // Get title from data attribute
        if (title.includes(searchText)) {
            card.style.display = ''; // Show matching card
            hasMatch = true; // At least one match
        } else {
            card.style.display = 'none'; // Hide non-matching card
        }
    });

    // Show or hide the no-match message
    noMatchMessage.style.display = hasMatch ? 'none' : 'block';
});