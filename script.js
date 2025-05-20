document.getElementById('toggle-mode').addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const icon = document.body.classList.contains('dark') ? '☀️' : '🌙';
  document.getElementById('toggle-mode').textContent = icon;
});
