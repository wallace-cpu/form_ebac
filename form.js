
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    var campoA = parseFloat(document.getElementById('campoA').value);
    var campoB = parseFloat(document.getElementById('campoB').value);

    
    if (campoB > campoA) {
        document.getElementById('result').innerText = "Formulário válido!";
        document.getElementById('result').style.color = "green";
    } else {
        document.getElementById('result').innerText = "Campo B deve ser maior que Campo A!";
        document.getElementById('result').style.color = "red";
    }
});