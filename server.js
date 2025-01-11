const express = require('express');
const app = express();

// Helper function to get a cheerful message based on the day of the week
const getDayMessage = () => {
    const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    const currentDay = new Date().getDay();
    const dayName = daysOfWeek[currentDay];

    switch (dayName) {
        case "Monday":
            return "Happy Monday! Start your week with energy!";
        case "Friday":
            return "It's Friday! The weekend is near!";
        default:
            return "Have a wonderful day!";
    }
};

// GET endpoint for greeting
app.get('/assistant/greet', (req, res) => {
    const name = req.query.name;

    if (!name) {
        return res.status(400).json({
            error: "Please provide a name query parameter (e.g., ?name=John)."
        });
    }

    const response = {
        welcomeMessage: `Hello, ${name}! Welcome to our assistant app!`,
        dayMessage: getDayMessage()
    };

    res.json(response);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Virtual Assistant API is running on http://localhost:${PORT}`);
});
