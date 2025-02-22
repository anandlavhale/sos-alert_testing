// // // // // document.getElementById("toggleDarkMode").addEventListener("click", () => {
// // // // //     document.body.classList.toggle("dark-mode");
// // // // //     document.getElementById("toggleDarkMode").innerText = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
// // // // //   });
  
// // // // //   document.getElementById("sosForm").addEventListener("submit", (event) => {
// // // // //     event.preventDefault();
    
// // // // //     const resultSection = document.getElementById("resultSection");
// // // // //     const message = document.getElementById("message").value;
// // // // //     const recipients = document.getElementById("recipients").value.split(",");
// // // // //     const spinner = document.getElementById("loadingSpinner");
  
// // // // //     resultSection.innerText = "⏳ Sending SOS message...";
// // // // //     spinner.style.display = "block"; // Show spinner
  
// // // // //     fetch("http://localhost:3000/send-messages", {
// // // // //       method: "POST",
// // // // //       headers: { "Content-Type": "application/json" },
// // // // //       body: JSON.stringify({ message, recipients }),
// // // // //     })
// // // // //       .then((resp) => resp.json())
// // // // //       .then((body) => {
// // // // //         spinner.style.display = "none"; // Hide spinner
// // // // //         resultSection.innerText = body.success ? "✅ SOS message sent successfully!" : "❌ Failed to send message.";
// // // // //       })
// // // // //       .catch(() => {
// // // // //         spinner.style.display = "none"; // Hide spinner
// // // // //         resultSection.innerText = "❌ Error: Could not send SOS message.";
// // // // //       });
// // // // //   });
  

// // // // //-------------------------------------------------------------------------------------------------------



// // // //  // document.getElementById("toggleDarkMode").addEventListener("click", () => {
// // // // //     document.body.classList.toggle("dark-mode");
// // // // //     document.getElementById("toggleDarkMode").innerText = document.body.classList.contains("dark-mode") ? "☀" : "🌙";
// // // // //   });
  
// // // // //   document.getElementById("sosForm").addEventListener("submit", (event) => {
// // // // //     event.preventDefault();
    
// // // // //     const resultSection = document.getElementById("resultSection");
// // // // //     const message = document.getElementById("message").value;
// // // // //     const recipients = document.getElementById("recipients").value.split(",");
// // // // //     const spinner = document.getElementById("loadingSpinner");
  
// // // // //     resultSection.innerText = "⏳ Sending SOS message...";
// // // // //     spinner.style.display = "block"; // Show spinner
  
// // // // //     fetch("http://localhost:3000/send-messages", {
// // // // //       method: "POST",
// // // // //       headers: { "Content-Type": "application/json" },
// // // // //       body: JSON.stringify({ message, recipients }),
// // // // //     })
// // // // //       .then((resp) => resp.json())
// // // // //       .then((body) => {
// // // // //         spinner.style.display = "none"; // Hide spinner
// // // // //         resultSection.innerText = body.success ? "✅ SOS message sent successfully!" : "❌ Failed to send message.";
// // // // //       })
// // // // //       .catch(() => {
// // // // //         spinner.style.display = "none"; // Hide spinner
// // // // //         resultSection.innerText = "❌ Error: Could not send SOS message.";
// // // // //       });
// // // // //   });
  

// // // // // 2. index.js - Complete updated file
// // // // document.getElementById("toggleDarkMode").addEventListener("click", () => {
// // // //   document.body.classList.toggle("dark-mode");
// // // //   document.getElementById("toggleDarkMode").innerText = document.body.classList.contains("dark-mode") ? "☀" : "🌙";
// // // // });

// // // // // Extract employee ID from URL and fetch data
// // // // const urlParams = new URLSearchParams(window.location.search);
// // // // const employeeId = urlParams.get('id');

