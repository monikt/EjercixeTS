import { Electrodomestico } from './Electrodomestico';
export class Lavadora extends Electrodomestico {

    private carga: number;
    constructor();
    constructor(precioBase: number, peso: number);
    constructor(precioBase: number, color: string, consumoEnergetico: string, peso: number, carga: number);
    constructor(...args: any[]) {
        super();
        this.carga = this.consCarga;
        if (args.length == 2) {
            this.precioBase = args[0];
            this.peso =  args[1];
        }
        
        if (args.length == 5) {
            this.precioBase = args[0];  ;
            this.color= args[1];
            this.consumoEnergetico = args[2];
            this.peso =  args[3];
            this.carga = args[4];
        }
    }

    readonly consCarga: number = 5;

    /**
     * Getter $carga
     * @return {number}
     */
    public get $carga(): number {
        return this.carga;
    }


    precioFinal(): number {
        let precioFinalLavadora = super.precioFinal();
        if (this.carga > 30)
            precioFinalLavadora += 50;
        return precioFinalLavadora;
    }












}