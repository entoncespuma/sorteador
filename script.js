document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("sorteoForm");
    const minInput = document.getElementById("minNumber");
    const maxInput = document.getElementById("maxNumber");
    const winnersInput = document.getElementById("numWinners");
    const resultContainer = document.getElementById("result");
    const winnersList = document.getElementById("winnersList");
    const clearBtn = document.getElementById("clearBtn");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const minNumber = parseInt(minInput.value);
        const maxNumber = parseInt(maxInput.value);
        const numWinners = parseInt(winnersInput.value);

        // Validar que los valores son correctos
        if (isNaN(minNumber) || isNaN(maxNumber) || isNaN(numWinners) || minNumber >= maxNumber || numWinners <= 0) {
            alert("Por favor ingrese valores válidos.");
            return;
        }

        // Limpiar lista de ganadores anterior
        winnersList.innerHTML = "";

        // Generar números aleatorios para los ganadores
        const winners = generateWinners(minNumber, maxNumber, numWinners);

        // Mostrar los resultados
        winners.forEach((winner) => {
            const listItem = document.createElement("li");
            listItem.textContent = `Ganador: ${winner}`;
            winnersList.appendChild(listItem);
        });

        resultContainer.style.display = "block"; // Mostrar resultados
    });

    // Función para generar números aleatorios
    function generateWinners(min, max, count) {
        const winners = new Set();
        while (winners.size < count) {
            const winner = Math.floor(Math.random() * (max - min + 1)) + min;
            winners.add(winner);
        }
        return [...winners];
    }

    // Limpiar resultados
    clearBtn.addEventListener("click", () => {
        minInput.value = "";
        maxInput.value = "";
        winnersInput.value = "";
        winnersList.innerHTML = "";
        resultContainer.style.display = "none";
    });
});