// // // // if (employeeId) {
// // // //   fetch(`http://localhost:3000/employee/${employeeId}`)
// // // //       .then(response => response.json())
// // // //       .then(employee => {
// // // //           if (employee) {
// // // //               // Update the profile details
// // // //               document.querySelector('.profile-details').innerHTML = `
// // // //                   <p><strong>Employee ID:</strong> ${employee._id}</p>
// // // //                   <p><strong>Name:</strong> ${employee.name}</p>
// // // //                   <p><strong>Department:</strong> ${employee.department}</p>
// // // //                   <p><strong>Designation:</strong> ${employee.designation}</p>
// // // //                   <p><strong>Mobile Number:</strong> ${employee.phone}</p>
// // // //                   <p><strong>Blood Group:</strong> ${employee.medical_info.blood_group}</p>
// // // //                   <p><strong>Health Conditions:</strong> ${employee.medical_info.medical_conditions.join(', ')}</p>
// // // //                   <p><strong>Allergies:</strong> ${employee.medical_info.allergies.join(', ')}</p>
// // // //                   <p><strong>Current Medications:</strong> ${employee.medical_info.medications.join(', ')}</p>
                  
// // // //                   <h3>Emergency Contact</h3>
// // // //                   <p><strong>Name:</strong> ${employee.emergency_contact.name}</p>
// // // //                   <p><strong>Relation:</strong> ${employee.emergency_contact.relation}</p>
// // // //                   <p><strong>Phone:</strong> ${employee.emergency_contact.phone}</p>
                  
// // // //                   <h3>Doctor's Contact</h3>
// // // //                   <p><strong>Name:</strong> ${employee.doctor_contact.name}</p>
// // // //                   <p><strong>Hospital:</strong> ${employee.doctor_contact.hospital}</p>
// // // //                   <p><strong>Phone:</strong> ${employee.doctor_contact.phone}</p>
// // // //               `;

// // // //               // Update recipients field with all emergency contacts
// // // //               const recipientNumbers = [
// // // //                   employee.phone,
// // // //                   employee.emergency_contact.phone,
// // // //                   employee.doctor_contact.phone
// // // //               ].join(',');
// // // //               document.getElementById('recipients').value = recipientNumbers;
// // // //           }
// // // //       })
// // // //       .catch(error => {
// // // //           console.error('Error fetching employee data:', error);
// // // //           document.querySelector('.profile-details').innerHTML = '<p>Error loading employee data</p>';
// // // //       });
// // // // }

// // // // // Existing SOS form submission handler
// // // // document.getElementById("sosForm").addEventListener("submit", (event) => {
// // // //   event.preventDefault();
  
// // // //   const resultSection = document.getElementById("resultSection");
// // // //   const message = document.getElementById("message").value;
// // // //   const recipients = document.getElementById("recipients").value.split(",");
// // // //   const spinner = document.getElementById("loadingSpinner");

// // // //   resultSection.innerText = "⏳ Sending SOS message...";
// // // //   spinner.style.display = "block";

// // // //   fetch("http://localhost:3000/send-messages", {
// // // //       method: "POST",
// // // //       headers: { "Content-Type": "application/json" },
// // // //       body: JSON.stringify({ message, recipients }),
// // // //   })
// // // //       .then((resp) => resp.json())
// // // //       .then((body) => {
// // // //           spinner.style.display = "none";
// // // //           resultSection.innerText = body.success ? "✅ SOS message sent successfully!" : "❌ Failed to send message.";
// // // //       })
// // // //       .catch(() => {
// // // //           spinner.style.display = "none";
// // // //           resultSection.innerText = "❌ Error: Could not send SOS message.";
// // // //       });
// // // // });

// // // // Dark mode toggle functionality
// // // document.getElementById("toggleDarkMode").addEventListener("click", () => {
// // //     document.body.classList.toggle("dark-mode");
// // //     document.getElementById("toggleDarkMode").innerText = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
// // // });

// // // // Extract employee ID from URL and fetch data
// // // const urlParams = new URLSearchParams(window.location.search);
// // // const employeeId = urlParams.get('id');

