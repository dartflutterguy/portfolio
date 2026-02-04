document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".work-tabs .tab");
  const projects = document.querySelectorAll(".project-row");

  const OUT_DURATION = 220;
  const IN_DURATION = 320;
  const OFFSET = 16;
  const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      if (tab.classList.contains("active")) return;

      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      const filter = tab.dataset.filter;

      // Fade OUT (down)
      projects.forEach((project) => {
        if (project.style.display !== "none") {
          project.style.transition = `opacity ${OUT_DURATION}ms ${EASE}, transform ${OUT_DURATION}ms ${EASE}`;
          project.style.opacity = "0";
          project.style.transform = `translateY(${OFFSET}px)`;
        }
      });

      // Filter + prepare IN state
      setTimeout(() => {
        projects.forEach((project) => {
          const category = project.dataset.category.toLowerCase();
          const show = filter === "all" || category.includes(filter);

          if (show) {
            project.style.display = "grid";
            project.style.opacity = "0";
            project.style.transform = `translateY(${OFFSET}px)`;
          } else {
            project.style.display = "none";
          }
        });

        // Fade IN (up)
        requestAnimationFrame(() => {
          projects.forEach((project) => {
            if (project.style.display !== "none") {
              project.style.transition = `opacity ${IN_DURATION}ms ${EASE}, transform ${IN_DURATION}ms ${EASE}`;
              project.style.opacity = "1";
              project.style.transform = "translateY(0)";
            }
          });
        });
      }, OUT_DURATION);
    });
  });
});

// First time the section enters the viewport Scroll reveal
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".project-row");

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("is-visible");
            entry.target.classList.remove("is-hidden");
          }, 80); // breath delay

          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 },
  );

  items.forEach((item) => {
    // 🔑 clear inline styles set by filter animations
    item.style.opacity = "";
    item.style.transform = "";
    item.style.transition = "";

    item.classList.add("is-hidden");
    observer.observe(item);
  });
});
