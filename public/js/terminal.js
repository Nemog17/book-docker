document.addEventListener('DOMContentLoaded', function () {
  var openBtn = document.getElementById('open-terminal');
  var modal = document.getElementById('terminal-modal');
  var closeBtn = document.getElementById('close-terminal');
  if (openBtn && modal && closeBtn) {
    openBtn.addEventListener('click', function () {
      modal.style.display = 'block';
    });
    closeBtn.addEventListener('click', function () {
      modal.style.display = 'none';
    });
  }
});
