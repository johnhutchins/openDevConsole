
const devSuffix = '/_ui/common/apex/debug/ApexCSIPage'
chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
        let url = tabs[0].url
        // window.alert('HOST is: ' + window.location.host)
        window.alert('URL is: ' + url)
        return chrome.tabs.create({ 'url': url + devSuffix })
    });
});


