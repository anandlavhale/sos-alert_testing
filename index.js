document.getElementById("toggleDarkMode").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.getElementById("toggleDarkMode").innerText = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
  });
  
  document.getElementById("sosForm").addEventListener("submit", (event) => {
    event.preventDefault();
    
    const resultSection = document.getElementById("resultSection");
    const message = document.getElementById("message").value;
    const recipients = document.getElementById("recipients").value.split(",");
    const spinner = document.getElementById("loadingSpinner");
  
    resultSection.innerText = "⏳ Sending SOS message...";
    spinner.style.display = "block"; // Show spinner
  
    fetch("http://localhost:3000/send-messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, recipients }),
    })
      .then((resp) => resp.json())
      .then((body) => {
        spinner.style.display = "none"; // Hide spinner
        resultSection.innerText = body.success ? "✅ SOS message sent successfully!" : "❌ Failed to send message.";
      })
      .catch(() => {
        spinner.style.display = "none"; // Hide spinner
        resultSection.innerText = "❌ Error: Could not send SOS message.";
      });
  });
  