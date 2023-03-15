chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "checkGrammar") {
      const text = request.text;
      const apiKey = "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";
      const url = "https://api.openai.com/v2/check";
      const data = JSON.stringify({
        text: text,
        model: "text-davinci-002",
        mode: "proof"
      });
  
      const xhr = new XMLHttpRequest();
      xhr.withCredentials = true;
      xhr.addEventListener("readystatechange", function() {
        if (this.readyState === 4) {
          const response = JSON.parse(this.responseText);
          sendResponse({ result: response });
        }
      });
  
      xhr.open("POST", url);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.setRequestHeader("Authorization", `Bearer ${apiKey}`);
      xhr.send(data);
  
      return true;
    }
  });
