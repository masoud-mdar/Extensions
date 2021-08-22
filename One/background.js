let color = "#3aa757"

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({color})
    console.log(`Default Background color set to ${color}`)
})