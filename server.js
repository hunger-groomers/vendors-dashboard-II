// Import required packages
const express = require('express'); // Express framework
const cors = require('cors');      // Enable cross-origin requests
const dotenv = require('dotenv');  // Load environment variables

// Initialize environment variables
dotenv.config();

// Create an instance of Express
const app = express();

// Set the port; default to 3000 if not specified in .env
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Parse JSON request bodies

// Sample Routes
// Home Route
app.get('/', (req, res) => {
    res.send('Welcome to the Food Delivery App API!');
});

// Restaurants Route (Example)
app.get('/restaurants', (req, res) => {
    const sampleRestaurants = [
        { id: 1, name: 'Pizza Palace', cuisine: 'Italian' },
        { id: 2, name: 'Sushi World', cuisine: 'Japanese' },
        { id: 3, name: 'Burger Barn', cuisine: 'American' }
    ];
    res.json(sampleRestaurants);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
