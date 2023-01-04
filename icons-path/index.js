import XLSX from "xlsx";
import fs from "fs";

const workbook = XLSX.readFile("./icons.csv", {});
const { Sheets } = workbook;

const data = Sheets.Sheet1;

const jsa = XLSX.utils.sheet_to_json(data, {
  header: 1,
  blankrows: false,
  raw: true,
});

let message = "";

for (let i = 0; i < jsa.length; i++) {
  const key = jsa[i][0];
  const path = jsa[i][1];
  message += `
    ${key}: ${path ? `<path ${path.trim()} />` : ""},
  `;
}

// const [, , ...rows] = jsa;

// for (let i = 0; i < rows.length; i++) {
//   const key = rows[i][0].toLowerCase();
//   const value = rows[i][2];
//   json[key] = value;
// }

fs.writeFile("data.txt", message, function () {
  console.log("written");
});
