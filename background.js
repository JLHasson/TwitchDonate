//Talk to the embed and let it do server stuff (might not actually need this)
function checkForValidUrl(tabId, changeInfo, tab) {
    // If the tabs url starts with "http://specificsite.com"...
    if (tab.url.indexOf('http://www.twitch.tv') == 0) {
        // ... show the page action.
        chrome.pageAction.show(tabId);
    }
};

// Listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(checkForValidUrl);
