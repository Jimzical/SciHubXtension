document.addEventListener('DOMContentLoaded', () => {

    const dialogBox = document.getElementById('dialog-box');
    const query = { active: true, currentWindow: true };

    chrome.tabs.query(query, (tabs) => {
        const activeTab = tabs[0];
        chrome.tabs.executeScript(
            activeTab.id,
            { code: 'document.body.innerHTML' },
            (results) => {
                if (!results || results.length === 0) {
                    // console.error('No results returned from executeScript. This may be due to the script not being injected correctly, or the script not returning any results.');
                    // dialogBox.innerHTML = '<div class="alert alert-warning" role="alert">Unable to retrieve data from the current page. Please ensure the page is fully loaded and try again.</div>';
                    dialogBox.innerHTML = '<div class="alert alert-warning" role="alert">This extension doesn\'t work on Chrome\'s New Tab page. Please navigate to a different page and try again.</div>';
                    return;
                }
                const doi = findDOI(results[0]);
                
                if (doi == null) {
                    dialogBox.innerHTML = '<div class="alert alert-warning" role="alert">DOI not found</div>';
                    return;
                }
                else{
                    // dialogBox.innerHTML = '<div class="alert alert-warning " role="alert" style=" background-color: rgba(164, 74, 26, 0.6);">DOI found: '+doi+'</div>';
                    // Create the notification
                    chrome.notifications.create('doiFound', {
                        type: 'basic',
                        iconUrl: 'images/icon32.png',
                        title: 'DOI Found',
                        message: 'DOI: ' + doi
                    }, function(notificationId) {});

                    // Listen for when the notification is clicked
                    chrome.notifications.onClicked.addListener(function(notificationId) {
                        // Check if the clicked notification is the one we created
                        if (notificationId === 'doiFound') {
                            // Open a new tab with the desired URL
                            chrome.tabs.create({ url: createLink(doi) });
                        }
                    });


                    dialogBox.innerHTML = `
                    <a href="${createLink(doi)}" target="_blank" class="big-link badge badge-primary">Go to PDF</a>
                    <br/>
                    <br/>
                    <a href="${createLink(doi.toLowerCase())}" target="_blank" class="small-link badge badge-pill badge-secondary">Lowercase Alt</a>
                     `;
                }
            }
        );
    });
});

function createLink(doi) {
    return "https://sci.bban.top/pdf/"+doi+".pdf"
}

function findDOI(html) {
    // The regular expression for a DOI
    const regex = /\b10\.\d{4,9}\/[-._;()/:A-Z0-9]+\b/i;
  
    // Search for a DOI in the HTML
    const match = regex.exec(html);
    
    console.log(match);
    // If a DOI is found, return it. Otherwise, return null.
    return match ? match[0] : null;
}