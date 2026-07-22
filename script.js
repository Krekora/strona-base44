const switchButtons = document.querySelectorAll('.switch-btn');
const optionPanels = document.querySelectorAll('.option-panel');

function activatePanel(targetId) {
  switchButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.target === targetId);
  });

  optionPanels.forEach((panel) => {
    panel.classList.toggle('active', panel.id === targetId);
  });
}

switchButtons.forEach((button) => {
  button.addEventListener('click', () => {
    activatePanel(button.dataset.target);
  });
});

// Demo submit handlers to show behavior before backend integration.
document.querySelectorAll('form').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('To jest demo frontendu. Podepnij API wysylki email, aby formularz dzialal produkcyjnie.');
  });
});
