const btn = document.getElementById("startBtn");

btn.addEventListener("click", () => {

    btn.innerHTML = "❤️ Chargement de ta surprise...";

    btn.disabled = true;

    setTimeout(() => {
        alert("Bienvenue Achabi ❤️\n\nLe voyage commence maintenant...");
    }, 2000);

});
