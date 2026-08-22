async function loadComponent(id, file) {
    const element = document.getElementById(id);
    const response = await fetch(file);
    element.innerHTML = await response.text();
}

loadComponent("header", "components/header.html");
loadComponent("main","components/main.html");
loadComponent("footer", "components/footer.html");