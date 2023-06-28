/*
Ingresa a https://random-data-api.com/documentation, para revisar la documentación
de la API de random data. Busca, al menos, tres URL y anota estos valores en un archivo
de texto en formato json. Utiliza el módulo fs para leerlo desde tu archivo index.js, luego
usa Axios para hacer una llamada a cada una de las URL, y muestra el resultado por
consola de manera secuencial.
*/

import fs from "fs";
import axios from "axios";

const obtenerEndpoints = () => {
  const data = fs.readFileSync("datosRandomdata.json", "utf-8");
  const endpoints = JSON.parse(data);

  return endpoints.urls;
};

const realizarLlamadas = async () => {
  const endpoints = obtenerEndpoints();

  for (const url of endpoints) {
    console.log("URL:" + url);
    await axios.get(url).then(({ data }) => console.log(data));
  }
};

realizarLlamadas();
