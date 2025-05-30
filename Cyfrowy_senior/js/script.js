function dodajKomentarz() {
    const textarea = document.querySelector("textarea");
    const komentarz = textarea.value.trim();
    if (komentarz) {
        const div = document.createElement("div");
        div.textContent = komentarz;
        document.getElementById("komentarze").appendChild(div);
        textarea.value = "";
    }
}
