import { Electrodomestico } from './Electrodomestico';
export class Televisor extends Electrodomestico {
   

    private resolucion:number;
    private sincronizadorTDT:boolean;

    constructor();
    constructor(precioBase: number, peso: number);
    constructor(precioBase: number, color: string, consumoEnergetico: string, peso: number, resolucion:number, 
        sicronizadorDTD:boolean);
        constructor(...args: any[]) {
        super();
        this.resolucion = this.constantesTv.resolucion;
        this.sincronizadorTDT = this.constantesTv.sincronizadorTDT;
        if (args.length == 2) {
             this.precioBase = args[0];
            this.peso =  args[1];
        }

        if (args.length == 6) {
            this.precioBase = args[0];  ;
            this.color= args[1];
            this.consumoEnergetico = args[2];
            this.peso =  args[3];
            this.resolucion = args[4];
            this.sincronizadorTDT= args[5];
        }
    }

    readonly constantesTv = {
        resolucion: 20,
        sincronizadorTDT: false
      
    };


    precioFinal(): number {
        let precioFinalTv = super.precioFinal();
        if(this.resolucion> 40)
        precioFinalTv =  precioFinalTv + ( precioFinalTv * 0.3);

        if(this.sincronizadorTDT)
            precioFinalTv  += 50;
         
        return  precioFinalTv;
    }


    /**
     * Getter $resolucion
     * @return {number}
     */
	public get $resolucion(): number {
		return this.resolucion;
	}


    /**
     * Getter $sincronizadorTDT
     * @return {boolean}
     */
	public get $sincronizadorTDT(): boolean {
		return this.sincronizadorTDT;
	}




}