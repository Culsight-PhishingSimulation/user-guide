// JavaScript to toggle dropdown visibility
document.querySelectorAll('.dropdown-toggle').forEach(button => {
    button.addEventListener('click', () => {
        // Find the dropdown menu within the current list item
        const parentLi = button.parentElement;
        const dropdown = parentLi.querySelector('.dropdown');

        // Toggle visibility
        if (dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
            parentLi.classList.remove('show'); // Remove 'show' class from the parent
        } else {
            // Close other open dropdowns
            document.querySelectorAll('.dropdown.show').forEach(openDropdown => {
                openDropdown.classList.remove('show');
                openDropdown.parentElement.classList.remove('show');
            });

            // Show the current dropdown
            dropdown.classList.add('show');
            parentLi.classList.add('show');
        }
    });
});
