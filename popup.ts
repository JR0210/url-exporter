window.onload = () => {
  document.getElementById("exportButton")?.addEventListener("click", () => {
    chrome.tabs.query({ currentWindow: true }, (tabs) => {
      const urls = tabs.map((tab) => tab.url);
      const csvContent = urls.join("\n");
      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
      const link = document.createElement("a");
      const url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", "tabs.csv");
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  });
};
