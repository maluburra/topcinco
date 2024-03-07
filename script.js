function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
    if (color === 'black') {
        document.getElementById('paragraph').style.color = 'white';
    } else {
        document.getElementById('paragraph').style.color = 'black';
    }
}

function changeParagraphText(text) {
    document.getElementById('paragraph').innerText = text;
}

function resetStyles() {
    document.body.style.backgroundColor = "white";
    document.body.style.backgroundImage = "none";
}


function addCard() {
    var newCard = document.createElement("div");
    newCard.className = "card small-card"; // Adiciona a classe "small-card" aqui
    newCard.innerHTML = `
        <img src="theboys.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">The Boys.</h5>
            <p class="card-text">A Terra é habitada por super-heróis que são um inspiração para a humanidade. Porém, esses protetores têm um lado sinistro que a maioria das pessoas desconhece. Se eles usam seus poderes para o mal, Hughie, Billy e o resto do time devem detê-los.</p>
            <p class="card-text"><small class="text-muted">26 de julho de 2019.</small></p>
        </div>
    `;

    document.getElementById("cardContainer").appendChild(newCard);
}


function changeBackgroundImage() {
    document.body.style.backgroundImage = "url('cidade.jpg')";
    document.getElementById('paragraph').style.color = 'black';
}
