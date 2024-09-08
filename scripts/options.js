document.getElementById('addSite').addEventListener('click', () => {
    const siteInput = document.getElementById('siteInput')
    const site = siteInput.value
    if(site){
        chrome.storage.sync.get(['blockedSites']), (result) => {
            let sites = result.blockedSites || []
            sites.push(site)
            chrome.storage.sync.get({blockedSites:sites}, () => {
                siteInput.value = ''
                displaySites()
            })
        }
    }
})

function displaySites(){
    chrome.storage.sync.get(['blockedSites'], (result) => {
        const siteList = document.getElementById('siteList')
        siteList.innerHTML = ''
        (result.blockedSites || []).forEach(site => {
            const li = document.createElement('li')
            li.textContent = site
            siteList.appendChild(li)
        })
    })
}

displaySites()