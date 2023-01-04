import XLSX from "xlsx";
import fs from "fs";

const workbook = XLSX.readFile("./trans.csv", {});
const { Sheets } = workbook;

const data = Sheets.Sheet1;

const jsa = XLSX.utils.sheet_to_json(data, {
  header: 1,
  blankrows: false,
  raw: true,
});

let json = {};

const [, , ...rows] = jsa;

for (let i = 0; i < rows.length; i++) {
  const key = rows[i][0].toLowerCase();
  const value = rows[i][2];
  json[key] = value;
}

fs.writeFile("sv.json", JSON.stringify(json, null, 2, 2), function () {
  console.log("written");
});
