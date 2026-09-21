import type { Ido } from './Ido';
import './style.css';

const URL_LINK = "https://petrik-idojaras-default-rtdb.europe-west1.firebasedatabase.app/.json";
let data: Ido[];

async function loadData() {
  const response: Response = await fetch(URL_LINK);
  data = await response.json() as Ido[]
  console.log(data);
}

function init() {
  loadData();
}

document.addEventListener("DOMContentLoaded", init);