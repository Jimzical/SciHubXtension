function createLink(doi) {
    return "https://sci.bban.top/pdf/"+doi+".pdf"
}

function findDOI(html) {
    // The regular expression for a DOI
    const regex = /\b10\.\d{4,9}\/[-._;()/:A-Z0-9]+\b/i;
  
    // Search for a DOI in the HTML
    const match = regex.exec(html);
    
    // If a DOI is found, return it. Otherwise, return null.
    return match ? match[0] : null;
}

chrome.contextMenus.create({
    id: "findDOI",
    title: "Open PDF",
    contexts: ["page"]
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "findDOI") {
        chrome.tabs.executeScript(
            tab.id,
            { code: 'document.body.innerHTML' },
            (results) => {
                const doi = findDOI(results[0]);
                if (doi != null) {
                    chrome.tabs.create({ url: createLink(doi) });
                } else {
                    chrome.notifications.create({
                        type: 'basic',
                        iconUrl: 'SciHubXtension/images/icon32.png', // replace with your icon
                        title: 'No DOI found',
                        message: 'Could not find a DOI on this page.'
                    });
                }
            }
        );
    }
});