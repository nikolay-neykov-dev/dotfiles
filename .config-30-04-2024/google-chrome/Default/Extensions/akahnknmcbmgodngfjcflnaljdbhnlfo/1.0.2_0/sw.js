function onMessage(a){a.type="Move-Group-Window";const c=a.tabId,d=a.groupId;chrome.windows.create({focused:!0},function(b){chrome.tabGroups.move(d,{index:0,windowId:b.id},function(){chrome.tabs.update(c,{active:!0},function(){chrome.tabs.remove(b.tabs[0].id)})})})}function onInstalled(a){chrome.sidePanel.setPanelBehavior({openPanelOnActionClick:!0});a&&"install"==a.reason&&chrome.tabs.create({url:"guide.html"})}chrome.runtime.onInstalled.addListener(onInstalled);chrome.runtime.onMessage.addListener(onMessage);
