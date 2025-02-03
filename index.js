function abrirLink() {
    const links = {
        197350:"6x2.html",
        199240:"6x4.html"
    };

    const numero = parseInt(document.getElementById("inumero").value);

    if (links[numero]) {
        window.open(links[numero], '_blank');
    } 
    else {
        alert("Numero invalido. tente novamente");
    }
}