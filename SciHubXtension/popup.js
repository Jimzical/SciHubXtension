document.addEventListener('DOMContentLoaded', () => {

    const dialogBox = document.getElementById('dialog-box');
    const query = { active: true, currentWindow: true };

    chrome.tabs.query(query, (tabs) => {
        const activeTab = tabs[0];
        chrome.tabs.executeScript(
            activeTab.id,
            { code: 'document.body.innerHTML' },
            (results) => {
                const doi = findDOI(results[0]);
                
                if (doi == null) {
                    dialogBox.innerHTML = '<div class="alert alert-warning" role="alert">DOI not found</div>';
                    return;
                }
                else{
                    dialogBox.innerHTML = '<div class="alert alert-warning " role="alert" style=" background-color: rgba(164, 74, 26, 0.6);">DOI found: '+doi+'</div>';
                }
                // dialogBox.innerHTML = "<a href='"+createLink(doi)+"' target='_blank', class='big-link'>Go to PDF</a>";
                dialogBox.innerHTML = "<a href='"+createLink(doi)+"' target='_blank', class='big-link badge badge-primary'>Go to PDF</a>";
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