gsap.registerPlugin(ScrollTrigger);

const sections = document.querySelectorAll("section");

sections.forEach((section) => {
  const h2 = section.querySelector("h2");
  const ps = section.querySelectorAll("p");

  gsap
    .timeline({
      scrollTrigger: {
        trigger: section,
        markers: true,
        start: "top 50%",
        end: "+=200px",
        scrub: true,
      },
    })
    .from(h2, {
      opacity: 0,
    })
    .from(ps, {
      opacity: 0,
      y: 100,
      stagger: 0.5,
    });
});
