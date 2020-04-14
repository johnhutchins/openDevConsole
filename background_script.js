
const devSuffix = '/_ui/common/apex/debug/ApexCSIPage to current url'
chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
        let url = tabs[0].url
        console.log(window.location.host)
        return chrome.tabs.create({ 'url': url + devSuffix })
    });
});


