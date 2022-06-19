window.onload = () => {
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");
  let count = 0;
  let x = 300,
    y = 350;
  let t = Date.now();
  let speed = 25;

  context.arc(x, y, 50, 0, 2 * Math.PI);
  context.fillStyle = "red";
  context.strokeStyle = "white";
  context.fill();
  context.stroke();

  document.onkeydown = () => {
    count++;
    y -= 25;
  };
  const draw = () => {
    const timePassed = (Date.now() - t) / 1000;
    t = Date.now();

    context.clearRect(0, 0, 600, 400);

    context.beginPath();
    context.arc(x, y, 50, 0, 2 * Math.PI);
    context.fillStyle = "red";
    context.strokeStyle = "white";
    context.fill();
    context.stroke();

    context.beginPath();
    context.font = "25px Arial";
    context.fillStyle = "white";
    context.fillText(`Count: ${count}`, 20, 30);

    if (y <= 350) {
      speed += 50 * timePassed;
      y += speed * timePassed;
    } else count = 0;
    window.requestAnimationFrame(draw);
  };
  draw();
};
