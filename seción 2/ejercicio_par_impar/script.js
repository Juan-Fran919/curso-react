let numbers = [];

function addNumber() {
    const numberInput = document.getElementById('number-input');
    const number = parseInt(numberInput.value);
    if (!isNaN(number)) {
        numbers.push(number);
        numberInput.value = '';
        updateCounts();
        updateList();
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

function updateList() {
    const numberList = document.getElementById('number-list');
    const latestNumber = numbers[numbers.length - 1];
    const li = document.createElement('li');
    li.textContent = latestNumber;
    if (latestNumber % 2 === 0) {
        li.classList.add('even');
    } else {
        li.classList.add('odd');
    }
    numberList.appendChild(li);
}