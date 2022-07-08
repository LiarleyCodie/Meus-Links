const schemeSwitchBtn = document.getElementById("schemeSwitch"); // Scheme Switch Button
const aLinks = Array.from(document.querySelectorAll("#list li a"));

aLinks.forEach(item => {
  if (item.getAttribute("href") === "#") {
    item.removeAttribute("target");
    item.addEventListener("click", event => {
      if (event) {
        alert("Essa página ainda não existe! :(");
      }
    })
  }
})

schemeSwitchBtn.addEventListener("click", switchScheme);

function switchScheme(event) {
  if (document.body.classList.contains("dark")) {
    schemeSwitchBtn.textContent = "Dark";
    document.body.classList.replace("dark", "light");
    localStorage.setItem("bodyScheme", "light")
    localStorage.setItem("schemeSwitchText", "Dark");
    return;
  }

  if (document.body.classList.contains("light")) {
    schemeSwitchBtn.textContent = "Light";
    document.body.classList.replace("light", "dark");
    localStorage.setItem("bodyScheme", "dark")
    localStorage.setItem("schemeSwitchText", "Light");
    return;
  }
}

if (localStorage.length >= 1) {
  document.body.setAttribute("class", localStorage.bodyScheme);
  schemeSwitchBtn.textContent = localStorage.schemeSwitchText;
}