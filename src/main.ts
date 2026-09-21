import type { Ido } from './Ido';
import './style.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"

const URL_LINK = "https://petrik-idojaras-default-rtdb.europe-west1.firebasedatabase.app/.json";
let data: Ido[];

function displayData() {
  const tbody = document.getElementById("tbody") as HTMLTableSectionElement;
  tbody.innerHTML = "";
  data.forEach((item: Ido) => {
    const row = document.createElement("tr");

    const dayCel = document.createElement("td");
    dayCel.textContent = item.day;

    const tempCel = document.createElement("td");
    console.log(item);
    tempCel.textContent = item.temperature.toString();

    row.appendChild(dayCel);
    row.appendChild(tempCel);

    tbody.appendChild(row);
  })
}

async function loadData() {
  const response: Response = await fetch(URL_LINK);
  data = await response.json() as Ido[]
  console.log(data);
  displayData();
}

async function postData(e: Event) {
  e.preventDefault();
  const form = document.getElementById("formPost") as HTMLFormElement;
  const formData = new FormData(form);

  const temp = formData.get("temp") || 0;

  const idoRecord = {
    day: new Date().getDay().toString(),
    temperature: temp
  } as Ido

  data.push(idoRecord);
  displayData();
  form.reset();
}

function init() {
  document.getElementById("formPost")?.addEventListener("submit", postData)

  loadData();
}

document.addEventListener("DOMContentLoaded", init);