var enabled = true;
chrome.webRequest.onBeforeRequest.addListener(
	function(details) {
		return {cancel: enabled };
	},
	{urls: ["*://*.coinhive.com/", "*://*.coinhive.com/*", "*://*.coin-hive.com/", "*://*.coin-hive.com/*"]},
	["blocking"]
);