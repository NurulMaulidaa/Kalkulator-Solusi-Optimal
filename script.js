function calculateChange() {
    const amount = document.getElementById('amount').value;
    if (amount === "" || amount < 0) {
        alert("Masukkan jumlah uang yang valid!");
        return;
    }

    const denominations = [1000, 500, 200, 100];
    let remainingAmount = parseInt(amount);
    const result = {};
    
    for (let coin of denominations) {
        result[coin] = Math.floor(remainingAmount / coin);
        remainingAmount %= coin;
    }

    displayResult(result);
}

function displayResult(result) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = "<h2>Hasil Penukaran Koin:</h2>";

    for (let coin in result) {
        resultDiv.innerHTML += `<p>${coin} Rupiah: ${result[coin]} koin</p>`;
    }
}
