function generateCard() {
    var userName = document.getElementById('name').value;
    document.getElementById('cardName').innerText = userName;
    document.getElementById('cardOutput').style.display = 'block';
    document.getElementById('cardForm').style.display = 'none';
}

