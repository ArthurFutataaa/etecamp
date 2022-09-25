function clicou() {
    document.getElementById("agradecimento").innerHTML = "<b> Obrigado por clicar</b>"
}

function redirecionar() {
    window.open("https://ggloballabs.academy/");
}

function trocar(elemento) {
    elemento.innerHTML = "Obrigado por passar o mouse"
}

function voltar(elemento) {
    document.getElementById("mouseover").innerHTML = "Passe o mouse aqui";
}

function load() {
    alert("Pagina carregada");
}

function funçãoChange(elemento) {
    console.log(elemento.value)
}