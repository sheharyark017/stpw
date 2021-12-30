const nav = document.querySelector(".navbar");

const topSection = document.querySelector(".top-section");

const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) {
    nav.classList.add("sticky");
    nav.classList.remove("navbar-dark");
  } else {
    nav.classList.remove("sticky");
    nav.classList.add("navbar-dark");
  }
};

const headObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headObserver.observe(topSection);
("");
