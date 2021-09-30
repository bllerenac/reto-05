// Definicion de Variables
let L = prompt('Ingrese la Cantidad de Leche') //Cantidad de Litros que Produce
let PG = prompt('Ingrese el precio por Galon')//Precio por Galon de Leche
let TG = L/3.785 //Cantidad de Galones que Produce
let GA = PG*TG //Ganancia por la entrega de leche

alert( 'Ganacia por Galon de Leche: '+ GA )