let numbers = [];

function addNumber() {
    const numberInput = document.getElementById('number-input');
    const number = parseInt(numberInput.value);
    if (!isNaN(number)) {
        numbers.push(number);
        numberInput.value = '';
        updateCounts();
    }
}

function updateCounts() {
    const totalCount = document.getElementById('total-count');
    const evenCount = document.getElementById('even-count');
    const oddCount = document.getElementById('odd-count');
    totalCount.textContent = numbers.length;
    evenCount.textContent = numbers.filter(n => n % 2 === 0).length;
    oddCount.textContent = numbers.filter(n => n % 2 !== 0).length;
}