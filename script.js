// Кнопка "Подробнее"
document.getElementById("moreBtn").addEventListener("click", () => {
  const moreText = document.getElementById("moreText");
  moreText.classList.toggle("hidden");
});

// Разворачиваем список навыков
document.getElementById("toggleSkills").addEventListener("click", () => {
  const skills = document.getElementById("skillsList");
  skills.classList.toggle("hidden");
});
