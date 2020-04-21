
const devSuffix = '/_ui/common/apex/debug/ApexCSIPage'
chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
        let url = tabs[0].url
        const matches = url.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i)
        return chrome.tabs.create({ 'url': matches[0] + devSuffix })
    })
})