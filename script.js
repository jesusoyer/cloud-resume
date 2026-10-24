// The address of your visitor counter API
const API_URL = "https://9dgik3c4lh.execute-api.us-east-1.amazonaws.com/count";

async function updateVisitorCount() {
  const counter = document.getElementById("visitor-count");

  try {
    // 1. Call the API: this records the visit and returns the new total
    const response = await fetch(API_URL, { method: "POST" });

    if (!response.ok) {
      throw new Error(`API responded with ${response.status}`);
    }

    // 2. Read the JSON reply, e.g. { "count": 42 }
    const data = await response.json();

    // 3. Show the number on the page
    counter.textContent = data.count.toLocaleString();
  } catch (error) {
    // If anything fails, the page still works; the counter just shows a dash
    console.error("Visitor counter failed:", error);
    counter.textContent = "–";
  }
}

updateVisitorCount();