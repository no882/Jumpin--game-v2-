const player = document.getElementById("player");
const obstacle = document.getElementById("obstacle");

// حرکت دینے کے لیے
function jump() {
  if (!player.classList.contains("jump")) {
    player.classList.add("jump");
    setTimeout(() => {
      player.classList.remove("jump");
    }, 500);
  }
}

// جمپ کی کلاس
document.addEventListener("keydown", jump);

// obstacle حرکت میں
setInterval(() => {
  let playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
  let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));

  if (obstacleLeft < 100 && obstacleLeft > 0 && playerTop >= 250) {
    alert("Game Over");
  }
}, 10);

// obstacle کو animate کرنا
obstacle.style.animation = "moveObstacle 2s infinite linear";
