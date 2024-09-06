const form = document.getElementById("main-div");
const rowInput = document.getElementById("rows");
const columnInput = document.getElementById("columns");
const tableContainer = document.getElementById("table-container");

let rows = 0;
let columns = 0;

rowInput.addEventListener("change", (e) => {
  rows = e.target.value;
});

columnInput.addEventListener("change", (e) => {
  columns = e.target.value;
});

function createTable(rows, cols) {
  tableContainer.innerHTML = ''
  const table = document.createElement("table");
  table.classList.add("dynamic-table");

  const tableHead = document.createElement("thead");
  for (let i = 0; i < cols; i++) {
    const tHead = document.createElement("th");
    tHead.classList.add("table-head");
    tHead.textContent = `Column 0${i + 1}`;
    tableHead.append(tHead);
  }

  const tableBody = document.createElement("tbody");
  for (let i = 0; i < rows; i++) {
    const tRow = document.createElement("tr");

    for (let j = 0; j < cols; j++) {
      const tData = document.createElement("td");

      tData.classList.add("table-row");
      tData.textContent = `Row ${i + 1} Column ${j + 1}`;
      tRow.appendChild(tData);
    }
    tableBody.append(tRow);
  }
  table.appendChild(tableHead);
  table.appendChild(tableBody);
  tableContainer.appendChild(table);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  createTable(rows, columns);
});
