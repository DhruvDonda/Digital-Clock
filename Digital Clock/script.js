const time = document.getElementById("time");
const date = document.getElementById("date");
const day = document.getElementById("day");
const toggleBtn = document.getElementById("toggle-mode");

// Function to update the clock
function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    // Format time
    time.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    // Format date and day
    date.textContent = now.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
    day.textContent = dayNames[now.getDay()];
}

// Light/Dark mode toggle
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        toggleBtn.textContent = "Light Mode";
        toggleBtn.style.backgroundColor = "#f0f0f0";
        toggleBtn.style.color = "#333";
    } else {
        toggleBtn.textContent = "Dark Mode";
        toggleBtn.style.backgroundColor = "#333";
        toggleBtn.style.color = "#f0f0f0";
    }
});

// Update the clock every second
setInterval(updateClock, 1000);
updateClock(); 
