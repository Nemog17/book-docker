document.addEventListener('DOMContentLoaded', function () {
  var openBtns = document.querySelectorAll('.open-terminal');
  var modal = document.getElementById('terminal-modal');
  var closeBtn = document.getElementById('close-terminal');
  var windowDiv = modal ? modal.querySelector('.terminal-window') : null;
  var isDragging = false;
  var offsetX = 0;
  var offsetY = 0;
  if (modal && closeBtn) {
    openBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        modal.style.display = 'block';
      });
    });
    closeBtn.addEventListener('click', function () {
      modal.style.display = 'none';
    });

    if (windowDiv) {
      windowDiv.addEventListener('pointerdown', function (e) {
        if (e.target === closeBtn) return;
        isDragging = true;
        offsetX = e.clientX - windowDiv.offsetLeft;
        offsetY = e.clientY - windowDiv.offsetTop;
        document.body.classList.add('no-select');
        window.addEventListener('pointermove', onDrag);
        window.addEventListener('pointerup', endDrag);
      });
    }
  }

  function onDrag(e) {
    if (!isDragging) return;
    windowDiv.style.left = e.clientX - offsetX + 'px';
    windowDiv.style.top = e.clientY - offsetY + 'px';
  }

  function endDrag() {
    isDragging = false;
    document.body.classList.remove('no-select');
    window.removeEventListener('pointermove', onDrag);
    window.removeEventListener('pointerup', endDrag);
  }
});
