(function (context) {
  const objectContextName = '_EduardoCuomo_meetAutoJoin';

  // Only load once on the page
  if (context[objectContextName]) {
    return;
  }

  let timeInterval = null;

  function log(...args) {
    console.info('Meet Auto-Join:', ...args);
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
    timeInterval = setInterval(function () {
      log('Running...');
    }, 1000);
  }

  context[objectContextName] = {
    start,
    stop,
  };
})(window || globalThis);
