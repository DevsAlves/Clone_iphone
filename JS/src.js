const buttons = document.querySelectorAll("#image-picker li");
const image = document.querySelector("#product-image");

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        console.log(e);

        // Removando a classe de selected dos itemns 
        buttons.forEach((btn) =>
            btn.querySelector(".color").classList.remove("selected")
        );

        // Pegando o alvo clicado
        const button = e.target;

        // Pegando ID do botão clicado
        const id = button.getAttribute("id");

        // Adicionando a classe
        button.querySelector(".color").classList.add("selected");

        // Adicionando a animação 
        image.classList.add("changing");

        // Adicionando a imagem com base no ID
        image.setAttribute("src", `img/iphone_${id}.jpg`);

        // Removendo a animação após 2 milisegundos
        setTimeout(() => {
            image.classList.toggle("changing");
        }, 100);
    });
});