(function (context) {
  const objectContextName = '_EduardoCuomo_meetAutoJoin';

  // Only load once on the page
  if (context[objectContextName]) {
    return;
  }

  // Check interval in ms
  const checkInterval = 1000;

  // const btn = '#yDmH0d > div.llhEMd.iWO5td > div > div.g3VIld.BgY0gf.vDc8Ic.J9Nfi.iWO5td > div.XfpsVe.J9fJmf > div:nth-child(2) > span > span';
  const btn = '#yDmH0d > div.llhEMd.iWO5td > div > div.g3VIld.iUQSvf.vDc8Ic.J9Nfi.iWO5td > div.XfpsVe.J9fJmf > div:nth-child(2) > span > span';

  let timeInterval = null;

  function log(...args) {
    console.info('Meet Auto-Join:', ...args);
  }

  function acceptPopup() {
    const x = document.querySelector(btn);
    if (x) {
      log('Aceptando...');
      x.click();
    }
  }

  function stop() {
    if (timeInterval) {
      clearInterval(timeInterval);
      timeInterval = null;
      log('Stop');
    }
  }

  function start() {
    stop();
    log('Start');
    timeInterval = setInterval(acceptPopup, checkInterval);
  }

  context[objectContextName] = {
    start,
    stop,
  };

  log(`


    MEET AUTO-JOIN READY!


  `);
})(window || globalThis);
