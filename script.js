const dialog = document.getElementById('figure-dialog');
let figureTrigger;
document.querySelectorAll('.zoomable').forEach(link => {
  link.addEventListener('click', event => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || typeof dialog.showModal !== 'function') return;
    event.preventDefault();
    figureTrigger = link;
    const img = document.getElementById('expanded-figure');
    img.src = link.href;
    img.alt = link.querySelector('img').alt;
    document.getElementById('expanded-caption').textContent = link.dataset.caption;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
  });
});
document.getElementById('close-figure').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) { const r = dialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close(); } });
dialog.addEventListener('close', () => { document.body.style.overflow = ''; figureTrigger?.focus(); });
