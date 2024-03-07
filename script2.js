//Muda a cor do texto
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
    if (color === 'black') {
        document.getElementById('paragraph').style.color = 'white';
    } else {
        document.getElementById('paragraph').style.color = 'black';
    }
}

//Muda o texto quando clica no botão
function changeParagraphText(text) {
    document.getElementById('paragraph').innerText = text;
}

//Reseta a cor do fundo para branco
function resetStyles() {
    document.body.style.backgroundColor = "white";
    document.body.style.backgroundImage = "none";
}

//Adiciona o card pelo botão
function addCard() {
    var newCard = document.createElement("div");
    newCard.className = "card small-card";
    newCard.innerHTML = `
        <img src="gentegrande.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Gente grande.</h5>
            <p class="card-text">A morte do treinador de basquete de infância de velhos amigos reúne a turma no mesmo lugar que celebraram um campeonato anos atrás. Os amigos, acompanhados de suas esposas e filhos, descobrem que idade não significa o mesmo que maturidade.</p>
            <p class="card-text"><small class="text-muted">Lançamento: 24 de setembro de 2010.</small></p>
        </div>
    `;

    document.getElementById("cardContainer").appendChild(newCard);
}

//Muda o fundo
function changeBackgroundImage() {
    document.body.style.backgroundImage = "url('cidade.jpg')";
    document.getElementById('paragraph').style.color = 'black';
}
