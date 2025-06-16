document.addEventListener('DOMContentLoaded', function () {
  var openBtns = document.querySelectorAll('.open-terminal');
  var modal = document.getElementById('terminal-modal');
  var closeBtn = document.getElementById('close-terminal');
  if (modal && closeBtn) {
    openBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        modal.style.display = 'block';
      });
    });
    closeBtn.addEventListener('click', function () {
      modal.style.display = 'none';
    });
  }
});
