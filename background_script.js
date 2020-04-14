
const devSuffix = '/_ui/common/apex/debug/ApexCSIPage'
chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
        let url = tabs[0].url
        let n
        if (url.includes('/lightning')) {
            n = url.split('/lightning')[0]
        } else if (url.includes('/home')) {
            n = url.split('/home')[0]
        }
        return chrome.tabs.create({ 'url': n + devSuffix })
    });
});


