// Thêm ký tự vào màn hình
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Xóa toàn bộ màn hình
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Xóa ký tự cuối cùng
function deleteLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

// Tính toán kết quả
function calculateResult() {
    let display = document.getElementById('display').value;
    try {
        document.getElementById('display').value = eval(display);
    } catch {
        document.getElementById('display').value = 'Lỗi!';
    }
}

// Tính căn bậc hai
function calculateSquareRoot() {
    let display = document.getElementById('display').value;
    document.getElementById('display').value = Math.sqrt(eval(display));
}

// Tính lũy thừa
function calculatePower() {
    let base = prompt("Nhập cơ số:");
    let exponent = prompt("Nhập số mũ:");
    document.getElementById('display').value = Math.pow(base, exponent);
}

// Tính logarit
function calculateLog() {
    let display = document.getElementById('display').value;
    document.getElementById('display').value = Math.log10(eval(display));
}

// Tính e^x
function calculateExp() {
    let display = document.getElementById('display').value;
    document.getElementById('display').value = Math.exp(eval(display));
}

// Tính sin
function calculateSin() {
    let display = document.getElementById('display').value;
    document.getElementById('display').value = Math.sin(eval(display) * Math.PI / 180).toFixed(5);
}

// Tính cos
function calculateCos() {
    let display = document.getElementById('display').value;
    document.getElementById('display').value = Math.cos(eval(display) * Math.PI / 180).toFixed(5);
}

// Tính tan
function calculateTan() {
    let display = document.getElementById('display').value;
    document.getElementById('display').value = Math.tan(eval(display) * Math.PI / 180).toFixed(5);
}
