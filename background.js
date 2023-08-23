// Listen for an event or perform an action that requires sending a message to the popup
async function sendMessageToPopup() {
    console.log("i am here at bck.js 1");
  
    try {
      // Send a message to the active tab's content script and wait for the execution
      const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
      console.log("i am here at bck.js 2");
      const activeTab = tabs[0];
  
      await chrome.scripting.executeScript({
        target: { tabId: activeTab.id },
        function: sendMessageToPopupScript,
      });
  
      console.log("i am here at bck.js 5");
    } catch (error) {
      console.error("Error executing script:", error);
    }
  }
  
  // Function to be injected into the active tab's content script
  function sendMessageToPopupScript() {
    const message = "Message from the background script!";
    console.log("i am here at bck.js 4");
    chrome.runtime.sendMessage({ popupMessage: message });
    console.log("i am here at bck.js 5");
  }
  
  // Call the function when needed
  // For example, in response to an extension event or user action
  console.log("i am here at bck.js 6");
  sendMessageToPopup();
  console.log("i am here at bck.js 7");
  