// // // if (employeeId) {
// // //     fetch(`http://localhost:3000/employee/${employeeId}`)
// // //         .then(response => response.json())
// // //         .then(employee => {
// // //             if (employee) {
// // //                 // Update the profile details
// // //                 document.querySelector('.profile-details').innerHTML = `
// // //                     <p><strong>Employee ID:</strong> ${employee._id}</p>
// // //                     <p><strong>Name:</strong> ${employee.name}</p>
// // //                     <p><strong>Department:</strong> ${employee.department}</p>
// // //                     <p><strong>Designation:</strong> ${employee.designation}</p>
// // //                     <p><strong>Mobile Number:</strong> ${employee.phone}</p>
// // //                     <p><strong>Blood Group:</strong> ${employee.medical_info.blood_group}</p>
// // //                     <p><strong>Health Conditions:</strong> ${employee.medical_info.medical_conditions.join(', ')}</p>
// // //                     <p><strong>Allergies:</strong> ${employee.medical_info.allergies.join(', ')}</p>
// // //                     <p><strong>Current Medications:</strong> ${employee.medical_info.medications.join(', ')}</p>
                    
// // //                     <h3>Emergency Contact</h3>
// // //                     <p><strong>Name:</strong> ${employee.emergency_contact.name}</p>
// // //                     <p><strong>Relation:</strong> ${employee.emergency_contact.relation}</p>
// // //                     <p><strong>Phone:</strong> ${employee.emergency_contact.phone}</p>
                    
// // //                     <h3>Doctor's Contact</h3>
// // //                     <p><strong>Name:</strong> ${employee.doctor_contact.name}</p>
// // //                     <p><strong>Hospital:</strong> ${employee.doctor_contact.hospital}</p>
// // //                     <p><strong>Phone:</strong> ${employee.doctor_contact.phone}</p>
// // //                 `;

// // //                 // Update recipients field with all emergency contacts
// // //                 const recipientNumbers = [
// // //                     employee.phone,
// // //                     employee.emergency_contact.phone,
// // //                     employee.doctor_contact.phone
// // //                 ].join(',');
// // //                 document.getElementById('recipients').value = recipientNumbers;
// // //             }
// // //         })
// // //         .catch(error => {
// // //             console.error('Error fetching employee data:', error);
// // //             document.querySelector('.profile-details').innerHTML = '<p>Error loading employee data</p>';
// // //         });
// // // }

// // // // SOS form submission handler
// // // document.getElementById("sosForm").addEventListener("submit", (event) => {
// // //     event.preventDefault();
    
// // //     const resultSection = document.getElementById("resultSection");
// // //     const message = document.getElementById("message").value;
// // //     const recipients = document.getElementById("recipients").value.split(",");
// // //     const spinner = document.getElementById("loadingSpinner");
  
// // //     resultSection.innerText = "⏳ Sending SOS message...";
// // //     spinner.style.display = "block";
  
// // //     fetch("http://localhost:3000/send-messages", {
// // //         method: "POST",
// // //         headers: { "Content-Type": "application/json" },
// // //         body: JSON.stringify({ message, recipients }),
// // //     })
// // //         .then((resp) => resp.json())
// // //         .then((body) => {
// // //             spinner.style.display = "none";
// // //             resultSection.innerText = body.success ? "✅ SOS message sent successfully!" : "❌ Failed to send message.";
// // //         })
// // //         .catch(() => {
// // //             spinner.style.display = "none";
// // //             resultSection.innerText = "❌ Error: Could not send SOS message.";
// // //         });
// // // });


// // document.getElementById("toggleDarkMode").addEventListener("click", () => {
// //     document.body.classList.toggle("dark-mode");
// //     document.getElementById("toggleDarkMode").innerText = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
// // });

// // // Set backend URL dynamically
// // const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "https://backend-sdye.onrender.com";

// // // Extract employee ID from URL and fetch data
// // const urlParams = new URLSearchParams(window.location.search);
// // const employeeId = urlParams.get('id');

// // if (employeeId) {
// //     fetch(`${backendUrl}/employee/${employeeId}`)
// //         .then(response => response.json())
// //         .then(employee => {
// //             if (employee) {
// //                 document.querySelector('.profile-details').innerHTML = `
// //                     <p><strong>Employee ID:</strong> ${employee._id}</p>
// //                     <p><strong>Name:</strong> ${employee.name}</p>
// //                     <p><strong>Department:</strong> ${employee.department}</p>
// //                     <p><strong>Designation:</strong> ${employee.designation}</p>
// //                     <p><strong>Mobile Number:</strong> ${employee.phone}</p>
// //                     <p><strong>Blood Group:</strong> ${employee.medical_info.blood_group}</p>
// //                     <p><strong>Health Conditions:</strong> ${employee.medical_info.medical_conditions.join(', ')}</p>
// //                     <p><strong>Allergies:</strong> ${employee.medical_info.allergies.join(', ')}</p>
// //                     <p><strong>Current Medications:</strong> ${employee.medical_info.medications.join(', ')}</p>
                    
