import type { Ido } from './Ido';
import './style.css';

const URL_LINK = "https://petrik-idojaras-default-rtdb.europe-west1.firebasedatabase.app/.json";
let data: Ido[];

function displayData() {
  const table = document.getElementById("table") as HTMLTableElement;
  table.innerHTML = "";
  data.forEach((item: Ido) => {
    const row = document.createElement("tr");

    const dayCel = document.createElement("td");
    dayCel.textContent = item.day;

    const tempCel = document.createElement("td");
    console.log(item);
    tempCel.textContent = item.temperature.toString();

    row.appendChild(dayCel);
    row.appendChild(tempCel);

    table.appendChild(row);
  })
}

async function loadData() {
  const response: Response = await fetch(URL_LINK);
  data = await response.json() as Ido[]
  console.log(data);
  displayData();
}

function init() {
  loadData();
}

document.addEventListener("DOMContentLoaded", init);