const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Define a route for handling date requests
app.get('/api/:date?', (req, res) => {
  // Get the date parameter from the request URL
  const { date } = req.params;

  // If no date provided, use current time
  let inputDate;
  if (!date) {
    inputDate = new Date();
  } else {
    inputDate = new Date(date);
  }

  // Check if the input date is valid
  if (!inputDate.getTime()) {
    return res.json({ error: "Invalid Date" });
  }

  // Prepare response object
  const response = {
    unix: inputDate.getTime(),
    utc: inputDate.toUTCString()
  };

  // Send the response
  res.json(response);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
