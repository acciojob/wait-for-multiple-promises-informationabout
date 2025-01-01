//your JS code here. If required.
const output = document.getElementById("output");

// Add a loading row by default
const loadingRow = document.createElement("tr");
loadingRow.innerHTML = `<td colspan="2" class="text-center">Loading...</td>`;
output.appendChild(loadingRow);

function createRandomPromise(index) {
    return new Promise((resolve) => {
        const time = (Math.random() * 2 + 1).toFixed(3); // Random time between 1 and 3 seconds
        setTimeout(() => resolve({ name: `Promise ${index}`, time: parseFloat(time) }), time * 1000);
    });
}

const promises = [
    createRandomPromise(1),
    createRandomPromise(2),
    createRandomPromise(3),
];

const startTime = performance.now();

Promise.all(promises).then((results) => {
    const totalTime = ((performance.now() - startTime) / 1000).toFixed(3);

    output.innerHTML = "";
    results.forEach((result) => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${result.name}</td><td>${result.time}</td>`;
        output.appendChild(row);
    });

    const totalRow = document.createElement("tr");
    totalRow.innerHTML = `<td>Total</td><td>${totalTime}</td>`;
    output.appendChild(totalRow);
});
