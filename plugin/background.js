'use strict';

chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.sync.set({
    status: 'off',
  }, function () {
    console.info("Meet Auto-Join ready");
  });

  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {
              hostEquals: 'developer.chrome.com',
            },
          }),
        ],
        actions: [
          new chrome.declarativeContent.ShowPageAction(),
        ]
      },
    ]);
  });
});
