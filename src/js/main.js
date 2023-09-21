const contentSection = document.querySelector(".s-content");

const { hash } = window.location;

if (hash) {
  contentSection.scrollIntoView({ behavior: "smooth" });
}
