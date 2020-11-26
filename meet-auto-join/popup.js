const btnStart = document.getElementById('btn-start');
const btnStop = document.getElementById('btn-stop');

function updateStatus(status) {
  if (status) {
    btnStart.style.display = 'none';
    btnStop.style.display = 'block';
  } else {
    btnStop.style.display = 'none';
    btnStart.style.display = 'block';
  }
}

chrome.storage.sync.get('status', function (data) {
  updateStatus(data.status === 'on');
});

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  chrome.tabs.executeScript(
    tabs[0].id,
    {
      file: './pageScript.js'
    });
});

function _onClick(action) {
  return function () {
    chrome.storage.sync.set({
      status: action === 'start' ? 'on' : 'off',
    }, function () {
      console.info("Meet Auto-Join updated", action);
    });

    updateStatus(action === 'start');

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.executeScript(
        tabs[0].id,
        {
          code: `_EduardoCuomo_meetAutoJoin.${action}()`,
        });
    });

    // Close popup
    window.close();
  };
}

btnStart.onclick = _onClick('start');
btnStop.onclick = _onClick('stop');
