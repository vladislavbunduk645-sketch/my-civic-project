const mainBtn = document.querySelector('.btn-main');

mainBtn.addEventListener('click', () => {
  // Эффект при клике
  mainBtn.style.transform = "scale(0.95)";
  setTimeout(() => {
    mainBtn.style.transform = "scale(1.05)";
  }, 100);
  
  alert("Вы успешно записались на тест-драйв Frontier Edition!");
});