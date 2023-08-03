"use strict";
window.onload = () => {
    var _a;
    (_a = document.getElementById("exportButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
        chrome.tabs.query({}, (tabs) => {
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
