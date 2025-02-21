const express = require("express");
const twilio = require("twilio");
require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors()); // Allow frontend to call API

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

app.post("/send-messages", async (req, res) => {
  try {
    const { message, recipients } = req.body;

    const msg = await client.messages.create({
      body: message,
      from: process.env.TWILIO_PHONE_NUMBER, // Your Twilio Number
      to: recipients,
    });

    res.json({ success: true, sid: msg.sid });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
