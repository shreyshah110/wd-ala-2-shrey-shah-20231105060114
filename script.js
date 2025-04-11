// Bat animation
const bat = document.querySelector('.bat');
const ball = document.querySelector('.ball');

function swingBat() {
  bat.animate([
    { transform: 'rotate(0deg)' },
    { transform: 'rotate(-45deg)' },
    { transform: 'rotate(0deg)' }
  ], {
    duration: 1000,
    iterations: Infinity
  });
}

function moveBall() {
  ball.animate([
    { transform: 'translateX(0) translateY(0)' },
    { transform: 'translateX(-800px) translateY(-100px)' },
    { transform: 'translateX(0) translateY(0)' }
  ], {
    duration: 3000,
    iterations: Infinity
  });
}

swingBat();
moveBall();
