// script.js
function checkAnswer() {
    var userAnswer = document.getElementById('quizAnswer').value.toLowerCase().trim();
    var correctAnswer = "carros"; // Coloque aqui a resposta correta

    var resultMessage = document.getElementById('quizResult');
    
    if (userAnswer === correctAnswer) {
        resultMessage.textContent = "Acertou! Eu também adoro esse filme! 😍";
        resultMessage.style.color = "green";
    } else {
        resultMessage.textContent = "Ops, não é esse! Vamos tentar de novo. 😉";
        resultMessage.style.color = "red";
    }
}
