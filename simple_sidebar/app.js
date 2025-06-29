const menuBtn = document.querySelector(".menu");
const sidebar = document.querySelector(".sidebar");

// Adding event listener to menu button
menuBtn.addEventListener("click", () => {
  sidebar.classList.add("showSidebar");
});

// Adding event listener to document
document.addEventListener("mouseup", (e) => {
  if (!sidebar.contains(e.target)) {
    sidebar.classList.remove("showSidebar");
  }
});
