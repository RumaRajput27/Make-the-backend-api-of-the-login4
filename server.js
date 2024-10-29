// server.js

const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// Mock database of users (for demonstration purposes only)
const users = [
    { email: "user@example.com", password: "password123" },
    { email: "admin@example.com", password: "adminpass" },
    // Additional mock users can be added here
];

// Endpoint to check if user with provided email exists
app.post("/api/checkUser", (req, res) => {
    const { email } = req.body;

    // Check if a user exists with the provided email
    const user = users.find(u => u.email === email);

    if (user) {
        // User found
        res.status(200).json({ message: "User exists", userExists: true });
    } else {
        // User not found
        res.status(404).json({ message: "User not found", userExists: false });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
