// // document.getElementById("toggleDarkMode").addEventListener("click", () => {
// //     document.body.classList.toggle("dark-mode");
// //     document.getElementById("toggleDarkMode").innerText = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
// //   });
  
// //   document.getElementById("sosForm").addEventListener("submit", (event) => {
// //     event.preventDefault();
    
// //     const resultSection = document.getElementById("resultSection");
// //     const message = document.getElementById("message").value;
// //     const recipients = document.getElementById("recipients").value.split(",");
// //     const spinner = document.getElementById("loadingSpinner");
  
// //     resultSection.innerText = "⏳ Sending SOS message...";
// //     spinner.style.display = "block"; // Show spinner
  
// //     fetch("http://localhost:3000/send-messages", {
// //       method: "POST",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify({ message, recipients }),
// //     })
// //       .then((resp) => resp.json())
// //       .then((body) => {
// //         spinner.style.display = "none"; // Hide spinner
// //         resultSection.innerText = body.success ? "✅ SOS message sent successfully!" : "❌ Failed to send message.";
// //       })
// //       .catch(() => {
// //         spinner.style.display = "none"; // Hide spinner
// //         resultSection.innerText = "❌ Error: Could not send SOS message.";
// //       });
// //   });
  

// //-------------------------------------------------------------------------------------------------------



//  // document.getElementById("toggleDarkMode").addEventListener("click", () => {
// //     document.body.classList.toggle("dark-mode");
// //     document.getElementById("toggleDarkMode").innerText = document.body.classList.contains("dark-mode") ? "☀" : "🌙";
// //   });
  
// //   document.getElementById("sosForm").addEventListener("submit", (event) => {
// //     event.preventDefault();
    
// //     const resultSection = document.getElementById("resultSection");
// //     const message = document.getElementById("message").value;
// //     const recipients = document.getElementById("recipients").value.split(",");
// //     const spinner = document.getElementById("loadingSpinner");
  
// //     resultSection.innerText = "⏳ Sending SOS message...";
// //     spinner.style.display = "block"; // Show spinner
  
// //     fetch("http://localhost:3000/send-messages", {
// //       method: "POST",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify({ message, recipients }),
// //     })
// //       .then((resp) => resp.json())
// //       .then((body) => {
// //         spinner.style.display = "none"; // Hide spinner
// //         resultSection.innerText = body.success ? "✅ SOS message sent successfully!" : "❌ Failed to send message.";
// //       })
// //       .catch(() => {
// //         spinner.style.display = "none"; // Hide spinner
// //         resultSection.innerText = "❌ Error: Could not send SOS message.";
// //       });
// //   });
  

// // 2. index.js - Complete updated file
// document.getElementById("toggleDarkMode").addEventListener("click", () => {
//   document.body.classList.toggle("dark-mode");
//   document.getElementById("toggleDarkMode").innerText = document.body.classList.contains("dark-mode") ? "☀" : "🌙";
// });

// // Extract employee ID from URL and fetch data
// const urlParams = new URLSearchParams(window.location.search);
// const employeeId = urlParams.get('id');

// if (employeeId) {
//   fetch(`http://localhost:3000/employee/${employeeId}`)
//       .then(response => response.json())
//       .then(employee => {
//           if (employee) {
//               // Update the profile details
//               document.querySelector('.profile-details').innerHTML = `
//                   <p><strong>Employee ID:</strong> ${employee._id}</p>
//                   <p><strong>Name:</strong> ${employee.name}</p>
//                   <p><strong>Department:</strong> ${employee.department}</p>
//                   <p><strong>Designation:</strong> ${employee.designation}</p>
//                   <p><strong>Mobile Number:</strong> ${employee.phone}</p>
//                   <p><strong>Blood Group:</strong> ${employee.medical_info.blood_group}</p>
//                   <p><strong>Health Conditions:</strong> ${employee.medical_info.medical_conditions.join(', ')}</p>
//                   <p><strong>Allergies:</strong> ${employee.medical_info.allergies.join(', ')}</p>
//                   <p><strong>Current Medications:</strong> ${employee.medical_info.medications.join(', ')}</p>
                  
