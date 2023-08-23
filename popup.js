// Listen for messages from the background script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log("i am here at popup.js 1")
  // Check if the message is intended for the popup
  if (request.popupMessage) {
    console.log("i am here at popup.js 2")
    const popupMessage = request.popupMessage;
    console.log("Message from background:", popupMessage);

    // You can update the popup's content or UI based on the received message
    // For example, update a text element with the message content
    console.log("i am here at popup.js 3")
    document.getElementById("popup-message").textContent = popupMessage;
    console.log("i am here at popup.js 4")
    // Send a response back to the background script if needed
    sendResponse({ popupResponse: "Message received in popup!" });
    console.log("i am here at popup.js 5")
  }
});
