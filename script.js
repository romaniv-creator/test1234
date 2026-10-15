const form = document.getElementById("budgetForm");
const result = document.getElementById("result");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const income = Number(document.getElementById("income").value);
    const expenses = Number(document.getElementById("expenses").value);
    const unexpected = Number(document.getElementById("unexpected").value);
    const savings = Number(document.getElementById("savings").value);

    // Враховуємо всі витрати
    const totalExpenses = expenses + unexpected;

    // Обчислюємо залишок після витрат
    const balance = income - totalExpenses;

    if (balance < 0) {
        result.textContent =
            "Увага! Ваші витрати перевищують доходи на " +
            Math.abs(balance).toFixed(2) + " грн.";
    } else if (balance >= savings) {
        result.textContent =
            "Вітаємо! Ви можете заощадити " +
            savings.toFixed(2) +
            " грн. Залишок після заощаджень: " +
            (balance - savings).toFixed(2) + " грн.";
    } else {
        result.textContent =
            "Бажані заощадження завеликі. Вам не вистачає " +
            (savings - balance).toFixed(2) + " грн.";
    }
});

// Очищення форми та результату
form.addEventListener("reset", function() {
    result.textContent = "Тут з'явиться результат розрахунку.";
});