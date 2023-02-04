import { Electrodomestico } from "./Electrodomestico";
import { Televisor } from './Televisor';
import { Lavadora } from './Lavadora';

export class Factura {
    private static instance: Factura;
    /**
   * The Singleton's constructor should always be private to prevent direct
   * construction calls with the `new` operator.
   */
    private constructor() { }

    /**
     * The static method that controls the access to the singleton instance.
     *
     * This implementation let you subclass the Singleton class while keeping
     * just one instance of each subclass around.
     */
    public static getInstance(): Factura {
        if (!Factura.instance) {
            Factura.instance = new Factura();
        }

        return Factura.instance;
    }

    public crearFactura(listado: Array<Electrodomestico>) {
        console.log('Resumen de Factura ' + '1234');

        let precioTotal = listado.reduce((precioTotal, e) => precioTotal + e.precioFinal(), 0);
        listado.forEach(e => {
            let producto: string = 'Electrodomestico';
            if (e instanceof Televisor) 
                producto = 'Televisor'
            else if (e instanceof Lavadora)
                producto = 'Lavadora'
                
            console.log('Producto: ' + producto + ' Valor ' + e.precioFinal() + ' US')
        }
        );

        console.log('Precio Total: ' + precioTotal + ' US');


    }

}