// //                     <h3>Emergency Contact</h3>
// //                     <p><strong>Name:</strong> ${employee.emergency_contact.name}</p>
// //                     <p><strong>Relation:</strong> ${employee.emergency_contact.relation}</p>
// //                     <p><strong>Phone:</strong> ${employee.emergency_contact.phone}</p>
                    
// //                     <h3>Doctor's Contact</h3>
// //                     <p><strong>Name:</strong> ${employee.doctor_contact.name}</p>
// //                     <p><strong>Hospital:</strong> ${employee.doctor_contact.hospital}</p>
// //                     <p><strong>Phone:</strong> ${employee.doctor_contact.phone}</p>
// //                 `;

// //                 // Update recipients field with all emergency contacts
// //                 const recipientNumbers = [
// //                     employee.phone,
// //                     employee.emergency_contact.phone,
// //                     employee.doctor_contact.phone
// //                 ].join(',');
// //                 document.getElementById('recipients').value = recipientNumbers;
// //             }
// //         })
// //         .catch(error => {
// //             console.error('Error fetching employee data:', error);
// //             document.querySelector('.profile-details').innerHTML = '<p>Error loading employee data</p>';
// //         });
// // }

// // // SOS form submission handler
// // document.getElementById("sosForm").addEventListener("submit", (event) => {
// //     event.preventDefault();
    
// //     const resultSection = document.getElementById("resultSection");
// //     const message = document.getElementById("message").value;
// //     const recipients = document.getElementById("recipients").value.split(",");
// //     const spinner = document.getElementById("loadingSpinner");
  
// //     resultSection.innerText = "⏳ Sending SOS message...";
// //     spinner.style.display = "block";
  
// //     fetch(`${backendUrl}/send-messages`, {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ message, recipients }),
// //     })
// //         .then((resp) => resp.json())
// //         .then((body) => {
// //             spinner.style.display = "none";
// //             resultSection.innerText = body.success ? "✅ SOS message sent successfully!" : "❌ Failed to send message.";
// //         })
// //         .catch(() => {
// //             spinner.style.display = "none";
// //             resultSection.innerText = "❌ Error: Could not send SOS message.";
// //         });
// // });

// const express = require("express");
// const twilio = require("twilio");
// const mongoose = require("mongoose");
// require("dotenv").config();
// const cors = require("cors");

// const app = express();
// app.use(express.json());

// // ✅ Allow CORS for Vercel frontend & local testing
// const allowedOrigins = [
//   "https://sos-alert-testing.vercel.app", // Vercel Frontend
//   "http://localhost:3000" // Local Testing
// ];

// app.use(cors({
//   origin: allowedOrigins, 
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   credentials: true // Allow cookies if needed
// }));

// // ✅ MongoDB Connection
// const mongoURI = process.env.MONGO_URI;
// if (!mongoURI) {
//   console.error("❌ Error: MONGO_URI is not set in environment variables.");
//   process.exit(1);
// }

// mongoose.connect(mongoURI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => console.log("✅ MongoDB connected successfully"))
// .catch(err => {
//   console.error("❌ MongoDB connection error:", err.message);
//   process.exit(1);
// });

// // ✅ Employee Schema
// const employeeSchema = new mongoose.Schema({
//   name: String,
//   designation: String,
//   department: String,
//   phone: String,
//   email: String,
//   qr_code_url: String,
//   emergency_contact: {
//     name: String,
//     relation: String,
//     phone: String
//   },
//   medical_info: {
//     blood_group: String,
//     allergies: [String],
//     medical_conditions: [String],
//     medications: [String]
//   },
//   doctor_contact: {
//     name: String,
//     phone: String,
//     hospital: String
//   }
// });

// const Employee = mongoose.model("Employee", employeeSchema);

// // ✅ Twilio Setup
// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const client = twilio(accountSid, authToken);

