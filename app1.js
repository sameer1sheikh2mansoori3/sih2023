// Get a reference to the form element
const queryForm = document.getElementById('queryForm');

// Add an event listener for form submission
queryForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting the traditional way

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const query = document.getElementById('query').value;

    // Create an object to represent the query data (you can customize this structure)
    const queryData = {
        name: name,
        email: email,
        query: query
    };

    // Send the queryData to the server (you would typically use an API endpoint)
    // Here, we'll just log the data to the console for demonstration purposes
    console.log('Query Data:', queryData);

    // You can add code here to send the data to the server via an API request
});
