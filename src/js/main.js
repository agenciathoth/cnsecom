const { hash } = window.location;

if (hash) {
  const contentSection = document.querySelector(".s-content");

  contentSection.scrollIntoView({ behavior: "smooth" });
}
