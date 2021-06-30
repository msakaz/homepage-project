function resizeWindow(event) {
  var navItem = document.getElementById("nav-item-id")
  console.log(navItem)
  var humbergerMenu = document.getElementById("humberger-btn")
  console.log(humbergerMenu)
  var navMenu = document.getElementById("nav_item_area")
  console.log(navMenu)



  var variableWindow = window.innerWidth;
  if (variableWindow < 650) {
    navItem.style.visibility = "hidden";
  } else if (variableWindow >= 650) {
    navItem.style.visibility = "visible";
  }

  if (variableWindow >= 650) {
    humbergerMenu.style.visibility = "hidden";
  } else if (variableWindow < 650) {
    humbergerMenu.style.visibility = "visible";
  }

  if (variableWindow >= 650) {
    navMenu.style.visibility = "hidden"
  } else if (variableWindow < 650 && navMenu.style.visibility == "visible") {
    navMenu.style.visibility = "visible"
  }

}

function indicateHumMenu() {
  var navMenu = document.getElementById("nav_item_area")
  console.log(navMenu)

  if (navMenu.style.visibility == "visible") {
    navMenu.style.visibility = "hidden"
  } else {
    navMenu.style.visibility = "visible"
  }
}
window.addEventListener("resize", resizeWindow);
