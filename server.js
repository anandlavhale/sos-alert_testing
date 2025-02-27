const express = require("express");
const twilio = require("twilio");
require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(express.json());

// Allow frontend requests only from your Vercel frontend
const allowedOrigins = ["https://your-frontend.vercel.app"];
app.use(
  cors({
    origin: allowedOrigins,
    methods: ["POST"],
    allowedHeaders: ["Content-Type"],
  })
);

// Twilio Configuration
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

// API Endpoint for Sending Messages
app.post("/send-messages", async (req, res) => {
  try {
    const { message, recipients } = req.body;

    const msg = await client.messages.create({
      body: message,
      from: process.env.TWILIO_PHONE_NUMBER, // Twilio Number
      to: recipients,
    });

    res.json({ success: true, sid: msg.sid });
  } catch (error) {
    console.error("Twilio Error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Dynamic Port Handling for Render Deployment
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Server running on https://backend-sdye.onrender.com`)
);
