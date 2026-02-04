// const ring = document.querySelector(".cursor-ring");

// window.addEventListener("mousemove", (e) => {
//   ring.style.top = `${e.clientY}px`;
//   ring.style.left = `${e.clientX}px`;
// });

const ring = document.querySelector(".cursor-ring");

let mouseX = 0;
let mouseY = 0;
let ringX = 0;
let ringY = 0;

window.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animate() {
  ringX += (mouseX - ringX) * 0.3;
  ringY += (mouseY - ringY) * 0.3;

  ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;

  // Detect interactive elements
  const hoverTargets = document.querySelectorAll(
    "a, button, .cta, [role='button']"
  );

  hoverTargets.forEach((elem) => {
    elem.addEventListener("mouseenter", () => {
      ring.classList.add("is-hovering");
    });

    elem.addEventListener("mouseleave", () => {
      ring.classList.remove("is-hovering");
    });
  });

  requestAnimationFrame(animate);
}

animate();
