function toggleMenu() {
  const sidebar = document.getElementById("sidebar");
  if (sidebar.style.right === "0px") {
    sidebar.style.right = "-280px";
  } else {
    sidebar.style.right = "0px";
  }
}

