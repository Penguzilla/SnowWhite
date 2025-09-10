// Importing the required modules
const express = require("express");
const cors = require("cors"); //cors
const jwt = require('jsonwebtoken')

// Create an instance of the express server
const app = express();
// Define the port number for the server
const PORT = process.env.PORT || 5000;
// Enable Cross-Origin Resource Sharing
app.use(cors());
// Define the route to retrieve the message temp in here
app.get("/api/data", (req, res) => {
const data = { message: "Hello from the back end!" };
res.json(data); // Send data as a response
});
// Displaying the requested URL for each request
app.use((req, res, next) => {
console.log(`Request URL: ${req.url}`);
next();
});
// Start the server
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});
