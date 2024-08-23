document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Retrieve existing data from localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Add new user data
    users.push({ name, age, email, phone });

    // Store updated data in localStorage
    localStorage.setItem('users', JSON.stringify(users));

    // Redirect to display.html
    window.location.href = 'display.html';
});
