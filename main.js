(() => {
  let seconds = 5;
  const display = document.getElementById('secs');
  const timer = setInterval(() => {
    seconds -= 1;
    display.textContent = String(seconds).padStart(2, '0');
    if (seconds === 0) {
      clearInterval(timer);
      document.getElementById('cd-label').textContent = 'Tap the button to join now';
    }
  }, 1000);

  document.querySelectorAll('[data-dialog]').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      document.getElementById(link.dataset.dialog).showModal();
    });
  });
})();