// // ✅ Route: Send SOS Message
// app.post("/send-messages", async (req, res) => {
//   try {
//     const { message, recipients } = req.body;

//     if (!message || !recipients) {
//       return res.status(400).json({ success: false, error: "Message and recipients are required." });
//     }

//     const msg = await client.messages.create({
//       body: message,
//       from: process.env.TWILIO_PHONE_NUMBER,
//       to: recipients
//     });

//     res.json({ success: true, sid: msg.sid });
//   } catch (error) {
//     console.error("❌ Twilio Error:", error.message);
//     res.status(500).json({ success: false, error: error.message });
//   }
// });

// // ✅ Route: Fetch Employee Data
// app.get("/employee/:id", async (req, res) => {
//   try {
//     const employee = await Employee.findById(req.params.id);
//     if (!employee) {
//       return res.status(404).json({ error: "Employee not found" });
//     }
//     res.json(employee);
//   } catch (error) {
//     console.error("❌ Error fetching employee data:", error.message);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

// // ✅ Start Server
// const PORT = process.env.PORT || 10000;
// app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));

import axios from "axios"; // ✅ Use ES Modules

document.getElementById("toggleDarkMode").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.getElementById("toggleDarkMode").innerText = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// ✅ Use backend URL dynamically
const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "https://backend-sdye.onrender.com";

// Extract employee ID from URL and fetch data
const urlParams = new URLSearchParams(window.location.search);
const employeeId = urlParams.get('id');

if (employeeId) {
    axios.get(`${backendUrl}/employee/${employeeId}`)
        .then(response => {
            const employee = response.data;
            document.querySelector('.profile-details').innerHTML = `
                <p><strong>Employee ID:</strong> ${employee._id}</p>
                <p><strong>Name:</strong> ${employee.name}</p>
                <p><strong>Department:</strong> ${employee.department}</p>
                <p><strong>Designation:</strong> ${employee.designation}</p>
                <p><strong>Mobile Number:</strong> ${employee.phone}</p>
                <p><strong>Blood Group:</strong> ${employee.medical_info.blood_group}</p>
                <p><strong>Health Conditions:</strong> ${employee.medical_info.medical_conditions.join(', ')}</p>
                <p><strong>Allergies:</strong> ${employee.medical_info.allergies.join(', ')}</p>
                <p><strong>Current Medications:</strong> ${employee.medical_info.medications.join(', ')}</p>
                
                <h3>Emergency Contact</h3>
                <p><strong>Name:</strong> ${employee.emergency_contact.name}</p>
                <p><strong>Relation:</strong> ${employee.emergency_contact.relation}</p>
                <p><strong>Phone:</strong> ${employee.emergency_contact.phone}</p>
                
                <h3>Doctor's Contact</h3>
                <p><strong>Name:</strong> ${employee.doctor_contact.name}</p>
                <p><strong>Hospital:</strong> ${employee.doctor_contact.hospital}</p>
                <p><strong>Phone:</strong> ${employee.doctor_contact.phone}</p>
            `;

            // Update recipients field
            const recipientNumbers = [
                employee.phone,
                employee.emergency_contact.phone,
                employee.doctor_contact.phone
            ].join(',');
            document.getElementById('recipients').value = recipientNumbers;
        })
        .catch(error => {
            console.error('❌ Error fetching employee data:', error);
            document.querySelector('.profile-details').innerHTML = '<p>Error loading employee data</p>';
        });
}

// ✅ SOS form submission handler
document.getElementById("sosForm").addEventListener("submit", (event) => {
    event.preventDefault();
    
    const resultSection = document.getElementById("resultSection");
    const message = document.getElementById("message").value;
    const recipients = document.getElementById("recipients").value.split(",");
    const spinner = document.getElementById("loadingSpinner");

    resultSection.innerText = "⏳ Sending SOS message...";
    spinner.style.display = "block";

    axios.post(`${backendUrl}/send-messages`, { message, recipients })
        .then(response => {
            spinner.style.display = "none";
            resultSection.innerText = response.data.success ? "✅ SOS message sent successfully!" : "❌ Failed to send message.";
        })
        .catch(() => {
            spinner.style.display = "none";
            resultSection.innerText = "❌ Error: Could not send SOS message.";
        });
});
