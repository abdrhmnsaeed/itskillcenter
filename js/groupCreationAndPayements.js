let notificationBtn = document.querySelector(".btn2");

notificationBtn.addEventListener("click", () => {
  notificationBtn.classList.toggle("transform");
});

/* Script for range canvas */

function drawCanvas(value) {
  const canvas = document.getElementById("rangecanvas");
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;

  // Clear the canvas
  ctx.clearRect(0, 0, width, height);

  // Draw a filled rectangle based on the slider value
  ctx.fillStyle = "#007bff";
  ctx.fillRect(0, 0, (value / 100) * width, height);

  // Optionally, draw the value as text
  ctx.fillStyle = "#000000";
  ctx.font = "20px Arial";
  ctx.fillText(`Value: ${value}`, 10, 30);
}

// Initialize the canvas with the default value
drawCanvas(document.getElementById("rangeInput").value);
