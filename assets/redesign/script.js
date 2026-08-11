const buttons = document.querySelectorAll('.tab-button');
const panels = document.querySelectorAll('.tab-panel');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const target = button.dataset.tab;
    buttons.forEach((item) => {
      const selected = item === button;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-selected', String(selected));
    });
    panels.forEach((panel) => panel.classList.toggle('active', panel.id === target));
  });
});