//                   <h3>Emergency Contact</h3>
//                   <p><strong>Name:</strong> ${employee.emergency_contact.name}</p>
//                   <p><strong>Relation:</strong> ${employee.emergency_contact.relation}</p>
//                   <p><strong>Phone:</strong> ${employee.emergency_contact.phone}</p>
                  
//                   <h3>Doctor's Contact</h3>
//                   <p><strong>Name:</strong> ${employee.doctor_contact.name}</p>
//                   <p><strong>Hospital:</strong> ${employee.doctor_contact.hospital}</p>
//                   <p><strong>Phone:</strong> ${employee.doctor_contact.phone}</p>
//               `;

//               // Update recipients field with all emergency contacts
//               const recipientNumbers = [
//                   employee.phone,
//                   employee.emergency_contact.phone,
//                   employee.doctor_contact.phone
//               ].join(',');
//               document.getElementById('recipients').value = recipientNumbers;
//           }
//       })
//       .catch(error => {
//           console.error('Error fetching employee data:', error);
//           document.querySelector('.profile-details').innerHTML = '<p>Error loading employee data</p>';
//       });
// }

// // Existing SOS form submission handler
// document.getElementById("sosForm").addEventListener("submit", (event) => {
//   event.preventDefault();
  
//   const resultSection = document.getElementById("resultSection");
//   const message = document.getElementById("message").value;
//   const recipients = document.getElementById("recipients").value.split(",");
//   const spinner = document.getElementById("loadingSpinner");

//   resultSection.innerText = "⏳ Sending SOS message...";
//   spinner.style.display = "block";

//   fetch("http://localhost:3000/send-messages", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ message, recipients }),
//   })
//       .then((resp) => resp.json())
//       .then((body) => {
//           spinner.style.display = "none";
//           resultSection.innerText = body.success ? "✅ SOS message sent successfully!" : "❌ Failed to send message.";
//       })
//       .catch(() => {
//           spinner.style.display = "none";
//           resultSection.innerText = "❌ Error: Could not send SOS message.";
//       });
// });

// Dark mode toggle functionality
document.getElementById("toggleDarkMode").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.getElementById("toggleDarkMode").innerText = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Extract employee ID from URL and fetch data
const urlParams = new URLSearchParams(window.location.search);
const employeeId = urlParams.get('id');

if (employeeId) {
    fetch(`http://localhost:3000/employee/${employeeId}`)
        .then(response => response.json())
        .then(employee => {
            if (employee) {
                // Update the profile details
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

                // Update recipients field with all emergency contacts
                const recipientNumbers = [
                    employee.phone,
                    employee.emergency_contact.phone,
                    employee.doctor_contact.phone
                ].join(',');
                document.getElementById('recipients').value = recipientNumbers;
            }
        })
        .catch(error => {
            console.error('Error fetching employee data:', error);
            document.querySelector('.profile-details').innerHTML = '<p>Error loading employee data</p>';
        });
}

// SOS form submission handler
document.getElementById("sosForm").addEventListener("submit", (event) => {
    event.preventDefault();
    
    const resultSection = document.getElementById("resultSection");
    const message = document.getElementById("message").value;
    const recipients = document.getElementById("recipients").value.split(",");
    const spinner = document.getElementById("loadingSpinner");
  
    resultSection.innerText = "⏳ Sending SOS message...";
    spinner.style.display = "block";
  
    fetch("http://localhost:3000/send-messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, recipients }),
    })
        .then((resp) => resp.json())
        .then((body) => {
            spinner.style.display = "none";
            resultSection.innerText = body.success ? "✅ SOS message sent successfully!" : "❌ Failed to send message.";
        })
        .catch(() => {
            spinner.style.display = "none";
            resultSection.innerText = "❌ Error: Could not send SOS message.";
        });
});
