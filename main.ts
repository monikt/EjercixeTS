
import { Electrodomestico } from "./Electrodomestico";
import { Televisor } from './Televisor';
import { Lavadora } from './Lavadora';
import { Factura } from './Factura';

let $listElectrodosmetics: Array<Electrodomestico> = [];
$listElectrodosmetics.push(new Electrodomestico());
$listElectrodosmetics.push(new Televisor());
$listElectrodosmetics.push(new Lavadora());

$listElectrodosmetics.push(new Televisor(100,30));
$listElectrodosmetics.push(new Lavadora(80,50));
$listElectrodosmetics.push(new Electrodomestico(10,3));


//  Los colores disponibles son blanco, negro, rojo, azul y gris.
//A F

$listElectrodosmetics.push(new Televisor(100,"blanco","F",20,27,false));
$listElectrodosmetics.push(new Lavadora(120,"negro","B",60,10));
$listElectrodosmetics.push(new Electrodomestico(120,"Rojo","A",2));
$listElectrodosmetics.push(new Electrodomestico(20,"AZUL","D",3));


let i:number = 0;
$listElectrodosmetics.forEach((e ,i) => {


     console.log( 'index ' + i + ' precio Final ' + e.precioFinal());
     i++;
    
    } 
);

console.log('********************************************************')
Factura.getInstance().crearFactura($listElectrodosmetics);





